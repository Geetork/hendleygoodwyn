import Link from 'next/link';
import React from 'react';
import Linkedin from '@/public/linkedin.svg';
import Instagram from '@/public/instagram.svg';
import Email from '@/public/email.svg';
import Facebook from '@/public/facebook.svg';

const Contacts: React.FC<{ 
    classes: string, 
    iconClasses?: string,
    setIsContactFormVisible: React.Dispatch<React.SetStateAction<boolean>>,
}> = ({ classes, iconClasses,setIsContactFormVisible }) => {
    return (
        <ul className={classes}>
            <li className='no-underline hover:underline'>
                <button className='flex justify-center' onClick={() => setIsContactFormVisible(true)}>
                    <Email className={`icon translate-y-0 ${iconClasses}`} width={18} />
                </button>
            </li>
            <li className='no-underline hover:underline'>
                <Link href='http://instagram.com/hendleygoodwynllp'>
                    <Instagram className={`icon translate-y-0 ${iconClasses}`} width={18} />
                </Link>
            </li>
            <li className='no-underline hover:underline'>
                <Link href='https://www.linkedin.com/company/hendley-goodwyn-llp/?viewAsMember=true'>
                    <Linkedin className={`icon -translate-y-[0.6px] ${iconClasses}`} width={16} />
                </Link>
            </li>
            <li className='no-underline hover:underline'>
                <Link href='http://facebook.com/hendleygoodwynllp'>
                    <Facebook className={`icon -translate-x-[4px] ${iconClasses}`} width={16} />
                </Link>
            </li>
        </ul>
    )
}

export default Contacts