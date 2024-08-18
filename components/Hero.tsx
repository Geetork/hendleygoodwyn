'use client';

import React, { useState } from 'react';
import Button from './Button';
import ContactModal from './ContactModal';

const Hero: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <section id="home" className='section h-screen hero bg-cover bg-hero-bg bg-center'>
            <div className='w-full h-full flex-center items-center padding-x xs:text-xl text-md bg-black/40 backdrop-blur-lg bg-center'>
                <div className="flex-center items-start flex-col md:w-[80%] w-full gap-12">
                    <h1 className="text-white h1 w-full">
                        ADVANCING YOUR VISION. PROTECTING<br />YOUR INTERESTS
                    </h1>

                    <div className="flex flex-col lg:flex-row gap-12">
                        <p className="flex text-gray-100 text-justify font-semibold md:text-lg text-sm">
                            Hendley & Goodwyn, LLP is committed to advancing your business and creative projects. Whether you are still in the idea phase or already operational, we want to help you make sure that you are protected and your business is legally sound. The Music City Attorneys® are here to lend our legal expertise at each and every step of your journey to success.
                        </p>
                        <Button
                            title="Contact us"
                            type="primary"
                            onClick={() => setIsVisible(!isVisible)}
                            className='animate-bounce'
                        />
                    </div>
                </div>
            </div>
            <ContactModal isVisible={isVisible} close={() => setIsVisible(false)} />
        </section>
    )
}

export default Hero;