'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Modal from './Modal';
import Button from './Button';
import ContactModal from './ContactModal';
import { usePathname } from 'next/navigation';
import Contacts from './Contacts';

const tabs = ['Home', 'Services', 'Team', 'Testimonials'];

const NavBar: React.FC<{
    className?: string,
    activeTab: string,
    setActiveTab: React.Dispatch<React.SetStateAction<string>>,
    setIsContactFormVisible: React.Dispatch<React.SetStateAction<boolean>>,
}> = ({
    className,
    activeTab,
    setActiveTab,
    setIsContactFormVisible,
}) => (
        <nav className='flex md:flex-row flex-col justify-end gap-8 md:text-[1rem] text-4xl md:justify-end flex-[2] h-fit'>
            <div className={className}>
                <ul className='flex items-center md:flex-row flex-col gap-x underline-offset-8'>
                    {
                        tabs.map((tab, id) => (
                            <li key={id}
                                onClick={() => setActiveTab(tab)}
                                className={`${tab === activeTab ? 'underline md:text-gray-200 text-primary' : 'no-underline'} hover:underline`}>
                                <Link href={`/${tab.toLowerCase() === 'home' ? '' : `#${tab.toLowerCase()}`}`}>
                                    {tab}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                <Contacts 
                    classes='flex items-center gap-x'
                    setIsContactFormVisible={setIsContactFormVisible}/>
            </div>
        </nav>
    )

const Header: React.FC<{
    isContactFormVisible: boolean,
    setIsContactFormVisible: React.Dispatch<React.SetStateAction<boolean>>,
}> = ({ isContactFormVisible, setIsContactFormVisible }) => {
    const [activeTab, setActiveTab] = useState('Home');
    const [isVisible, setIsVisible] = useState(false);
    const [headerColor, setHeaderColor] = useState("transparent");

    const path = usePathname();

    const getHeaderBgColor = () => {
        if (path !== '/') {
            setHeaderColor("rgb(0, 188, 245)")
        } else if (window.scrollY > 10) {
            setHeaderColor("rgb(0, 188, 245)")
        } else {
            setHeaderColor("transparent");
        }
    }

    useEffect(() => {
        getHeaderBgColor();
        window.addEventListener("scroll", () => getHeaderBgColor());

        return () => {
            window.removeEventListener("scroll", () => getHeaderBgColor());
        };
    }, [path])

    useEffect(() => {
        setIsVisible(false);
    }, [activeTab])

    return (
        <header
            style={{ backgroundColor: headerColor, transition: 'all 1s' }}
            className='flex-between padding-x padding-y h-[130px] w-full fixed z-10 text-white'>
            <Link href='/' className='h-full w-[60px]'>
                <Image
                    src='/logo.png'
                    alt='logo'
                    width={60}
                    height={100}
                    className='object-contain filter invert'
                />
            </Link>

            <NavBar 
                className={'flex-between gap-8 max-md:hidden text-white'} 
                activeTab={activeTab} 
                setActiveTab={setActiveTab}
                setIsContactFormVisible={setIsContactFormVisible} />

            <nav className='md:hidden'>
                <button className="h-5 w-8" onClick={() => setIsVisible(!isVisible)}>
                    <div className="sr-only">{isVisible ? "Close menu" : "Open menu"}</div>
                    <div className={`absolute h-0.5 w-8 transition duration-300 ease-in-out ${isVisible ? "rotate-45 bg-black" : "-translate-y-1.5 bg-current"}`} />
                    <div className={`absolute h-0.5 w-8 bg-current transition duration-300 ease-in-out ${isVisible ? "opacity-0" : "opacity-100"}`} />
                    <div className={`absolute h-0.5 w-8 transition duration-300 ease-in-out ${isVisible ? "-rotate-45 bg-black" : "translate-y-1.5 bg-current"}`} />
                </button>
            </nav>

            <Modal
                selector='modal'
                show={isVisible}
                close={() => setIsVisible(false)}
                className='animate-appear padding-x py-14 bg-white h-screen w-full md:hidden fixed left-0 top-0 z-20'
            >
                <NavBar
                    className='text-black w-full flex items-center justify-center flex-col h-full'
                    activeTab={activeTab}
                    setActiveTab={setActiveTab} 
                    setIsContactFormVisible={setIsContactFormVisible}
                />

                <div className='flex items-end'>
                    <Button
                        title='Contact us'
                        type='primary'
                        onClick={() => setIsContactFormVisible(true)}
                    />
                </div>
            </Modal>

            <ContactModal
                isVisible={isContactFormVisible}
                close={() => {
                    setIsContactFormVisible(false);
                    setIsVisible(false);
                }} />
        </header>
    )
}

export default Header;