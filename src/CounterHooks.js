import React, { useState,useContext } from 'react'
import { ThemeContext } from './App';


export default function CounterHooks(props) {
    console.log("Hooks")
    let {initialCount} = props
    const style  = useContext(ThemeContext)
    const [state,setState] = useState({count:initialCount})

    return(
        <div>
            <button  style={style} onClick={() => setState(prevState => {
                return {count:prevState.count-1}
            } )}> - </button>
                <span> {state.count} </span>
                <button onClick={() => setState(prevState => {
                return {count:prevState.count+1}
            } )}> + </button>
        </div>
    )
}



