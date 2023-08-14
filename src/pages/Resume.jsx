// NOTE - Be sure to include a link to resume when finished.
import './style/Resume.css'
export default function Resume() {
    return (
        <>
            <h3>Resume</h3>
            <body>
                <section className="front-end">
                    <h4>Front-End Skills</h4>
                    <ul className="front-list">
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>Java</li>
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
            </body>
        </>
    )
};