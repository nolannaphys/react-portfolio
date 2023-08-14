import { useState } from 'react';
// NOTE - The line below is here for future development. 
// import { validateEmail, validateMessage, validateName } from '../utils/helpers';
import './style/Contact.css'

const Contact = () => {
    return (
            <div class="contactDiv">
                <h1 class="contactTitle">Contact Me</h1>
                <h2 class="contactText">Email: nolannaphys@gmail.com</h2>
                <h2 class="contactText contactBottom">Phone Number: (609) 502-1902</h2>
            </div>
    )
}
export default Contact