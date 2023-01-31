import { useInView } from 'react-intersection-observer';

function Storytext(props) {

    const { ref: myRef, inView: myElementIsVisible } = useInView();
    const { ref: myRef2, inView: myElementIsVisible2 } = useInView();
    return (
        <>
            <div className='text'>
                <p ref={myRef} className={`${myElementIsVisible ? 'slide-in' : ''}`}>{props.text1}</p>
                <p ref={myRef2} className={`${myElementIsVisible2 ? 'slide-in' : ''}`}>{props.text2}</p>
            </div>
        </>
    );
  }

  export default Storytext