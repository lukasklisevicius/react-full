import { useInView } from 'react-intersection-observer';


import Menuhidden from "./Menuhidden";
import {useState} from 'react'

function Menutext(props) {
    const [show, setShow] = useState(false)
    const { ref: myRef, inView: myElementIsVisible } = useInView();
    const buttonShow = '(+)'
    const buttonHide = '( - )'


    const handleClick = e =>{
        setShow(current => !current)
    }    



    return (
        <>
        <p ref={myRef} className={`${myElementIsVisible ? 'slide-in' : ''}`}>
        <span className='bold btn-1' onClick={handleClick}>{props.head} </span>
           <span onClick={handleClick} className='btn'>{!show ? (buttonShow):(buttonHide)}</span>

            {show && (
                <>
                    <Menuhidden hidden={props.hidden}/>
                </>
            )}

        </p>
        </>
    );
  }
  
  export default Menutext;