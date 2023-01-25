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
  const [home,setHome] = useState([])
  const [video,setVideo] = useState([])
  const [story,setStory] = useState([])
  const [menu,setMenu] = useState([])
  const [projectsPage,setProjectsPage] = useState([])
  const [projects,setProjects] = useState([])
  const [contact,setContact] = useState([])
  const [links,setLinks] = useState([])


  useEffect(()=>{
      fetch('http://localhost/fullAgency/wordpress/wp-json/wp/v2/pages')
      .then(res => res.json())
      .then(data => {setData(data)})
      .catch((err) => {
        console.log(err);
      });

      fetch('http://localhost/fullAgency/wordpress/wp-json/wp/v2/pages/39?acf_format=standard')
      .then(res => res.json())
      .then(data => {setHome(data.acf)})
      .catch((err) => {
        console.log(err);
      });

      fetch('http://localhost/fullAgency/wordpress/wp-json/wp/v2/pages/120?acf_format=standard')
      .then(res => res.json())
      .then(data => {setVideo(data.acf)})
      .catch((err) => {
        console.log(err);
      });

      fetch('http://localhost/fullAgency/wordpress/wp-json/wp/v2/pages/99?acf_format=standard')
      .then(res => res.json())
      .then(data => {setStory(data.acf)})
      .catch((err) => {
        console.log(err);
      });

      fetch('http://localhost/fullAgency/wordpress/wp-json/wp/v2/pages/101?acf_format=standard')
      .then(res => res.json())
      .then(data => {setMenu(data.acf)})
      .catch((err) => {
        console.log(err);
      });

      fetch('http://localhost/fullAgency/wordpress/wp-json/wp/v2/pages/103?acf_format=standard')
      .then(res => res.json())
      .then(data => {setProjectsPage(data.acf)})
      .catch((err) => {
        console.log(err);
      });

      fetch('http://localhost/fullAgency/wordpress/wp-json/wp/v2/posts?acf_format=standard')
      .then(res => res.json())
      .then(data =>{ setProjects(data)})
      .catch((err) => {
        console.log(err);
      });

      fetch('http://localhost/fullAgency/wordpress/wp-json/wp/v2/pages/105?acf_format=standard')
      .then(res => res.json())
      .then(data => {setContact(data.acf)})
      .catch((err) => {
        console.log(err);
      });

      fetch('http://localhost/fullAgency/wordpress/wp-json/wp/v2/pages/105?acf_format=standard')
      .then(res => res.json())
      .then(data => {setLinks(data.acf)})
      .catch((err) => {
        console.log(err);
      });


  },[])

  return (
    <>
        <Home home={home} pages={data}/>
        <Video video={video}/>
        <Story story={story}/>
        <Menu menu={menu}/>
        <Projects projectsPage={projectsPage} projects={projects}/>
        <Contact contact={contact}/>
        <Footer links={links} />
    </>
  );
}

export default App;
