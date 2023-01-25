

function Menu(props) {


    return (
        <section id='menu'>
            <h1 className='head wd'><span>{props.menu.title_light} </span>{props.menu.title_bold}</h1>
            <div className='wedo-text text'>
                <p>
                    <span className='bold btn-1'>{props.menu.header1} </span>
                    <span className='btn'>(+)</span>
                    <span className='appear-text'> {props.menu.header1_about}</span>
                </p>
                <p>
                    <span className='bold btn-1'>{props.menu.header2} </span>
                    <span className='btn'>(+)</span>
                    <span className='appear-text'> {props.menu.header2_about}</span>
                </p>
                <p>
                    <span className='bold btn-1'>{props.menu.header3} </span>
                    <span className='btn'>(+)</span>
                    <span className='appear-text'> {props.menu.header3_about}</span>
                </p>
                <p>
                    <span className='bold btn-1'>{props.menu.header4} </span>
                    <span className='btn'>(+)</span>
                    <span className='appear-text'> {props.menu.header4_about}</span>
                </p>
                <p>
                    <span className='bold btn-1'>{props.menu.header5} </span>
                    <span className='btn'>(+)</span>
                    <span className='appear-text'> {props.menu.header5_about}</span>
                </p>
                <p>
                    <span className='bold btn-1'> {props.menu.header6} </span>
                    <span className='btn'>(+)</span>
                    <span className='appear-text'> {props.menu.header6_about}</span>
                </p>
                <p>
                    <span className='bold btn-1'>{props.menu.header7} </span>
                    <span className='btn'>(+)</span>
                    <span className='appear-text'> {props.menu.header7_about}</span>
                </p>
                <p>
                    <span className='bold btn-1'>{props.menu.header8} </span>
                    <span className='btn'>(+)</span>
                    <span className='appear-text'> {props.menu.header8_about}</span>
                </p>
                <p>
                    <span className='bold btn-1'>{props.menu.header9} </span>
                    <span className='btn'>(+)</span>
                    <span className='appear-text'> {props.menu.header9_about}</span>
                </p>
            </div>
        </section>
    );
  }
  
  export default Menu;