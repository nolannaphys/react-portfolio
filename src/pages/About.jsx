import profilePic from '../assets/nolan-profile.jpeg';
import './style/About.css';

export default function About() {
    return (
        <>
            <div className="about-me">
                <h3>About me</h3>
                <img src={profilePic} className="profile" alt="Nolan Profile Picture"></img>
                <p className='bio'>Hello, I'm Nolan Naphys, a dedicated and creative full-stack web developer with a passion for crafting digital experiences that blend functionality with aesthetics. 
                {/* My journey into the world of programming began at the prestigious coding boot camp hosted by the University of Pennsylvania, where I honed my skills in both front-end and back-end technologies.
                    <p className='bio'>With a solid foundation in HTML, CSS, and JavaScript, I thrive on translating design concepts into responsive and user-friendly interfaces. On the server side, I'm well-versed in utilizing frameworks like Node.js and Express to build robust APIs and dynamic web applications.
                    </p>
                    <p className='bio'>My curiosity and commitment to staying up-to-date with the latest industry trends drive me to continuously expand my toolkit. Whether I'm delving into the intricacies of database management or experimenting with emerging technologies, I'm always seeking opportunities to push the boundaries of what's possible in web development.</p>
                    <p className='bio'>Collaboration lies at the heart of my approach. I enjoy working alongside diverse teams, where the fusion of ideas leads to the creation of exceptional digital solutions. As I embark on this exciting journey, I am eager to contribute my skills and enthusiasm to projects that make a meaningful impact..</p> */}
                </p>
            </div>
        </>
    )
};