import React from 'react';
import './Car.css';
import {deleteCar} from '../../store';
import {useDispatch} from 'react-redux';



const Car = ({car: {id, model, price, year}}) => {

    const dispatch = useDispatch();

    return (
        <div className={"carWrap"}>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={()=>dispatch(deleteCar({id}))}>Delete</button>
        </div>
    );
};

export default Car;