import Image from 'next/image';
import React from 'react';

const Service: React.FC<{
    [key: string]: string,
}> = ({ pic, title, description }) => {
    return (
        <>
            <div className='relative pb-[60%]'>
                <Image
                    src={pic}
                    alt='business'
                    layout='fill'
                    className='object-contain'
                />
            </div>
            <h2 className='h2 py-4'>{title}</h2>
            <p>{description}</p>
        </>
    )
}

export default Service;