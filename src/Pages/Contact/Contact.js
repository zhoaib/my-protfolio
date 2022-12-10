import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_96yitvv', 'template_3y1ohqq', form.current, 'v3PM2Mvk3regp2-Ak')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='my-20 '>
            <div className="card  bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <p className='text-3xl font-bold'>Contact Me</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <label className='font-bold'>Name</label> <br />
                        <input type="text" placeholder="Your Name" className="my-3 input input-bordered w-full max-w-xs" name="user_name" /> <br />

                        <label className='font-bold'>Email</label> <br />
                        <input type="email" placeholder="Your Email" className="my-3 input input-bordered w-full max-w-xs" name="user_email" /> <br />
                        <label className='font-bold'>Message</label> <br />
                        <textarea name="message" placeholder="Your Massage" className="my-3 input input-bordered w-full max-w-xs" /> <br />
                        <input className='about btn pointer' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;