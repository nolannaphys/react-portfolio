import githubLogo from '../assets/github.svg.png'
import linkedinLogo from '../assets/linkedin-logo.webp'
// import stackOverflowLogo from '../assets/stackoverflow.png'
import './style/Footer.css'

export default function Footer() {
    return (
        // <footer className=" footer d-flex justify-content-center p-5">
        <footer className=" footer d-flex justify-content-left p-5">
            <p className='contactTitle'>Contact me at:</p>
            <p>
                <li><a href='mailto:nolannaphys@gmail.com'>nolannaphys@gmail.com</a> </li>
                <li><a href="https://www.linkedin.com/in/nolan-naphys-633934194/">linkedin.com/in/nolan-naphys</a></li>
                <li><a href="https://github.com/nolannaphys">github.com/nolannaphys</a></li>
            </p>
            {/* <a href="https://github.com/nolannaphys"><img src={githubLogo} className="logo" alt="Github logo"></img></a>
        <a href="https://www.linkedin.com/in/nolan-naphys-633934194/"><img src={linkedinLogo} className="logo" alt="Linkedin logo"></img></a>
        <a href="https://stackoverflow.com/users/22389991/nolan-naphys"><img src={stackOverflowLogo} className="logo" alt="Stack overflow logo"></img></a> */}
        </footer>
    )
};