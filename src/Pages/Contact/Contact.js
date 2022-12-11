import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import useTitle from '../../hooks/UseTitle';

const Contact = () => {
    useTitle('Contact-Me')
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_96yitvv', 'template_3y1ohqq', form.current, 'XINurYZvYq0YP3N4M')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='my-20 text-center  '>
            <div className="card  bg-base-100 shadow-xl mx-auto ">
                <div className="card-body">
                    <p className='text-3xl font-bold'>Contact Me</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <label className='font-bold'>Name</label> <br />
                        <input type="text" placeholder="Your Name" className="my-3 input input-bordered w-1/2" name="user_name" /> <br />

                        <label className='font-bold'>Email</label> <br />
                        <input type="email" placeholder="Your Email" className="my-3 input input-bordered w-1/2" name="user_email" /> <br />
                        <label className='font-bold'>Message</label> <br />
                        <textarea name="message" placeholder="Your Massage" className="my-3 input input-bordered w-1/2" /> <br />
                        <input className='btn btn-primary' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;