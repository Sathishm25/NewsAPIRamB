import React, { useContext, useState } from 'react';
import { NewsApiTest } from '../client/newsApi';
import NewsData from './newsData';


const News = (props) => {
    const { data } = useContext(NewsApiTest);
    console.log(data);
    return (
        <>
        <div className='newsContainer'>
            {data ? data.articles.map(news => <NewsData data={news} key={news.url} />) : "Loading..."}
        </div>
        </>
    );
}

export default News;