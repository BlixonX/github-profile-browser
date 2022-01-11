import { useState } from 'react';
import './App.css';
import Repo from './Repo';

function App() 
{
  const [repositories, setRepositories] = useState([])
  const [userData, setUserData] = useState({})
  const [inputUser, setInputUser] = useState('')

  return <>
  <header className='flex fl-col'>
    <h1>Github profile browser</h1>
    <div id="search">
      <img src="./icons/search_arrow_icon.png" alt="" />
      <input type="text" name="" id="" onChange={ (e) => setInputUser(e.target.value)} />
      <img src="./icons/search_icon.png" alt="" />
    </div>
  </header>
  <main>
    <aside></aside>
    <section className='flex fl-wrap' >
      < Repo />
    </section>
  </main>
  </>
}

export default App;
