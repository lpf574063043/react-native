import React from "react"
import {
  View,
  Image,
  TextInput,
  StatusBar,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";
import styles from "./style"
import { connect } from "react-redux"
import {Getlistinfo} from "./actionscreatetor"
const timer = "nima"
class Wiki extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
    props.navigation.setOptions({
      title:"",
      headerTitleStyle: {
        height:0
      },
      headerStyle: {
        height:0
      },
    })
  }
  // getlist = () => {
  //   let arr = [
  //     {
  //       url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2763523135,381182796&fm=26&gp=0.jpg",
  //       title: "披萨"
  //     },
  //     {
  //       url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1143989982,1717990474&fm=26&gp=0.jpg",
  //       title: "烧烤"
  //     },
  //     {
  //       url: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2150777454,3130959978&fm=26&gp=0.jpg",
  //       title: "龙虾"
  //     },
  //     {
  //       url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3227879884,1891776658&fm=26&gp=0.jpg",
  //       title: "牛排"
  //     },
  //     {
  //       url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2291605549,2231893190&fm=26&gp=0.jpg",
  //       title: "寿司"
  //     },
  //     {
  //       url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2763523135,381182796&fm=26&gp=0.jpg",
  //       title: "披萨"
  //     },
  //     {
  //       url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1143989982,1717990474&fm=26&gp=0.jpg",
  //       title: "烧烤"
  //     },
  //     {
  //       url: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2150777454,3130959978&fm=26&gp=0.jpg",
  //       title: "龙虾"
  //     },
  //     {
  //       url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3227879884,1891776658&fm=26&gp=0.jpg",
  //       title: "牛排"
  //     },
  //     {
  //       url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2291605549,2231893190&fm=26&gp=0.jpg",
  //       title: "寿司"
  //     },
  //     {
  //       url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2763523135,381182796&fm=26&gp=0.jpg",
  //       title: "披萨"
  //     },
  //     {
  //       url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1143989982,1717990474&fm=26&gp=0.jpg",
  //       title: "烧烤"
  //     },
  //     {
  //       url: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2150777454,3130959978&fm=26&gp=0.jpg",
  //       title: "龙虾"
  //     },
  //     {
  //       url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3227879884,1891776658&fm=26&gp=0.jpg",
  //       title: "牛排"
  //     },
  //     {
  //       url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2291605549,2231893190&fm=26&gp=0.jpg",
  //       title: "寿司"
  //     },
  //   ]
  //   this.setState({
  //     list: arr
  //   })
  // }
  componentDidMount() {
    fetch("https://api.apiopen.top/getJoke?page=1&count=2&type=video").then((res)=>{
      return res.json()
    }).then((res)=>{
      this.props.setList(res.result)
    }).catch((err)=>{
      alert(err)
    })
    let arr = [
      {
        url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2763523135,381182796&fm=26&gp=0.jpg",
        title: "披萨"
      },
      {
        url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1143989982,1717990474&fm=26&gp=0.jpg",
        title: "烧烤"
      },
      {
        url: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2150777454,3130959978&fm=26&gp=0.jpg",
        title: "龙虾"
      },
      {
        url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3227879884,1891776658&fm=26&gp=0.jpg",
        title: "牛排"
      },
      {
        url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2291605549,2231893190&fm=26&gp=0.jpg",
        title: "寿司"
      },
      {
        url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2763523135,381182796&fm=26&gp=0.jpg",
        title: "披萨"
      },
      {
        url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1143989982,1717990474&fm=26&gp=0.jpg",
        title: "烧烤"
      },
      {
        url: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2150777454,3130959978&fm=26&gp=0.jpg",
        title: "龙虾"
      },
      {
        url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3227879884,1891776658&fm=26&gp=0.jpg",
        title: "牛排"
      },
      {
        url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2291605549,2231893190&fm=26&gp=0.jpg",
        title: "寿司"
      },
      {
        url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2763523135,381182796&fm=26&gp=0.jpg",
        title: "披萨"
      },
      {
        url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1143989982,1717990474&fm=26&gp=0.jpg",
        title: "烧烤"
      },
      {
        url: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2150777454,3130959978&fm=26&gp=0.jpg",
        title: "龙虾"
      },
      {
        url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3227879884,1891776658&fm=26&gp=0.jpg",
        title: "牛排"
      },
      {
        url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2291605549,2231893190&fm=26&gp=0.jpg",
        title: "寿司"
      },
    ]
    this.props.getlistinfo(arr)
    // this.getlist()
  }
  gotodetaile(e){
    this.props.navigation.navigate("Dtail",{title:e})
  }
  render() {
    console.log(this.props)
    return (
      <View>
        <StatusBar barStyle="dark-content" backgroundColor="#fff"></StatusBar>
        <View style={styles.d1}>
          <Image source={require("../../image/timg.jpg")} style={styles.img}></Image>
          <TextInput style={styles.input} placeholder="请开始你的装备" />
        </View>
        <ScrollView style={styles.scoview}>
          <View style={styles.viewsco}>
          {
            this.props.listinfo.map((item,index)=>{
              return(
                <TouchableOpacity onPress={this.gotodetaile.bind(this,item.title)} key={index}>
                  <View style={styles.list} >
                  <Image style={styles.listimg} source={{uri:item.url}}></Image>
                  <Text style={styles.listtitle}>{item.title}</Text>
                </View>
                </TouchableOpacity>
              )
            })
          }
          </View>
        </ScrollView>
      </View>
    )
  }
}
const mapStateToProps=(stores)=>{
  // console.log(stores)
  //stores是整个Reducer对象
  //connect映射关系组件中props就会有stores
  return{
    name:stores.Wiki.name,
    list:stores.Wiki.list,
    listinfo:stores.Wiki.listinfo
  }
}
const mapDispath=(dispath)=>{
   //connect映射关系组件中props就会可以调用setList
  return{
     setList(res){
      const action={
        type:"SET_LIST",
        value:{
          list:res,
          name:"张飒"
        }
      }
      dispath(action)
    },
    getlistinfo(res){
      dispath(Getlistinfo(res))
    }
  }
}
export default connect(mapStateToProps,mapDispath)(Wiki)
