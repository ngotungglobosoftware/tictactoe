import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as action from './../actions/index';
class ButtonGame extends Component {
    render() {
       
        return (
            1111111111
        );
    }
}
const mapStateToProps =(state) =>{
    return {
        tasks: state.tasks
    }
};
const mapDispatchToProps = (dispatch, props) => {

    return {

        onAddTask: (tasks) => {
            dispatch(action.addTask(tasks));
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(ButtonGame);
