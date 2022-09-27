import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/Pages/LandingPage';
import EventPage from './components/Pages/EventPage';
import CreateEventPage from './components/Pages/CreateEventPage';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="create" element={<CreateEventPage />} />
				<Route path="event" element={<EventPage />} />
			</Routes>
		</>
	);
}

export default App;
