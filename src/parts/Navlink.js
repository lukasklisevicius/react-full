import { useInView } from 'react-intersection-observer';


function Navlink(props) {
    const { ref: myRef, inView: myElementIsVisible } = useInView();

    

    return (
        <>
        <li ref={myRef} className={`${myElementIsVisible?'li':''}`}><a  href={`/#${props.slug}`}>{props.slug}</a></li>
        </>
    );
  }
  
  export default Navlink;