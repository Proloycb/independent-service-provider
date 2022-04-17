import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('articles.json')
            .then(res => res.json())
            .then(data => setArticles(data));
    }, []);

    return (
        <div className='px-4 mt-5 mb-4'>
            <h3 className='text-3xl font-semibold text-center mb-4'>Latest Articles</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    articles.map(article => <Article
                        key={article.id}
                        article={article}
                    />)
                }
            </div>
        </div>
    );
};

export default Articles;