function Video(props) {

    return (
        <section className='vide-con' id='video-con'>
            <video className='video video-deskt' autoPlay playsInline muted loop src={props.video.videoDesktop.mediaItemUrl}></video>
            <video className='video video-mob' autoPlay playsInline muted loop src={props.video.videoMobile.mediaItemUrl}></video>
        </section>
    );
  }
  
  export default Video;