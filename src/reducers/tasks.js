import * as types from './../constants/ActionTypes';
var initialState = {
   
        button:['','','','','','','','',''],
        turn:false,
        onclick_button:true,
        index_history:0,
        history_all:[{button:['','','','','','','','','']},],
    
};
 var myReducer = (state=initialState,action)=>{
    // console.log('state',state);

    switch (action.type) {
        case types.RESET_GAME:
            state = {
                button:['','','','','','','','',''],
                turn:false,
                onclick_button:true,
                index_history:0,
                history_all:[{button:['','','','','','','','','']},],
            };
            console.log('reset',state);
            return state;
        case types.BTN_GAME:
             state=clickButtonGame(action.index, {...state});
           
             console.log(clickButtonGame(action.index, {...state}));
            return  state;
        case types.PRE_GAME:
            state = pre( {...state});
            console.log('PRE_GAME',state);
            return state;
        case types.NEXT_GAME:
            state = next( {...state});
            console.log('NEXT_GAME',state);
            return state;
        default:
            console.log('default',state);
            // console.log('show data1');
            return state;
    }
 };
 
function clickButtonGame (index, old_state) {
    
    const state=old_state;
    if(state.onclick_button===false) return state;

    let value = '';
    if(state.turn===true) value = 'X';
    else value = 'O';
    const new_button=state.button;
    if(new_button[index]===''){
        if(state.index_history <= state.history_all.length-1){
            let reset_history = state.history_all;
            reset_history.splice(state.index_history+1);
            state.history_all=reset_history;
        }

        new_button[index]=value;
    
        const new_index_history=state.index_history+1;
        const history_all=state.history_all;
        state.button=new_button;
        state.turn=!state.turn;
        state.index_history=new_index_history;
        const new_btn=state.button;
        const history_all_new=history_all.concat([{button:[...new_btn]}]);
        state.history_all=history_all_new;
        if(calculateWinner(state.button)){
            state.onclick_button=false;
            alert(value +' win');
        }
    }
    return state;
    
    
}
function calculateWinner(button){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (button[a] && button[a] === button[b] && button[a] === button[c]) {
        return button[a];
      }
    }
    return null;
  }


  function pre (old_state) {
      const state= old_state;

      console.log('pre-----------------------');

      let number_index_current= state.index_history;
    //   console.log(number_index_current,this.state.history_all);
      if(number_index_current>0 &&number_index_current<=10){
    
        let number= number_index_current-1;
        let arr_history=state.history_all;
    
        if(arr_history.length>=number){
    
          const current_button = [...arr_history[number]['button']];
          // console.log(current_button['button']);
          state.button=current_button;
          state.index_history=number;
         
        }
        
      }
      return state;
  }
  
  function next(old_state) {
    const state= old_state;
    let number_index_current= state.index_history;
   
  
    if(number_index_current>=0&&number_index_current<10){
      let number= number_index_current+1;
   
      let arr_history=state.history_all;
      if(arr_history.length>number){
        const current_button = [...arr_history[number]['button']];

        state.button=current_button;
        state.index_history=number;
      }
    }
    return state;
  }
 export default myReducer;