const defaultState={
    list:[{name:"nima",age:"dasdas"}],
    name:"张三",
    listinfo:[]
}
export default (state=defaultState,action)=>{
    if(action.type==="SET_LIST"){
        // let obj=JSON.parse(JSON.stringify(state))
        // obj.list=action.value
        // obj.name="勿忘勿"
        // return obj
        return {
            ...state,
            list:action.value.list,
            name:action.value.name
        }
    }else if(action.type==="GET_INFO"){
        return{
            ...state,
            listinfo:action.value
        }
    }
    return state;
}