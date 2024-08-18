'use client';
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal: React.FC<{
    children: React.ReactNode,
    selector: string,
    show: boolean,
    close: () => void,
    className: string,
    overlay?: boolean,
}> = ({ children, selector, show, close, className, overlay }) => {
    const ref = useRef<Element | null>(null);

    useEffect(() => {
        ref.current = document.getElementById(selector);
    }, [selector]);

    useEffect(() => {
        const keyDownHandler = (event: KeyboardEvent) => {
            if (event.key === 'Escape' || event.key === 'Esc') close();
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => document.removeEventListener('keydown', keyDownHandler);
    }, []);

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [show]);

    return show && ref.current ? createPortal(
        <>
            {overlay && <div
                className='fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 z-20'
                onClick={() => close()} />}
            <div className='h-screen'>
                <div className={className}>
                    <div className='flex justify-end'>
                        <button className="h-5 w-8 close-button" onClick={() => close()}>
                            <div className="Close modal" />
                            <div className='absolute h-0.5 w-8 rotate-45 bg-black' />
                            <div className='absolute h-0.5 w-8 -rotate-45 bg-black' />
                        </button>
                    </div>
                    <div className='h-full flex justify-center flex-col overflow-y-auto px-2'>
                        {children}
                    </div>
                </div>
            </div>
        </>, ref.current) : null;
}

export default Modal;