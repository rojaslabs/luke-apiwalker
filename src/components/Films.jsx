import React from 'react';

const Films = (props) => {

    const {responseData} = props

    return (
        <div className='card text-white bg-dark mb-3'>
            <div className='card-header'><h5 className='my-1'>{responseData.title}</h5></div>
            <div className='card-body pb-1'>
                <p><span className='text-muted'>Release Date:</span> {responseData.release_date}</p>
                <p><span className='text-muted'>Episode:</span> {responseData.episode_id}</p>
                <p><span className='text-muted'>Director:</span> {responseData.director}</p>
                <p><span className='text-muted'>Producer:</span> {responseData.producer}</p>
            </div>
        </div>
    );
}

export default Films;
