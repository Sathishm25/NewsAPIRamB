import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";
// import NewsData from '../components/newsData';

export const NewsApiTest = createContext();

const NewsApi = (props) => {
    const currentDate = new Date();
    const [searchTitle, setSearchTitle] = useState();
    const [sortData, setSortData] = useState("publishedAt");
    const [fromDate, setFromDate] = useState(currentDate);
    const [toDate, setToDate] = useState(currentDate);
    const [data, setData] = useState();
    const dateFormatecon = (date) => {
        let yourDate = new Date(date);
        return yourDate.toISOString().split('T')[0];
    }
    console.log('sort', sortData)
    const apiKeys = `${process.env.REACT_APP_API_KEY}`;
   
    useEffect(() => {
        fetchDate();
    }, []);
    const fetchDate = () => {
        const qyery = `https://newsapi.org/v2/everything?q=${searchTitle}&from=${dateFormatecon(fromDate)}&to=${dateFormatecon(toDate)}&sortBy=${sortData}&apiKey=${apiKeys}`;

        axios.get(qyery)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }


    return (
        <>
            <div className='testButtons'>
                <div className='row'>
                    <div className='content_div'>
                        <input
                            type="text"
                            className='testInput '
                            placeholder='Search...'
                            value={searchTitle}
                            onChange={(e) => setSearchTitle(e.target.value)}
                        />
                        <button className='srhButton' onClick={fetchDate}>Search Button</button>
                    </div>
                    <div className='content_div'>
                        <input
                            type="date"
                            className='testInput1'
                            placeholder='FromDate'
                            format="yyyy-MM-dd"
                            value={dateFormatecon(fromDate)}
                            onChange={(e) => setFromDate(e.target.value)}
                        />
                        <input
                            type="date"
                            className='testInput1'
                            placeholder='ToDate'
                            format="yyyy-MM-dd"
                            value={dateFormatecon(toDate)}
                            onChange={(e) => setToDate(e.target.value)}
                        /> <button className='AppButton' onClick={fetchDate}>Apply dsearch</button>
                    </div>
                    <div className='content_div'>
                        <select onChange={(e) => setSortData(e.target.value)} className='testInput'>
                            <option value="publishedAt">Published At</option>
                            <option value="popularity">popularity</option>
                        </select> <button className='AppButton' onClick={fetchDate}>Order of result</button>
                    </div>
                </div>
            </div>
            <div>
                <NewsApiTest.Provider value={{ data }}>
                    {props.children}
                </NewsApiTest.Provider>
            </div>
        </>
    )
}
export default NewsApi;
