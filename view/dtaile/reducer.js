const defvalue = {
    age: 25,
    show: false,
    musiclist: [],
    listinfo: [],
    newsinfo: [],
    refreshingS: false,
    getout: "上拉加载更多"
}
export default (state = defvalue, action) => {
    if (action.type === "SET_AGE") {
        return {
            ...state,
            age: action.value
        }
    } else if (action.type === "SET_SHOW") {
        return {
            ...state,
            show: action.value
        }
    } else if (action.type === "GET_MUSIC") {
        return {
            ...state,
            musiclist: action.value
        }
    } else if (action.type === "GET_LISTINFO") {
        return {
            ...state,
            listinfo: action.value
        }
    } else if (action.type === "GET_VIDEO") {
        return {
            ...state,
            newsinfo: action.value
        }
    } else if (action.type === "SET_REF") {
        return {
            ...state,
            refreshingS: !action.value
        }
    } else if (action.type === "GET_OUT") {
        return {
            ...state,
            getout: action.value
        }
    } else if (action.type === "ADD_TOPLISTINFO") {
        return {
            ...state,
            listinfo: action.value
        }
    }
    return state;
}