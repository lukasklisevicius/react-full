import React, {useState,useEffect} from 'react'

function Video() {
    const [video,setVideo] = useState([])

    useEffect(()=>{
        fetch('http://localhost/fullAgency/wordpress/wp-json/wp/v2/pages/120?acf_format=standard')
        .then(res => res.json())
        .then(data => {setVideo(data.acf)})
    },[])

    return (
        <section className='vide-con' id='video-con'>
            <video className='video video-deskt' autoPlay playsInline muted loop src={video.video_desktop}></video>
            <video className='video video-mob' autoPlay playsInline muted loop src={video.video_mobile}></video>
        </section>
    );
  }
  
  export default Video;