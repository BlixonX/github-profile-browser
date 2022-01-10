import './App.css';
import Repo from './Repo';

function App() {
  return <>
  <header className='flex fl-col'>
    <h1>Github profile browser</h1>
    <div id="search"></div>
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
