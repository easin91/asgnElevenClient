import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle';

const AllServiceCard = ({ allService }) => {
    useTitle('AllServiceCard');
    const { _id, img, price, title } = allService;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn btn-primary">Add Review</button>
                        </Link>
                        <Link to={`/services/${_id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServiceCard;