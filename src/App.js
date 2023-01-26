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

  const [graph,setGraph] = useState([])
  const [isLoading, setLoading] = useState(true);

  const qr = {query: `
  query NewQuery {
    pages {
      nodes {
        pageId
        slug
      }
    }
    pageHome: pageBy(pageId: 39) {
      pageId
      slug
      home_page {
        logoImg {
          mediaItemUrl
        }
      }
    }
    pageVideo: pageBy(pageId: 120) {
      pageId
      slug
      video_page {
        videoMobile {
          mediaItemUrl
        }
        videoDesktop {
          mediaItemUrl
        }
      }
    }
    pageStory: pageBy(pageId: 99) {
      pageId
      slug
      full_story_page {
        titleLight
        titleBold
        text1
        text2
      }
    }
    pageMenu: pageBy(pageId: 101) {
      pageId
      slug
      menu_page {
        titleLight
        titleBold
        header1
        header1About
        header2
        header2About
        header3
        header3About
        header4
        header4About
        header5
        header5About
        header6
        header6About
        header7
        header7About
        header8
        header8About
        header9
        header9About
      }
    }
    pageProjects: pageBy(pageId: 103) {
      pageId
      slug
      project_page {
        titleLight
        titleBold
      }
    }
    pageContact: pageBy(pageId: 105) {
      pageId
      slug
      contacts_page {
        titleLight
        titleBold
        pageName
        pageEmail
        person1Name
        person2Name
        person3Name
        person1Phone
        person2Phone
        person3Phone
        facebookLink
        instagramLink
        linkedinLink
        copyrights
      }
    }
    posts {
      nodes {
        postId
        project_post {
          projectTitle
          shortDescription
          linkToPage
          tag1
          tag2
          tag3
          tag4
          tag5
          tag6
          image {
            mediaItemUrl
          }
        }
      }
    }
  }
  `}


  const getData = () =>{
    fetch('http://localhost/fullAgency/wordpress/graphql',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(qr),
    })
    .then(res => res.json())
    .then(data =>{setGraph(data.data);setLoading(false)})
    .catch((err) => {
      console.log(err);
    });
  }



  useEffect(()=>{
    getData()
  },[])
  
  // console.log(graph.pageContact.contacts_page)

  if(isLoading){return(<div>loading</div>)}
  return (
    
    <>

    
        <Home home={graph.pageHome.home_page.logoImg.mediaItemUrl} pages={graph.pages.nodes}/>
        <Video video={graph.pageVideo.video_page}/>
        <Story story={graph.pageStory.full_story_page}/>
        <Menu menu={graph.pageMenu.menu_page}/>
        <Projects projectsPage={graph.pageProjects.project_page} projects={graph.posts.nodes}/>
        <Contact contact={graph.pageContact.contacts_page}/>
        <Footer links={graph.pageContact.contacts_page} />
    </>
  );}


export default App;
