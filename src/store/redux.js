
export const ADD='add';
export const Lose='lose'

export const reducer=(state={
  num:0
},action)=>{
  console.log(action)
  switch(action.type){
    case ADD:

    return {
      ...state,
      num:state.num+action.payload
    }
    case Lose:
    return{
      ...state,
      num:state.num-action.payload
    }
    default:
    return state

  }

}

export const addItem=num=>{
  return {
    type:'add',
    payload:num
  }
}
export const loseItem=num=>{
  return {
    type:'lose',
    payload:num
  }
}
