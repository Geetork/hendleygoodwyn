'use client';

import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import emailjs from '@emailjs/browser';
import useAlert from '@/hooks/useAlert';
import Alert from './Alert';

const formInitialState = {
    lname: '',
    fname: '',
    phone: '',
    email: '',
    message: '',
}

const Contact = () => {
    const [form, setForm] = useState<typeof formInitialState>(formInitialState);
    const [isFilled, setIsFilled] = useState(false);
    const ref = useRef<HTMLInputElement>(null);
    const { alert, showAlert, hideAlert } = useAlert();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const updatedState = {
            ...form,
            [e.target.name]: e.target.value
        }

        setForm(updatedState);

        const allFieldsFilled = Object.values(updatedState).every((field) => String(field).trim().length > 0);
        setIsFilled(allFieldsFilled);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
            {
                from_name: `${form.fname} ${form.lname}`,
                from_phone: form.phone,
                to_name: 'Hendley & Goodwyn LLP',
                from_email: form.email,
                to_email: 'hendleygoodwynllpclient@gmail.com',
                message: form.message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setForm(formInitialState);
            setIsFilled(false);
            showAlert({ text: 'Message sent successfully!', type: 'success' });

            setTimeout(() => {
                hideAlert();
            }, 3000);
        }).catch((error) => {
            showAlert({ text: "I didn't get your message!", type: 'danger' });
            console.log(error);
        });
    }

    useEffect(() => {
        ref.current?.focus();
    }, [])

    return (
        <div className='flex flex-wrap gap-6 h-full'>
            <div className='flex-1'>
                <p className='text-justify text-lg'>To help us best serve your inquiry, we recommend that you first describe the issue you’re having before telling us what you want to achieve. You may also email or call us to make an appointment. Our general response time is one business day.
                </p><br />

                <a href='mailto:info@hendleygoodwyn.com' className='inline-block'>info@hendleygoodwyn.com</a>
                <a href="tel:6156698754" className='inline-block'>(615) 669-8754</a>
                <address>41 Peabody Street Nashville, TN 37210</address>
            </div>

            <form method="post" onSubmit={handleSubmit} className='flex flex-1 flex-col gap-2'>
                {alert.show && <Alert {...alert} />}
                <fieldset className='flex-between gap-2 w-full'>
                    <legend className='label'>Name <small>(required)</small></legend>
                    <div className='flex flex-col'>
                        <label htmlFor="fname" className='label'>First name</label>
                        <input
                            ref={ref}
                            value={form.fname}
                            onChange={handleChange}
                            className='w-full form-input inline-block'
                            type="text"
                            id="fname"
                            name="fname"
                            required />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="lname" className='label'>Last name</label>
                        <input
                            value={form.lname}
                            onChange={handleChange}
                            className='w-full form-input inline-block'
                            type="text"
                            id="lname"
                            name="lname"
                            required />
                    </div>
                </fieldset>

                <label htmlFor="phone" className='label'>Phone <small>(required)</small></label>
                <input
                    value={form.phone}
                    onChange={handleChange}
                    className='form-input'
                    type="tel"
                    id="phone"
                    name="phone"
                    required />

                <label htmlFor="email" className='label'>Email <small>(required)</small></label>
                <input
                    value={form.email}
                    onChange={handleChange}
                    className='form-input'
                    type="email"
                    id="email"
                    name="email"
                    required />

                <label htmlFor="message" className='label'>Message <small>(required)</small></label>
                <textarea
                    value={form.message}
                    onChange={handleChange}
                    className='form-input mb-6'
                    rows={5}
                    id="message"
                    name="message"
                    placeholder='How can we help?'
                    required></textarea>

                <Button
                    title='Submit'
                    type='primary'
                    buttonType='submit'
                    disabled={!isFilled}
                />
            </form>
        </div>
    )
}

export default Contact;