import Project from '../components/Project'

function Projects(props) {

    return (
        <section id='projects'>
            <h1 className='head pr'><span>{props.projectsPage.title_light} </span>{props.projectsPage.title_bold}</h1>
            {props.projects.map(project =>{
                return(<Project key={[project.id]} project={project}></Project>)
            }
            )}
        </section>
    );
  }
  
  export default Projects;