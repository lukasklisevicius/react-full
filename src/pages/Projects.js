import React, {useState,useEffect} from 'react'

function Projects() {
    const [projectsPage,setProjectsPage] = useState([])

    useEffect(()=>{
        fetch('http://localhost/fullAgency/wordpress/wp-json/wp/v2/pages/103?acf_format=standard')
        .then(res => res.json())
        .then(data => {setProjectsPage(data.acf)})
    },[])

    const [projects,setProjects] = useState([])
    useEffect(()=>{
        fetch('http://localhost/fullAgency/wordpress/wp-json/wp/v2/posts?acf_format=standard')
        .then(res => res.json())
        .then(data =>{ setProjects(data)})
    },[])


    return (
        <section id='projects'>
            <h1 className='head pr'><span>{projectsPage.title_light} </span>{projectsPage.title_bold}</h1>
            {projects.map(project =>{
                return(

                    <div key={project.id} className="project" id={project.id} onClick={window.open(`${project.link_to_page}`,'_blank')}>
                        <div className='project-text'>
                            <h3 className='project-name'>{project.acf.project_title}</h3>
                            <p>#{project.acf.tag1}</p>
                            <p>#{project.acf.tag2}</p>
                            <p>#{project.acf.tag3}</p>
                            <p>#{project.acf.tag4}</p>
                            <p>#{project.acf.tag5}</p>
                            <p>#{project.acf.tag6}</p>
                        </div>
                        <div className='project-img'>
                            <img src={project.acf.image} alt={project.acf.image}></img>
                        </div>
                    </div>
                )
            })}
        </section>
    );
  }
  
  export default Projects;