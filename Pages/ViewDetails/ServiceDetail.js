import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Review from '../Orders/Review';

const ServiceDetail = () => {
    useTitle('ServiceDetail Page');
    const { _id, title, img, price, description } = useLoaderData();
    // const { user } = useContext(AuthContext);

    const service = {
        service: _id,
        serviceName: title,
        price,
        img,
        description

    }

    fetch('http://localhost:5000/services', {
        // method: 'POST',
        headers: {
            'content-type': 'application/json',
            // authorization: `Bearer ${localStorage.getItem('genius-token')}`
        },
        body: JSON.stringify(service)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(er => console.error(er));


    return (
        <>
            <div>

                <div style={{ display: 'flex' }}>
                    <div className="card-body"><figure><img src={img} alt="Shoes" /></figure></div>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                        <div className="card-body">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* review section */}
            <div>
                <Review></Review>
            </div>
        </>
    );
};

export default ServiceDetail;



