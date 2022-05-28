import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";


const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend JS library used for web development'
    },
    {
        title: 'Why use react?',
        content: 'React is a framework that makes web dev easy and consistent'
    },
    {
        title: 'How to use react?',
        content: 'React is used by making components'
    }
]

export default () => {
    return(
        <div>
            {/* <Accordion items={items} /> */}
            <Search/>
        </div>
    )
}