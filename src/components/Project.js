
function Project(props) {
    return (
            <div key={props.project.id} className="project" id={props.project.id} onClick={window.open(`${props.project.link_to_page}`,'_blank')}>
                <div className='project-text'>
                    <h3 className='project-name'>{props.project.acf.project_title}</h3>
                            <p>#{props.project.acf.tag1}</p>
                            <p>#{props.project.acf.tag2}</p>
                            <p>#{props.project.acf.tag3}</p>
                            <p>#{props.project.acf.tag4}</p>
                            <p>#{props.project.acf.tag5}</p>
                            <p>#{props.project.acf.tag6}</p>
                        </div>
                        <div className='project-img'>
                            <img src={props.project.acf.image} alt={props.project.acf.image}></img>
                        </div>
                    </div>  
    )
  }
  
  export default Project;