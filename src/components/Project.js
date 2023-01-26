
function Project(props) {
    return (
            <div key={props.project.id} className="project" id={props.project.id} onClick={window.open(`${props.project.linkToPage}`,'_blank')}>
                <div className='project-text'>
                    <h3 className='project-name'>{props.project.projectTitle}</h3>
                            <p>#{props.project.tag1}</p>
                            <p>#{props.project.tag2}</p>
                            <p>#{props.project.tag3}</p>
                            <p>#{props.project.tag4}</p>
                            <p>#{props.project.tag5}</p>
                            <p>#{props.project.tag6}</p>
                        </div>
                        <div className='project-img'>
                            <img src={props.project.image.mediaItemUrl} alt={props.project.image.mediaItemUrl}></img>
                        </div>
                        <p>{props.project.shortDescription}</p>
                    </div>  
    )
  }
  
  export default Project;