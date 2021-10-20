import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index';
class game extends Component {
    
 
    render() {
        console.log('rendergame',this.props.tasks.button);
        return (
            <div style={{width:"300px"}}>
                <div className="col-xl-6">
                    {this.renderGame()}
                </div>
            </div>
        );
    }
    renderGame = () => {
       
        const buttons=this.props.tasks.button;
        
        const element = buttons.map((item,index) => {
            return (
                <input className="button_game" type="button" key={index} value ={item} onClick={()=>this.props.onclickBtnGame(index)} />
            )
        });
        return element;
    }
}
const mapStateToProps =(state) =>{
    
    return {
        tasks: state.tasks
    }
};
const mapDispatchToProps = (dispatch, props) => {
  
    return {

        onclickBtnGame: (index) =>{
     
            dispatch(action.onclickBtnGame(index));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(game);
