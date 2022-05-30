import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = ({language, text}) => {

    const[translatedText, setTranslatedText] = useState('')

    useEffect(() => {
        const search = async() => {
            const{ data } = await axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
                params:{
                    q: text,
                    target: language.val,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });

            setTranslatedText(data.data.translations[0].translatedText)
        }

        const timeoutID = setTimeout(()=>{
            if(text.length > 0){
                search()
            }
        }, 500)

        return (()=>{
            clearTimeout(timeoutID)
        })
     
    },[language, text])

    return (
        <div>
           <h3 className="ui header">{translatedText}</h3>
        </div>
    )
}


export default Convert