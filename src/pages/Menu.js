import React, {useState,useEffect} from 'react'

function Menu() {
    const [menu,setMenu] = useState([])

    useEffect(()=>{
        fetch('http://localhost/fullAgency/wordpress/wp-json/wp/v2/pages/101?acf_format=standard')
        .then(res => res.json())
        .then(data => {setMenu(data.acf)})
    },[])

    return (
        <section id='menu'>
            <h1 className='head wd'><span>{menu.title_light} </span>{menu.title_bold}</h1>
            <div className='wedo-text text'>
                <p>
                    <span className='bold btn-1'>{menu.header1} </span>
                    <span className='btn'>(+)</span>
                    <span className='appear-text'> {menu.header1_about}</span>
                </p>
                <p>
                    <span className='bold btn-1'>{menu.header2} </span>
                    <span className='btn'>(+)</span>
                    <span className='appear-text'> {menu.header2_about}</span>
                </p>
                <p>
                    <span className='bold btn-1'>{menu.header3} </span>
                    <span className='btn'>(+)</span>
                    <span className='appear-text'> {menu.header3_about}</span>
                </p>
                <p>
                    <span className='bold btn-1'>{menu.header4} </span>
                    <span className='btn'>(+)</span>
                    <span className='appear-text'> {menu.header4_about}</span>
                </p>
                <p>
                    <span className='bold btn-1'>{menu.header5} </span>
                    <span className='btn'>(+)</span>
                    <span className='appear-text'> {menu.header5_about}</span>
                </p>
                <p>
                    <span className='bold btn-1'> {menu.header6} </span>
                    <span className='btn'>(+)</span>
                    <span className='appear-text'> {menu.header6_about}</span>
                </p>
                <p>
                    <span className='bold btn-1'>{menu.header7} </span>
                    <span className='btn'>(+)</span>
                    <span className='appear-text'> {menu.header7_about}</span>
                </p>
                <p>
                    <span className='bold btn-1'>{menu.header8} </span>
                    <span className='btn'>(+)</span>
                    <span className='appear-text'> {menu.header8_about}</span>
                </p>
                <p>
                    <span className='bold btn-1'>{menu.header9} </span>
                    <span className='btn'>(+)</span>
                    <span className='appear-text'> {menu.header9_about}</span>
                </p>
            </div>
        </section>
    );
  }
  
  export default Menu;