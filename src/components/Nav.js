
function Nav(props) {

    return (
        <nav>
            <ul>
                {props.pages.map(link =>{
                    if(link.slug === 'home' || link.slug === 'video'){}else{
                    return(<li key={link.pageId}><a href={`/#${link.slug}`}>{link.slug}</a></li>)
                }})}
            </ul>
        </nav>
    );
  }
  
  export default Nav;