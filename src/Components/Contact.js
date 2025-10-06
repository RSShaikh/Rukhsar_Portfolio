import React, { useState } from 'react'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = e => {
        e.preventDefault();
        alert('Message sent!');
    };
    return (
        <div className="container mt-4">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" className="form-control mb-2" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" className="form-control mb-2" onChange={handleChange} required />
                <textarea name="message" placeholder="Message" className="form-control mb-2" rows="4" onChange={handleChange} required />
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </div>
    )
}
