'use client';

import { TServices } from '@/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const FooterService = () => {
    const [services, setServices] = useState<TServices[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_API_URL}/services/get-services`
                );
                const data = await res.json();
                const sortedServices = data?.data?.services?.sort(
                    (a: TServices, b: TServices) => a.priority - b.priority
                );
                setServices(sortedServices || []);
            } catch (error) {
                console.error("Error fetching services:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    if (loading) {
        return <p>Loading services...</p>;
    }

    if (!services.length) {
        return <h1 className="mt-10 flex items-center justify-center text-3xl capitalize">
            Oops! Services data not found!
        </h1>;
    }


    return (
        <div className="md:text-left w-full md:w-auto px-4">
            <h4>আমাদের সেবাসমূহ</h4>
            <ul className="space-y-5 mt-5">
                {services.map((service) => (
                    <li key={service._id}>
                        <Link href={`/services?tab=${encodeURIComponent(service.category)}`}>
                            {service.category}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterService;
