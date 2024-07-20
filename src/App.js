
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader';


const Signup = lazy(() => import('./components/Signup'))
const Signin = lazy(() => import('./components/Signin'))
const Profile = lazy(() => import('./components/Profile/Profile'))
const EmergencyAlert = lazy(() => import('./components/EmergencyAlert'))
const AudioRecorder = lazy(() => import('./components/AudioRecorder'))
const Main = lazy(() => import('./pages/Main'))
const ProfileView = lazy(() => import("./components/Profile/ProfileView"))
const UpdateProfile = lazy(() => import('./components/Profile/UpdateProfile')) 



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
        <Route path='/profile_view/' Component={ProfileView} />
        <Route path='/update_profile/:id' Component={UpdateProfile} />
      </Routes>
      </BrowserRouter>
      </Suspense>
      
    </div>
  );
}

export default App;
