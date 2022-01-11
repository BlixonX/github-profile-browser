import React from 'react'

function Repo() 
{
    return <div className='repo-card' onClick={() => document.location.href='/'}>
        <div className='icons'>
            <img src="./icons/title_icon.png" alt="" />
            <img src="./icons/description_icon.png" alt="" />
            <img src="./icons/language_icon.png" alt="" />
        </div>
        <div className='text-section'>
            <h3>Repo title</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam neque saepe placeat ipsum libero blanditiis, voluptatibus itaque dolor fugiat! Iusto.</p>
            <p>C++</p>
        </div>
    </div>
}

export default Repo;