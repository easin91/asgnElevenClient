import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const Review = () => {
    useTitle('Review');

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            {/* <h2 className="text-5xl">{user} Can See {orders.length} Reviews</h2> */}
            <div className="w-full">
                <table className="table">
                    <thead>
                        <tr>

                            <th>All Review</th>
                            <th>
                                <Link to='/login'>
                                    <button className='btn btn-ghost'>Add Review</button>
                                </Link>
                            </th>
                            <th>
                            </th>
                            {/* <th>Review</th> */}
                            <th></th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <ReviewRow
                                key={order._id}
                                order={order}
                            ></ReviewRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Review;