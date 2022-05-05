import React, { useState } from 'react';
import './App.css'



const App = () => {
    const [result, setResult] = useState("");

    const Clicked = (e) => {
        setResult(result.concat(e.target.name));
    }

    const Clear = () => {
        setResult("")
    }

    const Delete = () => {
        setResult(result.slice(0, -1))
    }
    const Calculate = () => {
        if ((result.toString()) === "1+") {
            setResult("NEVER SETTLE")
        }
        else {
            try {
                setResult(eval(result.toString()));
            } catch (error) {
                setResult("Error")
            }
        }


    }
    return (
        <>
            <div className='calculator'>
                <form>
                    <input type="text" value={result} />
                </form>
                <div className='keypad'>
                    <button onClick={Clear} id="clear" >c</button>
                    <button onClick={Delete} id="delete">del</button>
                    <button name="/" onClick={Clicked}>&divide;</button>
                    <button name="7" onClick={Clicked}>7</button>
                    <button name="8" onClick={Clicked}>8</button>
                    <button name="9" onClick={Clicked}>9</button>
                    <button name="*" onClick={Clicked}>&times;</button>
                    <button name="4" onClick={Clicked}>4</button>
                    <button name="5" onClick={Clicked}>5</button>
                    <button name="6" onClick={Clicked}>6</button>
                    <button name="-" onClick={Clicked}>&ndash;</button>
                    <button name="1" onClick={Clicked}>1</button>
                    <button name="2" onClick={Clicked}>2</button>
                    <button name="3" onClick={Clicked}>3</button>
                    <button name="+" onClick={Clicked}>+</button>
                    <button name="0" onClick={Clicked}>0</button>
                    <button name="." onClick={Clicked}>.</button>
                    <button onClick={Calculate} id="equal">=</button>

                </div>


            </div>
            {/* {
                [1, 2, 3, '+', '-'].map((val, i) => {
                    return (
                        <button key={i} onClick={(e) => {
                            console.log(val)
                        }}>{val}</button>
                    )
                })
            } */}
        </>
    )
}

export default App;