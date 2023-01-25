import React, {useState,useEffect} from 'react'
import Nav from '../components/Nav'

function Home() {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost/fullAgency/wordpress/wp-json/wp/v2/pages/39?acf_format=standard')
        .then(res => res.json())
        .then(data => {setData(data.acf)})
    },[])

    return (
            <header>
                <div className='logo'>
                    <div className='a-logo'>
                        <img src={data.logo_img} alt={data.logo_img}></img>
                    </div>
                </div>
                <Nav />
            </header>
    );
  }
  
  export default Home;