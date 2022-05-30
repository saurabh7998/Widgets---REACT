import React, { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Search from "./Search";
import Translate from "./Translate";


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

const options = [
    {
        title: 'The color Red',
        val: 'red'
    },
    {
        title: 'The color Blue',
        val: 'blue'
    },
    {
        title: 'A shade of yellow',
        val: 'yellow'
    }
]




export default () => {

    const[selected, setSelected] = useState(options[0])
    const[showDropdown, setShowDropDown] = useState(true)

    return(
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search/> */}

            {/* <button onClick={()=> setShowDropDown(!showDropdown)}>ToggleDropDown</button>
            {showDropdown ?
                <Dropdown 
                    label= "Select a color" 
                    selected={selected} 
                    setSelected={setSelected}
                    options={options}
                />
                : null
            } */}

            <Translate />
        </div>
    )
}