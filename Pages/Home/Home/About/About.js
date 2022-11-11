import React from 'react';
import person from '../../../../assets/images/about_us/person.png';
import parts from '../../../../assets/images/about_us/parts.jpg';
import useTitle from '../../../../hooks/useTitle';


const About = () => {
    useTitle('About');
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={parts} alt="" className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className="text-2xl font-bold text-orange-600">About Us</p>
                    <h1 className="my-5 text-5xl font-bold">
                        We are qualified <br />
                        & of experience <br />
                        in HealthCare</h1>
                    <p className="py-6">There are many types of pain relief and many methods for providing pain relievers, including by mouth, through suppositories, via patches, or through a tube inserted in a blood vessel or injected under the skin.  </p>
                    <p className="py-6">You may be given a pump that allows you to control the amount of pain medicine you receive. Some of the medical options, which may be provided alone or in combination with others, include. </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;