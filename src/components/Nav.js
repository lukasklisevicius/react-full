import Navlink from "../parts/Navlink";
import { useInView } from 'react-intersection-observer';




function Nav(props) {
    // console.log(props.pages)


    return (
        <nav>
            <ul>
                {props.pages.map(link =>{
                    if(link.slug === 'home' || link.slug === 'video'){}else{

                            return(<Navlink key={link.pageId} slug={link.slug}/>)
                       
                   
                }})}


            </ul>
        </nav>
    );
  }
  
  export default Nav;

