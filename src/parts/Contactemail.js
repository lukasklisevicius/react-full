


function Contactemail(props) {

    return (
        <>
        <div className='email'>
            <h3 >{props.name}</h3>
            <a  href={`mailto:${props.email}`}>{props.email}</a>
        </div>
        </>
    );
  }
  
  export default Contactemail;