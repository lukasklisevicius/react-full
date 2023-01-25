import React, {useState,useEffect} from 'react'
import Home from './pages/Home';
import Video from './pages/Video';
import Story from './pages/Story';
import Menu from './pages/Menu';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';


function App() {

  const [data,setData] = useState([])

  useEffect(()=>{
      fetch('http://localhost/fullAgency/wordpress/wp-json/wp/v2/pages')
      .then(res => res.json())
      .then(data => {setData(data)})
  },[])


  return (
    <>
        <Home />
        <Video />
        <Story />
        <Menu />
        {data.map(page=>{
          if(page.slug === "projects"){
            return(<Projects key={page.id}/>)
          }
        })}
        <Contact />
        <Footer />
    </>
  );
}

export default App;
