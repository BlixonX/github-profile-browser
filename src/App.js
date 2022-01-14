import { useState } from 'react';
import './App.css';
import Repo from './Repo';

function App() 
{
  // VALUES
  const [repositories, setRepositories] = useState([])
  const [userData, setUserData] = useState()
  const [inputUser, setInputUser] = useState('')
  const [includeForks, setIncludeForks] = useState(true);
  // FUNCTIONS

  function showData()
  {
    try{
      return (
      includeForks ?
      repositories : repositories.filter( (repo) => repo.fork == false)
    ).map( (repo, index) => < Repo key={index} title={repo.name} description={repo.description} language={repo.language} url={repo.html_url} />)
    }catch (e) {blinkError()}
    return [];
  }

  function blinkError()
  {
    const search = document.getElementById('search');
    search.classList.add("error");
    setTimeout( () => search.removeAttribute('class') , 1000);
  }

  async function getData()
  {
    if (!inputUser)
    {
      setRepositories([])
      setUserData()
      return
    }

    if (inputUser.includes(' '))
    {
      blinkError()
      return
    }
    const userData = await fetch(`https://api.github.com/users/${inputUser}`).then( (resp) => resp.json());
    setUserData(userData);
    const repositories = await fetch(`https://api.github.com/users/${inputUser}/repos`).then( (resp) => resp.json());
    setRepositories(repositories);

    setInputUser('');
  }

  // COMPONENT
  return <>
  <header className='flex fl-col'>
    <h1>Github profile browser</h1>
    <div id="search">
      <div className="img" style={{backgroundImage: 'url(icons/search_arrow_icon.png)'}} ></div>
      <input type="text" name="" id="" spellCheck={false} onChange={ (e) => setInputUser(e.target.value)} value={inputUser} onKeyUp={ (e) => { if(e.key == "Enter") getData() }} />
      <div className="img" style={{backgroundImage: 'url(icons/search_icon.png)'}} onClick={ () => getData()} ></div>
    </div>
    <div className="filters flex fl-between">
      <label htmlFor="forks">
        <input type="checkbox" name="" id="" checked={includeForks} onChange={ () => setIncludeForks(!includeForks)} />Include Forks
      </label>
    </div>
  </header>
  <main>
    <aside>
      <div id="userdata" className='flex fl-col'>
        {
          userData && !userData.message ?
          <>
            <h3>Username:<br/>{userData.login}</h3>
            <div id="avatar" style={{backgroundImage: `url(${userData.avatar_url})`}} ></div>
            <h3>Real Name:<br/>{userData.name || "No name"}</h3>
            <h2>BIO:<br/><i>{userData.bio || "No bio"}</i></h2>
            <div id="contacts">
              <div className="contact-icon" style={{backgroundImage: `url(icons/company_icon.png)`}}></div>
              <div className="contact-text">{userData.company || "No company"}</div>
              <div className="contact-icon" style={{backgroundImage: `url(icons/location_icon.png)`}}></div>
              <div className="contact-text">{userData.location || "No location"}</div>
              <div className="contact-icon" style={{backgroundImage: `url(icons/website_icon.png)`}}></div>
              <div className="contact-text">{userData.blog ? <a href={`https://${userData.blog}`}>{userData.blog}</a> : "No website"}</div>
              <div className="contact-icon" style={{backgroundImage: `url(icons/twitter_icon.png)`}}></div>
              <div className="contact-text">{userData.twitter_username || "No twitter"}</div>
              <div className="contact-icon" style={{backgroundImage: `url(icons/email_icon.png)`}}></div>
              <div className="contact-text">{userData.email || "No email"}</div>
            </div>
          </> : <></>
        }
      </div>
    </aside>
    <section className='flex fl-wrap' >
      {showData()}
    </section>
  </main>
  </>
}

export default App;
