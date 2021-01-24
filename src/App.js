import logo from './logo.svg';
import './App.css';
import ClassSeatPicker from './components/ClassSeatPicker';
import Login from './components/Login';
import Covid from './components/Covid';
import SignUp from './components/SignUp';
import Main from './components/Main';
import CreateClass from './components/CreateClass';
import DashboardProf from './components/DashboardProf';
import DashboardStudent from './components/DashboardStudent';
import { Router, Route, browserHistory } from 'react-router';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: {}
    }
  }

  updateUserInfo = (userInfo) => {
    this.setState({
      userInfo: userInfo
    });
    console.log("Updated:")
    console.log(this.state.userInfo);
  }

  render() {
    const userInfo = this.state.userInfo;
    return (
      <div className="App">
        <Router history={browserHistory}>
          <Route path='/' component={() => <Main />} />
          <Route path='/main-page' component={() => <Main userInfo={userInfo} />} />
            
          <Route path='/sign-up' component={() => <SignUp userInfo={userInfo} />} />
          
          <Route path='/login' component={() => <Login updateUserInfo={this.updateUserInfo} />} />
          
          <Route path='/create-class' component={() => <CreateClass userInfo={userInfo} />}  />

          <Route path='/pick-seat' component={() => <ClassSeatPicker userInfo={userInfo} />} />

          <Route path='/dashboard-student' component={() => <DashboardStudent userInfo={this.state.userInfo} />} />

          <Route path='/dashboard-professor' component={() => <DashboardProf userInfo={this.state.userInfo} />} />
          
          <Route path='/covid' component={() => <Covid userInfo={userInfo} />} />
          
        </Router>
      </div>
    );
  }
}

export default App;
