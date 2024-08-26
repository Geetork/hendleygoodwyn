import { termsOfUse } from '@/utils/constants';
import React from 'react';

const page = () => {
    return (
        <main className='section padding-x text-justify pt-36 pb-12'>
            <h1 className='h1'>TERMS AND CONDITIONS OF USE </h1>
            <p>Welcome to our website. This site is maintained as a service to our customers. By using this site, you agree to comply with and be bound by the following terms and conditions of use. Please review these terms and conditions carefully. If you do not agree to these terms and conditions, you should not use this site. </p>

            <dl className='flex flex-col gap-4 pt-6'>
                {
                    termsOfUse.map((term, id) => (
                        <div key={id}>
                            <dt className='h3'>{id + 1} {term[0]}</dt>
                            <dd><pre style={{ fontFamily: 'inherit' }} className='text-wrap'>{term[1]}</pre></dd>
                        </div>
                    ))
                }
            </dl>

        </main>
    )
}

export default page;