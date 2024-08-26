'use client';

import React, { useEffect, useState } from 'react';

const Testimonials = () => {
    const [reviews, setReviews] = useState<any>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = await fetch(`/api/getReviews`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response}`);
                }

                const data = await response.json();

                if (!data?.data?.result?.reviews) {
                    throw new Error('No reviews found in response');
                }

                setReviews(data.data.result.reviews);
                setError(null);
            } catch (err) {
                console.error('Error fetching reviews:', err);
                setError('Error');
            }
        }

        fetchReviews();
    }, []);

    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-appearLong");
                }
            });
        };
    
        const observer = new IntersectionObserver(observerCallback);
    
        const applyObserver = () => {
            const targets = document.querySelectorAll(".appear-on-scroll-review");
    
            if (targets.length > 0) {
                targets.forEach((target) => {
                    observer.observe(target);
                });
            }
        };

        if (reviews.length > 0) {
            applyObserver();
        }

        return () => {
            observer.disconnect();
        };
    }, [reviews]);

    return (
        <section id='testimonials' className='section w-full pb-12'>
            <div className='pt-36 pb-4 padding-x'>
                <h1 className='h1 mb-10'>RECENT TESTIMONIALS</h1>
                {error ? (
                    <p className="error-message">Failed to load reviews: {error}</p>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-justify items-center'>
                        {reviews.filter((review: any) => review.rating > 3).map((review: any, id: number) => (
                            <article key={id} className="testimonial appear-on-scroll-review">
                                {Array.from({ length: review.rating }, (_, index) => (
                                    <span key={index} className="text-yellow-500 text-xl">
                                        {index < 5 ? '★' : '☆'}
                                    </span>
                                ))}<br />
                                <small>
                                    <data value={review.relative_time_description}>
                                        {review.relative_time_description}
                                    </data>
                                </small>
                                <h2 className='font-bold'>{review.author_name}</h2>
                                <p>{review.text}</p>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimonials;