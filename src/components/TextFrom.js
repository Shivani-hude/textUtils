import React,{useState} from 'react'

export default function TextFrom(props) {
    const Upper = ()=>{
        let U=text.toUpperCase()
        props.showAlert("converted to Uppercase","success")
        setText(U)
    }
    const Lower = ()=>{
        let L=text.toLowerCase()
        props.showAlert("converted to lowercase","success")
        setText(L)
    }
    const Clear = ()=>{
        props.showAlert("Clear text","success")
        setText("")
    }
    const Copy = ()=>{
        props.showAlert("Copy text","success")
        let C = document.getElementById("box")
        C.select()
        navigator.clipboard.writeText(C.value)
    }
    const ExtraSpace = ()=>{
        props.showAlert("ExtraSpace removed","success")
        let E = text.split(/[ ]+/)
        setText(E.join(" "))
    }
    const Capitalize = ()=>{
        const C = text.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        setText(C)
        props.showAlert("converted to Capitalize","success")
    }
    
    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value)
    }
  const [text, setText] = useState('')
  return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter your text here" style={{backgroundColor: props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'black'}} id="box" rows="10"></textarea>
            </div>
            <button className='btn btn-dark mx-2' onClick={Upper}>UpperCase</button>
            <button className='btn btn-dark mx-2' onClick={Lower}>LowerCase</button>
            <button className='btn btn-dark mx-2' onClick={Clear}>Clear Text</button>
            <button className='btn btn-dark mx-2' onClick={Copy}>Copy Text</button>
            <button className='btn btn-dark mx-2 my-2' onClick={ExtraSpace}>Extra Space</button>
            <button className='btn btn-dark mx-2' onClick={Capitalize}>Capitalize Text</button>
        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes</p>
            <h2>Priview </h2>
            <p>{text}</p>
        </div>
    </>
  )
}


