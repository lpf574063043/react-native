import React from "react"
import { View, Text, FlatList, Image, } from "react-native"
import { connect } from "react-redux"
import scss from "./style"
import { 
    Setname, 
    Setshow, 
    Getmusic, 
    Getlistinfo ,
    Getvideolist,
    Setrefreshing,
    Changegetout
} from "./actionscreateator"
// const { width, height } = Dimensions.get("window")
class Dtail extends React.Component {
    constructor(props) {
        super(props)
        props.navigation.setOptions({
            // headerLeft:()=>(
            //   <Text>详情</Text>
            // ),
            title: "详情页",
            headerStyle: {
                height: 45
            },
            headerTitleStyle: {
                color: "red",
                textAlign: "center"
            },
            headerRight: () => (
                <Text>sss</Text>
            )
        })
    }
    componentDidMount() {
        this.props.getmusic()
        this.props.getlistinfo()
        this.props.getvideolist(14)
    }
    _onEndReached=()=>{
        this.props.changegetou(this.props.getouts,this.props.listinfo)
    }
    render() {
        this.getname()
        console.log(this.props.refreshingS)
        return (
            <FlatList
                renderItem={this._renderItem}
                keyExtractor={(item, index) => JSON.stringify(index)}
                data={this.props.listinfo}

                onEndReached={this._onEndReached}
                onEndReachedThreshold={0.1}

                ListFooterComponent={this._ListFooterComponent}

                onRefresh={this._onRefresh}
                refreshing={this.props.refreshingS}
            ></FlatList>
        )
    }
    _ListFooterComponent = () => {
        return (
            <Text>{this.props.getouts}</Text>
        )
    }
    _onRefresh = () => {
        this.props.chengref(this.props.listinfo,this.props.refreshingS)
    }
    getname = () => {
        this.props.setname(19)
    }
    _renderItem = (item) => {
        return (
            <View style={scss.body}>
                <Image style={scss.imga} source={{ uri: item.item.src }}></Image>
                <View style={scss.bodyt}>
                    <Text>{item.item.title}</Text>
                    <Text>{item.item.desc}</Text>
                </View>
            </View>
        )
    }
}
const mapStateToprops = (store) => {
    console.log(store)
    return {
        age: store.Dtaile.age,
        show: store.Dtaile.show,
        musiclist: store.Dtaile.musiclist,
        listinfo: store.Dtaile.listinfo,
        newsinfo: store.Dtaile.newsinfo,
        refreshingS:store.Dtaile.refreshingS,
        getouts:store.Dtaile.getout
    }
}
const mapDispath = (dispath, props) => {
    console.log(props)
    return {
        setname(res) {
            dispath(Setname(res))
        },
        setshow(res) {
            dispath(Setshow(res))
        },
        getmusic() {
            dispath(Getmusic())
        },
        getlistinfo(res) {
            let list = [
                {
                    title: "披萨001",
                    desc: "黑椒牛肉披萨",
                    src: "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00740-3851.jpg"
                },
                {
                    title: "披萨001",
                    desc: "甜点小吃",
                    src: "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00063-1311.jpg"
                },
                {
                    title: "披萨001",
                    desc: "火腿披萨",
                    src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1957492776,2587376013&fm=26&gp=0.jpg"
                },
                {
                    title: "披萨001",
                    desc: "汉堡套餐",
                    src: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1785802272,2211088670&fm=26&gp=0.jpg"
                },
                {
                    title: "披萨001",
                    desc: "必胜客芝心披萨",
                    src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1625358173,2741021986&fm=26&gp=0.jpg"
                },
                {
                    title: "披萨001",
                    desc: "必胜客披萨",
                    src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=285288845,1339205094&fm=26&gp=0.jpg"
                }
            ]
            dispath(Getlistinfo(list))
        },
        getvideolist(id) {
            dispath(Getvideolist(id))
        },
        setrefreshing(res){
            dispath(Setrefreshing(res))
        },
        chengref(list,ref){
            dispath(Setrefreshing(ref))
            let lists = [
                {
                    title: "披萨001",
                    desc: "黑椒牛肉披萨",
                    src: "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00740-3851.jpg"
                },
                {
                    title: "披萨001",
                    desc: "甜点小吃",
                    src: "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00063-1311.jpg"
                },
                {
                    title: "披萨001",
                    desc: "火腿披萨",
                    src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1957492776,2587376013&fm=26&gp=0.jpg"
                },
                {
                    title: "披萨001",
                    desc: "汉堡套餐",
                    src: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1785802272,2211088670&fm=26&gp=0.jpg"
                },
                {
                    title: "披萨001",
                    desc: "必胜客芝心披萨",
                    src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1625358173,2741021986&fm=26&gp=0.jpg"
                },
                {
                    title: "披萨001",
                    desc: "必胜客披萨",
                    src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=285288845,1339205094&fm=26&gp=0.jpg"
                }
            ]
            setTimeout(() => {
                let arr=[...lists,...list]
                dispath(Getlistinfo(arr))
                dispath(Setrefreshing(!ref))
            }, 2000);
        },
        changegetou(str,list){
            console.log(str,list)
            dispath(Changegetout(str,list))
        }
    }
}
export default connect(mapStateToprops, mapDispath)(Dtail)
