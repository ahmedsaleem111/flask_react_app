import { useState } from "react"

export function Textbox() {
    
    const [text, setText] = useState("")

    function handleEvent(e) {
        setText(e.target.value)
    }

    return (
        <>
            <iuput onChange={(e) => handleEvent(e)}>
                <p>{text}</p>
            </iuput>
        </>
    )
}