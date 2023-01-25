import React, {useState,useEffect} from 'react'

function Nav() {

    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost/fullAgency/wordpress/wp-json/wp/v2/pages')
        .then(res => res.json())
        .then(data => {setData(data)})
    },[])


    return (
        <nav>
            <ul>
                {data.map(link =>{
                    if(link.slug === 'home' || link.slug === 'video'){}else{
                    return(<li key={link.id}><a href={`/#${link.slug}`}>{link.slug}</a></li>)
                }})}
            </ul>
        </nav>
    );
  }
  
  export default Nav;