import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Destination from './pages/Destination/Destination';
import Crew from './pages/Crew/Crew';
import Technology from './pages/Technology/Technology';
import { useState, useEffect } from 'react';
import { imagesArr } from '../src/Imgs/BackImgs';
function App() {
	const [width, setWidth] = useState(window.innerWidth);
	// let color = '';
	const { pathname } = useLocation();
	let imgArr = imagesArr.home;
	if (pathname === '/') imgArr = imagesArr.home;
	if (pathname === '/destination') imgArr = imagesArr.destination;
	if (pathname === '/crew') imgArr = imagesArr.crew;
	if (pathname === '/technology') imgArr = imagesArr.technology;
	let img = '';
	if (width <= 600) img = imgArr[0];
	if (width === 900 && width > 600) img = imgArr[1];
	if (width > 900) img = imgArr[2];
	let style = {
		backgroundImage: ` url(${img})`,
	};

	useEffect(() => {
		window.addEventListener('resize', function () {
			if (this.window.innerWidth > 900) {
				if (width === 901) return;
				setWidth(901);
			}
			if (window.innerWidth <= 900 && window.innerWidth > 600) {
				if (width === 900) return;
				setWidth(900);
				return;
			}
			if (window.innerWidth <= 600) {
				if (width === 600) return;
				setWidth(600);
				return;
			}
		});
	}, [window]);
	return (
		<div className="main_page" style={style}>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/destination" element={<Destination />} />
				<Route path="/crew" element={<Crew />} />
				<Route path="/technology" element={<Technology />} />
				<Route path="*" element={<div className='not_found'>Not found anything .. Wrong Page</div>} />
			</Routes>
		</div>
	);
}

export default App;
