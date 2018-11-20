
import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends React.Component{
    constructor(props){ 
        super(props);

        this.state = {
            email: '',
            password: '',
            isLogged: false,
            errorMessage: ''
        }

        this.OnEmailChange = this.OnEmailChange.bind(this);
        this.OnPasswordChange = this.OnPasswordChange.bind(this);
        this.OnFormSubmit = this.OnFormSubmit.bind(this);
    }

    OnEmailChange(e){
        this.setState({email: e.target.value});
    }

    OnPasswordChange(e) {
        this.setState({password: e.target.value});
    }

    OnFormSubmit(e){

        e.preventDefault();
        if(this.state.email === ''){
            return;
        }
        let data = `{"email":"${this.state.email}", "password":"${this.state.password}"}`

        axios.post('http://127.0.0.1:8800/api/login', data).then((res) => { 
            console.log(res.data);
            if(res.data.message === '' || res.data.message === undefined) {
                this.setState({isLogged: res.data.isAuth});
            } else {
                this.setState({errorMessage: res.data.message});
            }
        }).catch(err => console.log(err));

    }

    Reload(){
        window.location.reload();
    }

    render() {
        console.log(this.state.isLogged)
        if(this.state.isLogged){
            return(
                <div className='container text-center' style={{paddingTop: '100px'}}>
                    <p>You Are Successfully Log In</p>
                    <button onClick={this.Reload}>CLICK TO CONTINUE</button>
                </div>
            );}

        return (
            <div className="login-dark">
                <form onSubmit={this.OnFormSubmit}>
                    <h2 className="sr-only">Login Form</h2>
                    <div className="illustration">
                        <i className="icon ion-ios-locked-outline"></i>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.OnEmailChange}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.OnPasswordChange}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit">Log In</button>
                    </div>
                    <i className="forgot">Forgot your email or password?</i>
                    <p className="forgot">{this.state.errorMessage}</p>
                </form>
            </div>
            );
        }
}

export default Login ;