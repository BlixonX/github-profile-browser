import React from 'react'

function Repo() 
{
    const titleIcon = 'https://flaticons.net/custom.php?i=QOYTP8Hl8Eg2i5I8IDIRwc90X3Mun&format=png&size=256';
    const descriptionIcon = 'https://flaticons.net/custom.php?i=lEbfx8IReVDkuZIkIlIV2Tplmb6I8&format=png&size=256';
    const programmingLangIcon = 'https://flaticons.net/custom.php?i=mlh0XsmGOv9fPIDIvIreFA83vMul&format=png&size=256';

    return <div className='repo-card' onClick={() => document.location.href='/'}>
        <div className='icons'>
            <img src={titleIcon} alt="" />
            <img src={descriptionIcon} alt="" />
            <img src={programmingLangIcon} alt="" />
        </div>
        <div className='text-section'>
            <h3>Repo title</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam neque saepe placeat ipsum libero blanditiis, voluptatibus itaque dolor fugiat! Iusto.</p>
            <p>C++</p>
        </div>
    </div>
}

export default Repo;