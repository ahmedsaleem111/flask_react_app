import { useState, useEffect } from "react"


export function Button({show, setShow, color}) {
    return(
        <button onClick={() => setShow(!show)} style={{backgroundColor: color, height: "50px"}}>
            <p>{show == true ? "Hide Item" : "Show Item"}</p>
        </button>
    )
}