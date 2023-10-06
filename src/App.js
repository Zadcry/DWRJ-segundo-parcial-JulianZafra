import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/navbar';
import SearchBox from './components/searchBox';
import Home from './pages/home';
import MealDetailed from './pages/mealDetailed';

function App() {
	const [searchTerm, setSearchTerm] = useState('');
	const handleSearch = (term) => {
		setSearchTerm(term);
	};
	return (
		<div className='App'>
			<Navbar>
				<SearchBox onSearch={handleSearch}/>
			</Navbar>
			<Routes>
				<Route path='/' element={<Home searchTerm={searchTerm} />} />
				<Route path='/meals/:id' element={<MealDetailsWithId />} />
			</Routes>
		</div>
	);
}

const MealDetailsWithId = () => {
	let { id } = useParams();
	return <MealDetailed id={id} />;
};
export default App;
