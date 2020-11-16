import Axios from 'axios';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {builder} from '../../redux/reducer';

class Auth extends  Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    register = async (e) => {
        e.preventDefault();
        const { username, password } = this.state
        try{
            const user = await Axios.post('/api/auth/register', {username, password})
            //Fill in data here after setting up redux
        }
        catch(err){
            alert(err.response.request.response)
        }
    }

    login = async (e) => {
        e.preventDefault();
        const { username, password } = this.state
        try{
            const user = await Axios.post('/apit/auth/login', {username, password})
        }
        catch(err){
            alert(err.response.request.response)
        }
    }

    handlechange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){

        const { username, password } = this.state
        return(
        <div>This is the Auth Component {this.props.location.pathname}
            <div>
                <button>Register
                    <form>
                        <input
                            name='username'
                            value={username}
                            placeholder='username'
                            onChange={ e => this.handlechange(e)}>
                        </input>
                        <input
                            name='password'
                            value={password}
                            placeholder='password'
                            onChange={ e => this.handlechange(e)}>
                        </input>
                    </form>
                </button>
                <button>Login
                    <form>
                        <input
                             name='username'
                             value={username}
                             placeholder='username'
                             onChange={ e => this.handlechange(e)}>
                        </input>
                        <input
                             name='password'
                             value={password}
                             placeholder='password'
                             onChange={ e => this.handlechange(e)}>
                        </input>
                    </form>
                </button>
            </div>
        </div>
            
        )
        
    }
}


export default connect(null, {builder})(Auth)
