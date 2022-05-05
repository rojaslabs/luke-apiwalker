import React from 'react';

const Planets = (props) => {

    const {responseData} = props

    return (
        <div className='card text-white bg-dark mb-3'>
            <div className='card-header'><h5 className='my-1'>{responseData.name}</h5></div>
            <div className='card-body pb-1'>
                <p><span className='text-muted'>Climate:</span> {responseData.climate}</p>
                <p><span className='text-muted'>Gravity:</span> {responseData.gravity}</p>
                <p><span className='text-muted'>Terrain:</span> {responseData.terrain}</p>
                <p><span className='text-muted'>Climate:</span> {responseData.climate}</p>
            </div>
        </div>
    );
}

export default Planets;
