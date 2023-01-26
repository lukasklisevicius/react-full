

function Contact(props) {


    return (
        <div className='black'>
            <section id="contact">
                <h1 className='head ct'><span>{props.contact.titleLight} </span>{props.contact.titleBold}</h1>
                <div className='table'>
                    <div className='email'>
                        <h3>{props.contact.pageName}</h3>
                        <a href={`mailto:${props.contact.pageEmail}`}>{props.contact.pageEmail}</a>
                    </div>
                    <div className='name'>
                        <p>{props.contact.person1Name}</p>
                        <a href={`tel:${props.contact.person1Phone}`}>{props.contact.person1Phone}</a>
                    </div>
                    <div className='name'>
                        <p>{props.contact.person2Name}</p>
                        <a href={`tel:${props.contact.person2Phone}`}>{props.contact.person1Phone}</a>
                    </div>
                    <div className='name'>
                        <p>{props.contact.person3Name}</p>
                        <a href={`tel:${props.contact.person3Phone}`}>{props.contact.person1Phone}</a>
                    </div>
                </div>
            </section>
        </div>

    );
  }
  
  export default Contact;