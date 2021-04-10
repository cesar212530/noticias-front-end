import React from 'react'
import './news.css'
export const CalendarModal = ({ title, description, url, urlToImage }) => {
    return (
        <div className="container news-item">
            <img className="news-img" src={urlToImage} alt="NewImage"></img>
            <h3><a href={url}>
                   {title}
                </a>
            </h3>
            <p>{description}</p>
        </div>
    )
}

export default CalendarModal
