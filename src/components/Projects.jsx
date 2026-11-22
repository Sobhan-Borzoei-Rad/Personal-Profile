import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <>
            <ul>
                <ProjectCard title='Bookly' description='Digital Bookstore' technologies='Flutter, Dart' />
                <ProjectCard title='Task Manager' description='Task Management System' technologies='Flutter, Django REST Framework' />
            </ul>
        </>
    );
}

export default Projects;