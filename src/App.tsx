import { Route, Routes } from 'react-router-dom';

import CreateEventPage from './components/Pages/CreateEventPage';
import EventPage from './components/Pages/EventPage';
import LandingPage from './components/Pages/LandingPage';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="create" element={<CreateEventPage />} />
			<Route path="event" element={<EventPage />} />
		</Routes>
	);
};

export default App;
