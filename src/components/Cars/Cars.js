import {React, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Car from '../Car/Car';
import {getAllCars} from '../../store';
import './Cars.css';

const Cars = ({}) => {

    const {cars, status, error} = useSelector(state => state['carReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    return (
        <div className={"carsWrap"}>
            {cars.map(car => <Car key={car.id} car={car}/>)}

        </div>
    );
};

export {Cars};