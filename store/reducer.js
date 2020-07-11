import { combineReducers } from "redux"
import { reducer as Wiki } from "../view/wiki/index"
import { reducers as Dtaile } from "../view/dtaile/index"
const reducers=combineReducers({
    Wiki,Dtaile
})
// export default (state=defauleState,action)=>{
//     return state
// }
export default reducers;