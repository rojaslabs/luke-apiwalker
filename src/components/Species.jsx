import React from 'react';

const Species = (props) => {

    const {responseData} = props

    return (
        <div className='card text-white bg-dark mb-3'>
            <div className='card-header'><h5 className='my-1'>{responseData.name}</h5></div>
            <div className='card-body pb-1'>
                <p><span className='text-muted'>Classification:</span> {responseData.classification}</p>
                <p><span className='text-muted'>Average lifespan:</span> {responseData.average_lifespan}</p>
                <p><span className='text-muted'>Average height:</span> {responseData.average_height}</p>
                <p><span className='text-muted'>Language:</span> {responseData.language}</p>
            </div>
        </div>
    );
}

export default Species;
