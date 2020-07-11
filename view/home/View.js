// import Wiki from "../wiki/View"
// import Hot from "../hotlist/View"
// import React from "react"
// import TabBar from "react-native-tab-navigator"
// import { Image } from "react-native"
// export default class App extends React.Component {
//     static navigtionOptions = {
//         title: "home",
//         headerStyle: {
//             backgroundColor: '#f4511e',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//             fontWeight: 'bold',
//         },
//     }
//     constructor(props) {
//         super(props)
//         this.state = {
//             selectTab: "home"
//         }
//     }
//     render() {
//         return (
//             <TabBar>
//                 <TabBar.Item
//                     selected={this.state.selectTab === "home"}
//                     title="Home"
//                     renderIcon={() => <Image style={{ width: 30, height: 30 }} source={require('../../image/shouye.png')} />}
//                     onPress={() => {
//                         this.setState({ selectTab: "home" })
//                     }}
//                 >
//                     <Wiki />
//                 </TabBar.Item>
//                 <TabBar.Item
//                     selected={this.state.selectTab === "hot"}
//                     title="hot"
//                     renderIcon={() => <Image style={{ width: 30, height: 30 }} source={require('../../image/remen.png')} />}
//                     onPress={() => {
//                         this.setState({ selectTab: "hot" })
//                     }}
//                 >
//                     <Hot />
//                 </TabBar.Item>
//             </TabBar>
//         )
//     }
// }