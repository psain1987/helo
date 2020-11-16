import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Nav extends  Component {
    render(){
        return(
            <div>This is the Nav Component
                <button><Link to='/dashboard' ></Link >Home</button>
                <button><Link to='/post' ></Link >New Post</button>
                <button><Link to='/' ></Link >Logout</button>
            </div>
        )
        
    }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Nav);