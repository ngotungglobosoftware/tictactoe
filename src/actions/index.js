import * as types from './../constants/ActionTypes';
export const listAll = () =>{
    return {
        type: types.SHOW_DATA,
    }
};

// export const addTask = (task) =>{
//     return {
//         type: types.ADD_TASK,
//         task
//     }
// };

export const onClickBtnpre = (tasks) =>{
    return {
        type: types.PRE_GAME,
        tasks
    }
};
export const onClickBtnnext = (tasks) =>{
    return {
        type: types.NEXT_GAME,
        tasks
    }
};

export const onClickBtnreset = (tasks) =>{
    return {
        type: types.RESET_GAME,
        tasks
    }
};

export const onclickBtnGame = (index) =>{
    return {
        type: types.BTN_GAME,
        index:index
    }
};