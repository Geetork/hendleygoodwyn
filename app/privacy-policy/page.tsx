import { privacyPolicy } from '@/utils/constants';
import React from 'react';

const page = () => {
    return (
        <main className='section padding-x text-justify pt-36 pb-12'>
            <h1 className='h1'>PRIVACY POLICY</h1>
            <p>Thank you for using our Website. This statement discloses the privacy policy for Hendley & Goodwyn, LLP, and the website hendleygoodwyn.com (the “Website”). Questions for clarification of this statement or comments may be addressed via email to: <a href='mailto:info@hendleygoodwyn.com' className='text-primary font-semibold'>info@hendleygoodwyn.com</a>.</p><br />

            <p>In this Privacy Policy, the words “you” and “your” refer to each Site visitor or user, “we”, “us” and “our” refer to hendleygoodwyn.com and Hendley & Goodwyn, LLP.</p><br />

            <p>We have adopted this Privacy Policy to further the relationship between us and our visitors. This statement of our Privacy Policy makes disclosures concerning our collection of information, including personal information, when you use the Website, and how we use and disclose it to others. By using the Website you accept the practices described in this Privacy Policy.</p>

            <dl className='flex flex-col gap-4 pt-6'>
                {
                    privacyPolicy.map((policy, id) => (
                        <div key={id}>
                            <dt className='h3'>{policy[0]}</dt>
                            <dd><pre style={{ fontFamily: 'inherit' }} className='text-wrap'>{policy[1]}</pre></dd>
                        </div>
                    ))
                }
            </dl> 

        </main>
    )
}

export default page;    