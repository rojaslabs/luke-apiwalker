import React, { useState, useEffect } from 'react';
import axios from "axios"
import People from '../components/People';
import Films from '../components/Films';
import Starships from '../components/Starships';
import Vehicles from '../components/Vehicles';
import Species from '../components/Species';
import Planets from '../components/Planets';
import NotFound from '../components/NotFound';

const Home = () => {

    const [responseData, setResponseData] = useState()
    const [category, setCategory] = useState('')
    const [id, setId] = useState('')
    const [notFound, setNotFound] = useState('');

    const getCategories = () => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then((response) => {
            setResponseData(response.data)
            setNotFound(false)
        })
        .catch((error) => {
            setNotFound(true)
            console.log(error);
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        getCategories()
    }

    const onChangeSelect = (e) => {
        setCategory(e.target.value)
        setId('')
        setNotFound('')
    }

    const onChangeInput = (e) => {
        setId(e.target.value)
    }

    useEffect(() => {
        getCategories()
    }, []);

    const showComponent = () => {
        if (category === 'people') {
            return <People responseData={responseData} />
        }
        if (category === 'films') {
            return <Films responseData={responseData} />
        }
        if (category === 'starships') {
            return <Starships responseData={responseData} />
        }
        if (category === 'vehicles') {
            return <Vehicles responseData={responseData} />
        }
        if (category === 'species') {
            return <Species responseData={responseData} />
        }
        if (category === 'planets') {
            return <Planets responseData={responseData} />
        }
    }

    const render = () => {
        if (notFound === false) {
            return showComponent()
        }
        if (notFound === true) {
            return <NotFound />
        }
        if (notFound === '') {
            return ''
        }
    }

    return (

        <div className='container'>
            <h1 className='my-5'>Luke APIwalker</h1>
            <form onSubmit={onSubmit}>
                <select className="form-select my-3 text-white bg-dark" onChange={onChangeSelect}>
                    <option defaultValue>Select Category</option>
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </select>
                <input className='form-control my-3 text-white bg-dark' type="number" value={id} placeholder='Enter ID' onChange={onChangeInput} />
                {id !== '' && category !== '' ? <button className='btn btn-warning mt-3 mb-5 text-white bg-dark' type='submit'>Search</button> : <button className='btn mt-3 mb-5 text-white bg-dark' type='submit' disabled>Search</button>}
            </form>
            <div className='response'>
                {responseData && render()}
            </div>

        </div>
    );
}

export default Home;