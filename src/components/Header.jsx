function Header() {
    const myName = 'Sobhan Borzoei Rad';
    const myJob = 'Frontend Developer';
    const myBio = "I'm a passionate Frontend Developer interested in building modern, responsive, and user-friendly web applications. I'm continuously improving my skills in JavaScript, React, and modern web technologies. I enjoy learning new concepts, solving problems, and turning ideas into functional user interfaces. My goal is to become a skilled Frontend Developer and build meaningful digital experiences.";
    return (
        <div>
            <h1>
                {myName}
            </h1>
            <h2>
                {myJob}
            </h2>
            <p>
                {myBio}
            </p>
        </div>
    );
}

export default Header;