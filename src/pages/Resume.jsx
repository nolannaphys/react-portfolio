import { Link } from 'react-router-dom';
import './style/Resume.css'
export default function Resume() {
    return (
        <>
            <h3>
                {/* <Link
                    to='https://docs.google.com/document/d/1ULGLeme-m5oNcPgUwd8IWijgIq4D1OmPTb5lnocbqDQ/edit?usp=sharing'>
                    <h3>Resume</h3>
                </Link> */}
                Resume
            </h3>
            <body>
                <section className="front-end">
                    <h4>Front-End Skills</h4>
                    <ul className="front-list">
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                    </ul>
                </section>
                <section className="back-end">
                    <h4>Back-End Skills</h4>
                    <ul className="back-list">
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Object-Oriented Programming</li>
                        <li>SQL</li>
                        <li>NoSQL</li>
                        <li>MIPS</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                    </ul>
                </section>
                <section className="back-end">
                    <h4>Additional Technologies</h4>
                    <ul className="back-list">
                        <li>Github</li>
                        <li>VS Code</li>
                        <li>Git Bash</li>
                        <li>JQuery</li>
                        <li>Heroku</li>
                    </ul>
                </section>
            </body>
        </>
    )
};