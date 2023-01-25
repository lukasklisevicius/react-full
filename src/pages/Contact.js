

function Contact(props) {


    return (
        <div className='black'>
            <section id="contact">
                <h1 className='head ct'><span>{props.contact.title_light} </span>{props.contact.title_bold}</h1>
                <div className='table'>
                    <div className='email'>
                        <h3>{props.contact.page_name}</h3>
                        <a href={`mailto:${props.contact.page_email}`}>{props.contact.page_email}</a>
                    </div>
                    <div className='name'>
                        <p>{props.contact.person1_name}</p>
                        <a href={`tel:${props.contact.person1_phone}`}>{props.contact.person1_phone}</a>
                    </div>
                    <div className='name'>
                        <p>{props.contact.person2_name}</p>
                        <a href={`tel:${props.contact.person2_phone}`}>{props.contact.person1_phone}</a>
                    </div>
                    <div className='name'>
                        <p>{props.contact.person3_name}</p>
                        <a href={`tel:${props.contact.person3_phone}`}>{props.contact.person1_phone}</a>
                    </div>
                </div>
            </section>
        </div>

    );
  }
  
  export default Contact;