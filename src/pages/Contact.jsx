import { useState } from 'react';
// NOTE - The line below is here for future development. 
// import { validateEmail, validateMessage, validateName } from '../utils/helpers';
import './style/Contact.css'

const Contact = () => {
    return (
        <div class="contactDiv">
            <h1 class="contactTitle">Contact Me</h1>
            <h2 class="contactText">
                <a>  nolannaphys@gmail.com</a>
            </h2>
            <h2 class="contactText">
                <a href='https://github.com/nolannaphys'>Github</a>
            </h2>
            <h2 class="contactText">
                <a href='https://www.linkedin.com/in/nolan-naphys-633934194/'>LinkedIn</a>
            </h2>
            <h2 class="contactText">
                <a href='https://stackoverflow.com/users/22389991/nolan-naphys'>Stack Overflow</a>
            </h2>
            <h2 class="contactText contactBottom"></h2>
        </div>
    )
}
export default Contact