import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('') 

    const [results, setResults] = useState([])

    const renderedResults = results.map((result)=> {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                    className="ui button"
                    href={`https://en.wikipedia.org/?curid=${result.pageid}`}>
                        Go
                    </a>

                </div>
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

        //Only invokes search when there is no input change for 700ms (optimization)
        const timeoutID = setTimeout(() => {
            if(searchTerm.length > 0){
                search()
            }
        }, 700)

        //This is a Cleanup function. (Read about useEffect cleanup function).
        //It is called on the next render to clear the previous timeout. 
        return(
            () => {
                clearTimeout(timeoutID)
            }
        )
       
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