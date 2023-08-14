import profilePic from '../assets/profile-pic.jpg';
import './style/About.css';

export default function About() {
    return (
        <>
            <div className="about-me">
                <h3>About me</h3>
                <img src={profilePic} className="profile" alt="Nolan Profile Picture"></img>
                <p className='bio'>My name is Nolan Naphys. I'm currently enrolled in a coding boot-camp at the University of Pennsylvania. My hope is to use the skills I have acquired in this program to create a successful career as a web developer</p>
            </div>
        </>
    )
};