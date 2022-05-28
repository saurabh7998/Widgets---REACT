import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('') 

    const [results, setResults] = useState([])

    const renderedResults = results.map((result)=> {
        return (
            <div key={result.pageid} className="item">
                <div className="content">
                    <div className="header">
                            {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
                </div>
            </div>
        )
    })

    //Every time data (searchTerm) changes and component re-renders, 
    //the function inside useEffect will be called.
    useEffect(()=> {
        const search = async () => {
            //axios returns a response which has data inside 'data' key.
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: searchTerm
                }
            })
            setResults(data.query.search)
        }
        if(searchTerm.length > 0){
            search()
        }
    }, [searchTerm])

    return (
        <div className="ui form">
            <div className="ui field">
                <label>Search</label>
                <input 
                className="input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}></input>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search;