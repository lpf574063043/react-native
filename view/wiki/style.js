import {StyleSheet,Dimensions} from "react-native"
const {width,height}=Dimensions.get("window")
const styles = StyleSheet.create({
    img: {
      width: width,
      height: 200
    },
    d1: {
      width: width,
      height: 200,
      position: "relative",
      display: "flex",
      justifyContent: "center"
    },
    input: {
      width:width-40,
      position: "absolute",
      bottom: 20,
      height: 45,
      borderColor: "red",
      backgroundColor: "#fff",
      left: 20,
      right: 20,
      paddingLeft: 10,
      borderRadius: 5
    },
    scoview:{
      height:height-200,
      width:width,
      borderRadius:20,
    },
    viewsco:{
      display:"flex",
      flexDirection:"row",
      flexWrap:"wrap",
      justifyContent:"space-around",
      marginTop:20,
      marginBottom:50
    },
    list:{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      width:(width-40)/3
    },
    listimg:{
      height:100,
      width:100,
      borderRadius:10
    },
    listtitle:{
      height:25,
      lineHeight:25
    }
  })
  export default styles