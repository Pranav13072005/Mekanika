import React, { useState } from 'react';
import './Contact.css'; 

const Contact = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        description: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const checkInputs = () => {
        const { username, email, password, phoneNumber, description } = formData;
        let valid = true;
        const newErrors = {
            username: '',
            email: '',
            password: '',
            phoneNumber: '',
            description: ''
        };

        if (username === '') {
            newErrors.username = 'Username is required!';
            valid = false;
        } else if (/\d/.test(username) || /[^A-Za-z0-9]/.test(username)) {
            newErrors.username = 'Username must only contain alphabets!';
            valid = false;
        }

        if (email === '') {
            newErrors.email = 'Email id is required!';
            valid = false;
        } else if (!validateEmail(email)) {
            newErrors.email = 'Enter a valid email id';
            valid = false;
        }

        if (password === '') {
            newErrors.password = 'Password is required!';
            valid = false;
        } else if (password.length < 8) {
            newErrors.password = 'Password must have minimum 8 characters!';
            valid = false;
        } else if (!/\d/.test(password) || !/[^A-Za-z0-9]/.test(password)) {
            newErrors.password = 'Password must contain at least one digit and one special character!';
            valid = false;
        }

        if (phoneNumber === '') {
            newErrors.phoneNumber = 'Phone number is required!';
            valid = false;
        } else if (/\D/.test(phoneNumber) || phoneNumber.length !== 10) {
            newErrors.phoneNumber = 'Phone number must contain 10 digits!';
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            console.log(formData);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        checkInputs();
    };

    return (
        <div className="contact-container">
            <div className="heading3">CONTACT <span id='red4'>FORM</span></div>
            <div className="container3">
                <form onSubmit={handleSubmit}>
                    <h1>Contact</h1>
                    <div className="input-group">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <div className="error">{errors.username}</div>
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <div className="error">{errors.email}</div>
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <div className="error">{errors.password}</div>
                    </div>
                    <div className="input-group">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                        <div className="error">{errors.phoneNumber}</div>
                    </div>
                    <div className="input-group">
                        <label>Description</label>
                        <input
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                        <div className="error">{errors.description}</div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
