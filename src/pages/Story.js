import React, {useState,useEffect} from 'react'

function Story() {
    const [story,setStory] = useState([])

    useEffect(()=>{
        fetch('http://localhost/fullAgency/wordpress/wp-json/wp/v2/pages/99?acf_format=standard')
        .then(res => res.json())
        .then(data => {setStory(data.acf)})
    },[])

    return (
        <div className='black'>
            <section id='story'>
                <h1 className='head sh'><span>{story.title_light} </span>{story.title_bold}</h1>
                <div className='text'>
                    <p>{story.text1}</p>
                    <p>{story.text2}</p>
                </div>
            </section>
        </div>
    );
  }
  
  export default Story;