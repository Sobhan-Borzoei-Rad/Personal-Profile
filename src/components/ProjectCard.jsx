function ProjectCard({ title, description, technologies }) {
    return (
        <div>
            <li>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p>{technologies}</p>
            </li>
        </div>
    );
}

export default ProjectCard;