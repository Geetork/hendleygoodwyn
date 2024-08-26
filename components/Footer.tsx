import React from 'react';
import Contacts from './Contacts';
import Link from 'next/link';

const Footer: React.FC<{
    setIsContactFormVisible: React.Dispatch<React.SetStateAction<boolean>>,
}> = ({ setIsContactFormVisible }) => {
    return (
        <footer className='w-full h-fit bg-hero-bg bg-cover bg-center relative'>
            <div className='absolute top-0 w-full h-full bg-black/40 backdrop-blur-md'></div>

            <div className='w-full h-fit flex md:justify-between padding-x padding-y items-center justify-center gap-10 flex-col md:flex-row'>
                <div className='flex flex-1 translate-x-0 text-white justify-start flex-col order-2 md:order-1'>
                    <Contacts
                        iconClasses='icon_color flex items-center gap-x h-[30px]'
                        classes='flex gap-x md:justify-start md:items-start items-center'
                        setIsContactFormVisible={setIsContactFormVisible} />

                    <a href='mailto:info@hendleygoodwyn.com' className='inline-block'>info@hendleygoodwyn.com</a>
                    <a href="tel:6156698754" className='inline-block'>(615) 669-8754</a>
                    <address>41 Peabody Street Nashville, TN 37210</address>
                </div>

                <div className='flex flex-1 justify-center items-center order-1 md:order-2'>
                    <img src="/Logo 4.png" alt="logo" width={150} className='filter invert' />

                </div>

                <div className='flex-1 order-3 text-sm flex md:flex-col flex-row md:items-end justify-center translate-x-0 text-white gap-4 underline underline-offset-4'>
                        <Link href='/privacy-policy'>Privacy Policy</Link>
                        <Link href='/terms-of-use'>Terms of Use</Link>
                        <Link href='/disclaimer'>Disclaimer</Link>
                    </div>
            </div>
        </footer>
    )
}

export default Footer;