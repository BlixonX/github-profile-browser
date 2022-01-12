import { useState } from 'react';
import './App.css';
import Repo from './Repo';

function App() 
{
  // VALUES
  const [repositories, setRepositories] = useState([])
  const [userData, setUserData] = useState({})
  const [inputUser, setInputUser] = useState('')
  // FUNCTIONS

  async function getData()
  {
    const userData = await fetch(`https://api.github.com/users/${inputUser}`).then( (resp) => resp.json());
    setUserData(userData);
    const repositories = await fetch(`https://api.github.com/users/${inputUser}/repos`).then( (resp) => resp.json());
    setRepositories(repositories);
    console.log(userData, repositories.map( (repo) => repo.html_url));
  }

  // COMPONENT
  return <>
  <header className='flex fl-col'>
    <h1>Github profile browser</h1>
    <div id="search">
      <div className="img" style={{backgroundImage: 'url(icons/search_arrow_icon.png)'}} ></div>
      <input type="text" name="" id="" onChange={ (e) => setInputUser(e.target.value)} value={inputUser} onKeyUp={ (e) => { if(e.key == "Enter") getData() }} />
      <div className="img" style={{backgroundImage: 'url(icons/search_icon.png)'}} onClick={ () => getData()} ></div>
    </div>
  </header>
  <main>
    <aside></aside>
    <section className='flex fl-wrap' >
      {repositories.map( (repo, index) => < Repo key={index} title={repo.name} description={repo.description} language={repo.language} url={repo.html_url} />)}
    </section>
  </main>
  </>
}

export default App;
