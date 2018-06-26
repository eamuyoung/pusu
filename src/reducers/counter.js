function counter(state ={ counter:0},action){
    switch(action.type){
        case "INCRESE":
        return {counter:state.counter+1};
        default:
        return state;
    }
}
export default counter;