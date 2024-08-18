'use client';
import React, { useEffect, useState } from 'react';
import Button from './Button';
import Link from 'next/link';
import Service from './Service';
import { services } from '@/utils/constants';
import { IService } from '@/utils/types';

const Services: React.FC<{ fullList: boolean }> = ({ fullList }) => {
    const [list, setList] = useState<IService[]>([]);

    useEffect(() => {
        const sortedServices = [...services].sort((a, b) => a.id - b.id);
        
        if (fullList) {
            setList(sortedServices);
        } else {
            setList(sortedServices.slice(0, 3));
        }
    }, [fullList]);

    return (
        <section id='services' className='section padding-x text-justify pt-36 pb-4'>
            <h1 className='h1'>PRIMARY AREAS OF PRACTICE</h1>
            <ul className='grid md:grid-cols-3 grid-cols-1 gap-8 mb-6'>
                {
                    list.map((service, id) => (
                        <li key={id} className='w-full'>
                            <Service 
                                title={service.title}
                                pic={service.pic}
                                description={service.description}
                             />
                        </li>
                    ))
                }
            </ul>
            {!fullList && <div className='w-fit'>
                <Link href='/services'>
                    <Button
                        type='secondary'
                        title='See all available services'
                        arrow={true}
                    />
                </Link>
            </div>}
        </section>
    )
}

export default Services;