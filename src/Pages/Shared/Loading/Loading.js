import React from 'react';

const Loading = () => {
    return (
        <div>
            <div class="flex justify-center items-center">
                <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 border-indigo-500 rounded-full" role="status">
                </div>
            </div>
        </div>
    );
};

export default Loading;