import { useRef, useState } from 'react'

function TextBoxPara() {

  const [text, setText] = useState("Default");


    return (  
        <>
            <p>{text}</p>
            < input type='text'
                onChange={(event) => {
                    setText(event.target.value)
                }}
            />
        </>
    );
}

export default TextBoxPara
    ;