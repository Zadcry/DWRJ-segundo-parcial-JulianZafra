import React, { useState, useEffect } from 'react';
import { FetchMealByFirstLetter } from '../../services/mealtService';
import MealPreviw from '../mealPreview/';
import { useNavigate } from 'react-router-dom';
import './index.css';


const MealPreviwGrid = ({ searchTerm }) => {
	const [meals, setMeals] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
		const alphabet = 'abcdefghijklmnopqrstuvwxyz';
		const mealData = [];

		for (let letter of alphabet) {
			const data = await FetchMealByFirstLetter(letter);
			if (data) {
				mealData.push(...data);
			}
		}
		setMeals(mealData);
		setLoading(false);
		};
		fetchData();
	}, []);

	const handleClick = (id) => {
		navigate(`/meals/${id}`);
	};
	
	if (loading) {return <div>Loading...</div>; }

	let filteredMeals = meals;

	if (searchTerm) {
	filteredMeals = meals.filter((meal) =>
		meal.strMeal.toLowerCase().startsWith(searchTerm.toLowerCase())
	);
	}

	return (
		<div className='meal-grid'>
			{filteredMeals.map((meal) => (
				<div onClick={() => handleClick(meal.idMeal)}>
					<MealPreviw meal={meal} />
				</div>
			))}
		</div>
	);
};

export default MealPreviwGrid;
