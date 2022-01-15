import React from 'react'

function Repo({title, description, language, url}) 
{
    return <div className='repo-card' onClick={() => document.location.href=url}>
        <div className='icons'>
            <div className="img" style={{backgroundImage: 'url(icons/title_icon.png)'}} ></div>
            <div className="img" style={{backgroundImage: 'url(icons/description_icon.png)'}} ></div>
            <div className="img" style={{backgroundImage: 'url(icons/language_icon.png)'}} ></div>
        </div>
        <div className='text-section'>
            <h3>{title}</h3>
            <p>{description || "No description."}</p>
            <p>{language || "No language"}</p>
        </div>
        <a href=""></a>
    </div>
}

export default Repo;