import React from 'react';

const NewsData = ({ data }) => {
    return (
        <div className='news'>
            <h1 className='news_title'>{data.title}</h1>
            <span className='news_sourceName'>{data.source.name}</span>
            <p className='news_description'>{data.description}</p>
            <span className='news_published'>{data.publishedAt}</span><br/>
            {/* <span className='news_urlToImage' alt="Images">{data.urlToImage}</span> */}
        </div>
    )
}

export default NewsData;