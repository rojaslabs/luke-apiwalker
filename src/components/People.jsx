import React, { useState, useEffect } from 'react';
import axios from 'axios'

const People = (props) => {

    const { responseData } = props
    const [homeworld, setHomeworld] = useState('');

    useEffect(() => {
        axios.get(responseData.homeworld)
            .then((response) => {
                setHomeworld(response.data.name)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [responseData]);

    return (
        <div>
            <div className='card text-white bg-dark mb-3'>
                <div className='card-header'><h5 className='my-1'>{responseData.name}</h5></div>
                <div className='card-body pb-1'>
                    <p><span className='text-muted'>Height:</span> {responseData.height}</p>
                    <p><span className='text-muted'>Hair Color:</span> {responseData.hairColor}</p>
                    <p><span className='text-muted'>Birth Year:</span> {responseData.birthYear}</p>
                    <p><span className='text-muted'>Gender:</span> {responseData.gender}</p>
                    <p><span className='text-muted'>Homeworld:</span> {homeworld}</p>
                </div>
            </div>
        </div>
    );
}

export default People;
