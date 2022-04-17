import React from 'react';

const Article = ({article}) => {
    const {name, image} = article;
    return (
        <div className='border-solid border-2 rounded-lg text-center shadow-lg'>
            <img src={image} alt="" />
            <div className='p-3'>
                <p className='text-xl font-semibold'>{name}</p>
                <button className='border-solid border-2 rounded-xl text-white bg-blue-500 hover:bg-white hover:text-black p-2 mt-2'>Read More</button>
            </div>
        </div>
    );
};

export default Article;