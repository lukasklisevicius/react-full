import { useInView } from 'react-intersection-observer';

function Video(props) {
    const { ref: myRef, inView: myElementIsVisible } = useInView();



    return (
        <section ref={myRef} className={`vide-con ${myElementIsVisible ? 'appear': ''}`} id='video-con'>
            <video className='video video-deskt' autoPlay playsInline muted loop src={props.video.videoDesktop.mediaItemUrl}></video>
            <video className='video video-mob' autoPlay playsInline muted loop src={props.video.videoMobile.mediaItemUrl}></video>
        </section>
    );
  }
  
  export default Video;