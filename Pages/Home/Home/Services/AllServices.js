import React, { useEffect, useState } from 'react';
import useTitle from '../../../../hooks/useTitle';
import AllServiceCard from './AllServiceCard';


const AllServices = () => {
    useTitle('Services');
    const [allServices, setallServices] = useState([]);

    useEffect(() => {
        // total services in service page
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setallServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    allServices.map(allService => <AllServiceCard
                        key={allService._id}
                        allService={allService}
                    ></AllServiceCard>)
                }
            </div>

        </div>
    );
};

export default AllServices;