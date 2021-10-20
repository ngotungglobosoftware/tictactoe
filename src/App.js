import logo from './logo.svg';
import './App.css';
import Game from './components/Game';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './actions/index';

class  App extends Component{

    render() {
        
        return (
            <div className="App">
            <Game/>
            <div className="btn_action">
            <button onClick = {this.props.onClickBtnreset} >reset game</button>
            <button  onClick = {this.props.onClickBtnpre} >pre</button>
            <button   onClick = {this.props.onClickBtnnext} >next</button>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        tasks: state
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClickBtnpre: (tasks) => {
            dispatch(action.onClickBtnpre(tasks));
        },
        onClickBtnnext: (tasks) => {
            dispatch(action.onClickBtnnext(tasks));
        },
        onClickBtnreset: (tasks) => {
            dispatch(action.onClickBtnreset(tasks));
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
