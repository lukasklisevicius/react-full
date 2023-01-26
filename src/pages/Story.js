

function Story(props) {


    return (
        <div className='black'>
            <section id='story'>
                <h1 className='head sh'><span>{props.story.titleLight} </span>{props.story.titleBold}</h1>
                <div className='text'>
                    <p>{props.story.text1}</p>
                    <p>{props.story.text2}</p>
                </div>
            </section>
        </div>
    );
  }
  
  export default Story;