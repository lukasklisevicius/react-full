
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

function Footer(props) {


    return (
        <footer>
            <div style={{maxWidth:'900px'}}>
                <div className='con'>
                    <ul>
                        <li><a href={props.links.facebookLink}><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href={props.links.instagramLink}><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faInstagram} style={{color:'#000',position:'absolute',fontSize:'2rem'}}></FontAwesomeIcon></a></li>
                        <li><a href={props.links.linkedinLink}><FontAwesomeIcon icon={faCircle}/><FontAwesomeIcon icon={faLinkedinIn} style={{color:'#000',position:'absolute',fontSize:'2rem'}}></FontAwesomeIcon></a></li>
                    </ul>
                </div>
                <div className='copyrights'>
                    <p>© {props.links.copyrights}</p>
                </div>
            </div>
        </footer>

    );
  }
  
  export default Footer;