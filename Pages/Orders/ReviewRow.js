import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const ReviewRow = ({ order }) => {
    useTitle('ReviewRow');
    const { user } = useContext(AuthContext);
    const { phone, customer, service, message, email } = order;
    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [service])

    return (
        <div>
            <tr>
                <th>

                    <label>
                        <button className='btn btn-ghost'></button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="rounded w-24 h-24">
                                {
                                    orderService?.img &&
                                    <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">
                                {<img style={{ height: '30px' }} src={user?.photoURL} alt="" />}
                            </div>
                            <div className="font-bold">{email}</div>
                            <div className="font-bold">{customer}</div>
                            <div className="text-sm opacity-50">{phone}</div>
                        </div>
                    </div>
                </td><td> </td>
                <td>
                    Review :
                    {/* <br />
                    <span className="badge badge-ghost badge-sm"></span> */}
                </td>
                <td>{message}</td>
                <th>
                    <button

                        className="btn btn-ghost btn-xs"></button>
                </th>
            </tr>
        </div>
    );
};

export default ReviewRow;