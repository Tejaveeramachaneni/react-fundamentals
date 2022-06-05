import React,{useRef} from 'react'


const FocusInput = () => {
    const data = useRef(null)
    const submitHandler = e =>{
        e.preventDefault();
        console.log(data);
        console.log(data.current.value);
        //updating 
        data.current.value = "HELLO wORLD"
        data.current.value+=1
    }
  return (
    <div>
        <center>
            <form>
                <input ref = {data} type = "text" placeholder = "Enter Name" /><br/>
                <input type ="submit" /><br />
            </form>
        </center>
    </div>
  )
}

export default FocusInput