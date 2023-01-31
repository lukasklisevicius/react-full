

function Contactname(props) {

    return (
        <>
        <div className='name'>
            <p>{props.name}</p>
            <a href={`tel:${props.phone}`}>{props.phone}</a>
        </div>
        </>
    );
  }
  
  export default Contactname;