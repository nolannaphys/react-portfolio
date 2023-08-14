import { useState } from 'react';
import { validateEmail, validateMessage, validateName } from '../utils/helpers';
import './style/Contact.css'

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateName(name)) {
            setErrorMessage('Please enter your name.');
            return;
        }
        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }
        if (!validateMessage(message)) {
            setErrorMessage('Please enter a message.');
            return;
        }
    };

    return (
        <>
            <h3>Contact</h3>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label className='form-label'>Name</label>
                    <input className='form-control' style={{ width: '20rem' }}
                        value={name} name='name'
                        onChange={handleInputChange}
                        type='text'
                    />
                    <label className='form-label'>Email</label>
                    <input className='form-control' style={{ width: '20rem' }}
                        value={email}
                        name='email'
                        onChange={handleInputChange}
                        type='email'
                    />
                    <label className='form-label'>Message</label>
                    <textarea className='form-control' style={{ width: '20rem' }}
                        value={message}
                        name='message'
                        onChange={handleInputChange}
                        type='text' />
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
            {errorMessage && (
                <div className='error'>
                    <p className='error-text'>{errorMessage}</p>
                </div>
            )}
        </>
    );
}

export default Form;