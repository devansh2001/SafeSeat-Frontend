import logo from './logo.svg';
import './App.css';
import ClassSeatPicker from './components/ClassSeatPicker';
import Login from './components/Login';
import Covid from './components/Covid';
import SignUp from './components/SignUp';
import Main from './components/Main';
import CreateClass from './components/CreateClass';
import DashboardProf from './components/DashboardProf';
import { Router, Route, browserHistory } from 'react-router';

function App() {
  return (
    <div className="App">
      <Router history={browserHistory}>
        <Route path='/' component={() => <Main />} />
        <Route path='/main-page' component={() => <Main />} />
          
        <Route path='/sign-up' component={() => <SignUp />} />
        
        <Route path='/login' component={() => <Login />} />
        
        <Route path='/create-class' component={() => <CreateClass />} />

        <Route path='/pick-seat' component={() => <ClassSeatPicker />} />

        <Route path='/dashboard' component={() => <DashboardProf />} />
        
        <Route path='/covid' component={() => <Covid />} />
        
      </Router>
    </div>
  );
}

export default App;
