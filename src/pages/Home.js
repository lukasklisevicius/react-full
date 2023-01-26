import Nav from "../components/Nav";

function Home(props) {

    return (
            <header>
                <div className='logo'>
                    <div className='a-logo'>
                        <img src={props.home} alt={props.home.logo_img}></img>
                    </div>
                </div>
                <Nav pages={props.pages}/>
            </header>
    );
  }
  
  export default Home;