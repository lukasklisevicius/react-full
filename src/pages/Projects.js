import Project from '../components/Project'

function Projects(props) {
const arr = props.projects
    return (
        <section id='projects'>
            <h1 className='head pr'><span>{props.projectsPage.titleLight} </span>{props.projectsPage.titleBold}</h1>
            {arr.map(project =>{
                return(<Project key={[project.postId]} project={project.project_post}></Project>)
            }
            )}
        </section>
    );
  }
  
  export default Projects;