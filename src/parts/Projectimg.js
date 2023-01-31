import { useInView } from 'react-intersection-observer';


function Projectimg(props) {
    const { ref: myRef, inView: myElementIsVisible } = useInView();

    return (
        <>
            <div className={`project-img ${myElementIsVisible ?  'appear-media-img' : ''}` }>
                <img ref={myRef} src={props.src} alt={props.alt} className={`${myElementIsVisible ?  'appear-media' : ''}` }></img>
            </div>
        </>
    );
  }

  export default Projectimg
  