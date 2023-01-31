import { useInView } from 'react-intersection-observer';
function Header(props) {

    const { ref: myRef, inView: myElementIsVisible } = useInView();


    return (<>
        <h1 ref={myRef} className={`head pr ${myElementIsVisible ? 'slide-in': ''}`}>

            <span>{props.light} </span>
            {props.bold}
        </h1>
        </>
    );
  }
  
  export default Header;

