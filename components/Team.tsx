import React from 'react';
import Image from 'next/image';

const members = [{
    name: 'Andrew Goodwyn',
    position: 'Attorney & Counselor at Law',
    description: `A Texas native, Andrew received his Bachelor’s Degree in Fashion Merchandising from the University of North Texas and his law degree from Texas A&M University School of Law.\n
        Andrew provides legal counsel in the areas of entertainment, business, and intellectual property. Andrew is committed to ensuring artists receive fair arrangements that match their individuality. By bridging the gap between legal intricacies and artistic vision, Andrew empowers artists to approach negotiations assuredly, knowing they are getting more than just a standard deal – they are getting a deal that respects their artistry and benefits their career.\n
        Outside of law, Andrew has an obsession with music discovery and enjoys staying active through skateboarding.`,
    education: `J.D. Texas A&M University School of Law, Concentration in Intellectual Property; B.S., Fashion Merchandising, University of North Texas`,
    pic: '/andrew.jpg'
}, {
    name: 'Holland Hendley',
    position: 'Attorney & Counselor at Law',
    description: `Holland represents a broad range of clients, and his practice primarily focuses on business and corporate law, intellectual property law, entertainment and media law, government contracts, and litigation and dispute resolution. Holland has experience handling a wide array of disputes and transactional matters and is committed to providing excellent representation to his clients.\n 
    Originally from Dallas, Texas, Holland is a graduate of Belmont University and Texas A&M University School of Law. Holland received his license to practice law in 2019 and is a founding partner of Hendley & Goodwyn, LLP. Holland is admitted to practice in all Tennessee courts as well as the United States District Court for Middle Tennessee.\n
    Beyond the law, Holland enjoys spending time with his Great Pyrenees named Beans, playing music, traveling, surfing, and spending time outdoors. `,
    education: `J.D., Texas A&M University School of Law, Concentration in Intellectual Property; B.B.A., Music Business, Belmont University`,
    pic: '/holland.jpg'
}]

const Team = () => {
    return (
        <section id='team' className='section padding-x text-justify pt-36 pb-4 h-fit'>
            <h1 className='h1'>WHO WE ARE</h1>
            <div className='flex flex-col gap-10'>
                {
                    members.map((member, id) => (
                        <article key={id}>
                            <div className='w-full pb-2'>
                                <div className={`${id / 2 === 0 ? 'float-left' : 'float-right'} m-0 relative md:pb-[35%] pb-[100%] w-full md:w-1/3 mb-5`}>
                                    <Image
                                        src={member.pic}
                                        alt='team member'
                                        layout='fill'
                                        className={`${id / 2 === 0 ? 'md:object-left-top' : 'md:object-right-top'} object-center object-contain`}
                                    />
                                </div>
                                <div>
                                    <h2 className='h2'>{member.name}</h2>
                                    <h3 className='h3 py-4'>{member.position}</h3>
                                    {member.description.split('\n').map((line, id) => (
                                        <p key={id} className='pb-2'>{line}</p>
                                    ))}
                                </div>
                            </div>
                            <div className='flex justify-between gap-4 w-full py-6 border-gradient'>
                                <h2 className='h3'>Education</h2>
                                <ul>
                                    {member.education.split(';').map((education, id) => (
                                        <li key={id} className='before:content-["✔"]'>&nbsp;{education}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

export default Team;