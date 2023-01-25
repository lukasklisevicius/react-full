function Video(props) {


    return (
        <section className='vide-con' id='video-con'>
            <video className='video video-deskt' autoPlay playsInline muted loop src={props.video.video_desktop}></video>
            <video className='video video-mob' autoPlay playsInline muted loop src={props.video.video_mobile}></video>
        </section>
    );
  }
  
  export default Video;