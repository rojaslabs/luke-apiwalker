import React from 'react';

const Starships = (props) => {

    const {responseData} = props

    return (
        <div className='card text-white bg-dark mb-3'>
            <div className='card-header'><h5 className='my-1'>{responseData.name}</h5></div>
            <div className='card-body pb-1'>
                <p><span className='text-muted'>Model:</span> {responseData.model}</p>
                <p><span className='text-muted'>Manufacturer:</span> {responseData.manufacturer}</p>
                <p><span className='text-muted'>Cost in credits:</span> {responseData.cost_in_credits}</p>
                <p><span className='text-muted'>Max Atmosphering Speed:</span> {responseData.max_atmosphering_speed}</p>
            </div>
        </div>
    );
}

export default Starships;
