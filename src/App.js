
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader';


const Signup = lazy(() => import('./components/Signup'))
const Signin = lazy(() => import('./components/Signin'))
const Profile = lazy(() => import('./components/Profile'))
const EmergencyAlert = lazy(() => import('./components/EmergencyAlert'))
const AudioRecorder = lazy(() => import('./components/AudioRecorder'))
const Main = lazy(() => import('./pages/Main'))



function App() {
  return (
    <div className="App   font-inter">
      <Suspense fallback={<Loader />}>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Signin} />
        <Route path='/register' Component={Signup} />
        <Route path='/profile_setup' Component={Profile} />
        <Route path='/emergency_alert' Component={EmergencyAlert} />
        <Route path='/audio' Component={AudioRecorder} />
        <Route path='/main/*' Component={Main} />
      </Routes>
      </BrowserRouter>
      </Suspense>
      
    </div>
  );
}

export default App;
