import React, {useState,useEffect} from 'react'

function Contact() {
    const [contact,setContact] = useState([])

    useEffect(()=>{
        fetch('http://localhost/fullAgency/wordpress/wp-json/wp/v2/pages/105?acf_format=standard')
        .then(res => res.json())
        .then(data => {setContact(data.acf)})
    },[])

    return (
        <div className='black'>
            <section id="contact">
                <h1 className='head ct'><span>{contact.title_light} </span>{contact.title_bold}</h1>
                <div className='table'>
                    <div className='email'>
                        <h3>{contact.page_name}</h3>
                        <a href={`mailto:${contact.page_email}`}>{contact.page_email}</a>
                    </div>
                    <div className='name'>
                        <p>{contact.person1_name}</p>
                        <a href={`tel:${contact.person1_phone}`}>{contact.person1_phone}</a>
                    </div>
                    <div className='name'>
                        <p>{contact.person2_name}</p>
                        <a href={`tel:${contact.person2_phone}`}>{contact.person1_phone}</a>
                    </div>
                    <div className='name'>
                        <p>{contact.person3_name}</p>
                        <a href={`tel:${contact.person3_phone}`}>{contact.person1_phone}</a>
                    </div>
                </div>
            </section>
        </div>

    );
  }
  
  export default Contact;