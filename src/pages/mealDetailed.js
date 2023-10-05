import React, { useState, useEffect } from 'react';
import { FetchMealById } from '../services/mealtService';
import '../App.css'

const MealDetailed = ({ id }) => {
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        const data = await FetchMealById(id);
        setMeal(data);
        setLoading(false);
    };
    
    fetchData();
    }, [id]);

    if (loading) {return <div>Loading...</div>; }

    return (
        <div className='meal-detail-container'>
            <h1>{meal.strMeal}</h1>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strInstructions}</p>
        </div>
    );
};

export default MealDetailed;