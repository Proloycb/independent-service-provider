import React from 'react';
import person from '../../images/person.jpg';

const About = () => {
    return (
        <div className='flex justify-center mt-5 mb-5 text-center'>
            <div>
                <h1 className='text-5xl mt-5 mb-5'>About Me</h1>
                <img className='mx-auto w-60 h-60 rounded-full' src={person} alt="" />
                <h3 className='text-3xl mt-3 mb-5'>Proloy Chacroborty</h3>
                <p className='text-xl md:w-1/2 mx-auto '><small>My next 3 or 4 months target is achieve a good effort from this course.I will prepare best skill from web development. And I will trying my best effort achieve this success.</small></p>
            </div>
        </div>
    );
};

export default About;