export const Setname = (res) => {
    return {
        type: "SET_AGE",
        value: res
    }
}
export const Setshow = (res) => {
    return {
        type: "SET_SHOW",
        value: res
    }
}
export const Getmusic = () => {
    return (dispath) => {
        fetch("https://api.apiopen.top/musicRankings").then((res) => {
            return res.json()
        }).then((res) => {
            let action = {
                type: "GET_MUSIC",
                value: res.result
            }
            dispath(action)
        }).catch((err) => {
            console.log(err)
        });
    }
}
export const Getlistinfo = (res) => {
    return {
        type: "GET_LISTINFO",
        value: res
    }
}
export const Getlistinfosss = (res) => {
    return {
        type: "GET_VIDEO",
        value: res
    }
}
export const Getvideolist = (id) => {
    return (dispath) => {
        let formData = new FormData()//不要header用newformdata
        formData.append("id", id)
        console.log(formData)
        let option = {
            method: 'POST',
            body: formData
        }
        fetch("https://api.apiopen.top/videoCategoryDetails", option).then((res) => {
            return res.json()
        }).then((res) => {
            // let action = {
            //     type: "GET_VIDEO",
            //     value: res.result
            // }
            dispath(Getlistinfosss(res.result))
        }).then((err) => {
            console.log(err)
        })
    }
}
export const Setrefreshing = (res) => {
    return {
        type: "SET_REF",
        value: res
    }
}
export const Setgetout = (res) => {
    return {
        type: "GET_OUT",
        value: res
    }
}
export const Changegetout = (str, list) => {
    // console.log(str,list)
    return (dispath) => {
        if (str !== "上拉加载更多") { return } else {
            dispath(Setgetout("加载中..."))
            setTimeout(() => {
                let arr = [
                    {
                        title: "披萨001",
                        desc: "甜点小吃",
                        src: "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00063-1311.jpg"
                    }
                ]
               let arr2=list.concat(arr)
                dispath(Getlistinfo(arr2))
                // dispath(action)
                dispath(Setgetout("上拉加载更多"))
                return
            }, 2000);
               
        }
    }
}
// export const Getnewsinfo=(res)=>{
//     return (dispath)=>{
//         let options = {
//             method: "POST",
//             body: "id=127398",
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             }
//         }
//         // let url=""
//         fetch("https://api.apiopen.top/videoRecommend",options).then((res)=>{
//             return res.json()
//         }).then((res)=>{
//             let action={
//                 type:"GETNEWS_INFO",
//                 value:res.result
//             }
//             dispath(action)
//         }).then((err)=>{
//             console.log(err)
//         })
//     }
// }