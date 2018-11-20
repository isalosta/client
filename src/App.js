import React, {Component} from 'react';
import axios from 'axios';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './component/react_body_home';
import Header from './component/react_header';
import Race from './component/react_body_race';
import Footer from './component/react_footer';
import Login from './component/react_body_login';

import './App.css';

class App extends Component {
  state = {
    username: ''
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8800/api/userdata')
            .then(user => {
              this.setState({ username: user.data.username });
              console.log(this.state);
            }).catch(err => {console.log('ERRORRR! '+err);});
  }

  render() {
    console.log(this.state.username)
    return (
        <React.Fragment>
          <Header user_data={this.state.username}/>}
          <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/race" component={Race}/>
              <Route path="/login" component={Login}/>
              <Redirect to="/"/>
          </Switch>
              <Footer />
        </React.Fragment>
    );
  }
}

export default App;
