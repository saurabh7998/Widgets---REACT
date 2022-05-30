import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert"

// API KEY = AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
    {
        title: 'Afrikaans',
        val: 'af'
    },
    {
        title: 'Arabic',
        val: 'ar'
    },
    {
        title: 'Hindi',
        val: 'hi'
    }
]



const Translate = () => {

    const[language, setLanguage] = useState(options[0])
    const[text, setText] = useState('')

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e)=> setText(e.target.value)}></input>
                </div>
            </div>
            <Dropdown 
                label = "Select a language"
                selected={language} 
                setSelected={setLanguage} 
                options={options}s
            />
            <hr/>

            <h3 className="ui header">Output</h3>
            <Convert language={language} text={text}/>
        </div>
    )
}

export default Translate;