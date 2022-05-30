import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({label, options, selected, setSelected}) => {

    const[dropdownActive, setDropdownActive] = useState(false)

    const ref = useRef()

    useEffect(() => {
        const onBodyClick = (event) => {
            if(ref.current.contains(event.target)){
                return;
            }
            setDropdownActive(false);
        }
    
        document.body.addEventListener("click", onBodyClick)

        //Cleanup function - called when component is being removed (just before removing)
        return () => {
            document.body.removeEventListener("click", onBodyClick);
        }

    },[]);

    const renderedOptions = options.map((option) => {
        if (option.val === selected.val) {
            return null
        }
        return (
            <div onClick={() => setSelected(option)} key={option.val} className="item">
                {option.title}
            </div>
        );
    })

    const onDropdownClick = (dropdownActive) => {
        setDropdownActive(dropdownActive)
    }
    


    return (
        <div ref={ref} className="ui form">
            <div className="ui field">
                <label className="label" >{label}</label>
                <div 
                onClick={()=> {onDropdownClick(!dropdownActive)}}
                className={`ui selection dropdown ${dropdownActive ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.title}</div>
                    <div className={`menu ${dropdownActive ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Dropdown