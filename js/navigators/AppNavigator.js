
import {createStackNavigator,createBottomTabNavigator} from 'react-navigation'
import HomePage from '../pages/HomePage'
import SetupPage from '../pages/SetupPage'
import WelcomePage from '../pages/WelcomePage'
import React from 'react'
import {DeviceInfo,Image} from 'react-native'
import FavoritePage from '../pages/Favorite/FavoritePage'
import MinePage from '../pages/Mine/MinePage'
import PopularPage from '../pages/Popular/PopularPage'
import TrendingPage from '../pages/Trending/TrendingPage'
import CustomKeyPage from '../pages/Popular/CustomKeyPage'
import SortKeyPage from '../pages/Popular/SortKeyPage'
export const MineNavigator = createStackNavigator({
    MinePage : {
        screen : MinePage,
        navigationOptions : {
            title : "我的",
        }
    },
    CustomKeyPage : {
        screen : CustomKeyPage,
    },
    SortKeyPage : {
        screen : SortKeyPage,
    }

});
export const PopularNavigator = createStackNavigator({
    PopularPage : {
        screen : PopularPage,
        navigationOptions : {
            title : "最热",

            headerTintColor : '#FFFFFF',
            headerStyle: {
                backgroundColor: '#2196F3' // 设置导航栏的背景颜色,headerTintColor设置无效
            },
        }
    },

});
export const TrendingNavigator = createStackNavigator({
    TrendingPage : {
        screen : TrendingPage,
        navigationOptions : {
            title : "趋势",
        }
    },

});
export const FavoriteNavigator = createStackNavigator({
    FavoritePage : {
        screen : FavoritePage,
        navigationOptions : {
            title : "收藏",
        }
    },

});

export const AppTabNavigator = createBottomTabNavigator({
    PopularNavigator:{
        screen : PopularNavigator,
        navigationOptions: ()=> TabOptions('最热',require('../../res/images/ic_polular.png'),'最热'),

    },
    TrendingNavigator:{
        screen : TrendingNavigator,
        navigationOptions: ()=> TabOptions('趋势',require('../../res/images/ic_trending.png'),'趋势'),

    },
    FavoriteNavigator:{
        screen : FavoriteNavigator,
        navigationOptions: ()=> TabOptions('收藏',require('../../res/images/ic_favorite.png'),'收藏'),

    },
    MineNavigator:{
        screen : MineNavigator,
        navigationOptions: ()=> TabOptions('我的',require('../../res/images/ic_my.png'),'我的'),

    },


},{
    tabBarPosition:'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
    swipeEnabled:false, // 是否允许在标签之间进行滑动。
    animationEnabled: false, // 是否在更改标签时显示动画。
    lazy:true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
    initialRouteName:'', // 设置默认的页面组件
    backBehavior:'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions:{
        // iOS属性
        // 因为第二个tabbar是在页面中创建的，所以前景色的设置对其无效，当然也可以通过设置tintColor使其生效
        activeTintColor:'#1E90FF', // label和icon的前景色 活跃状态下（选中）。
        inactiveTintColor:'gray', // label和icon的前景色 不活跃状态下(未选中)。

        activeBackgroundColor:'#eeeeee', //label和icon的背景色 活跃状态下（选中） 。
        inactiveBackgroundColor:'#eeeeee', // label和icon的背景色 不活跃状态下（未选中）。

        showLabel:true, // 是否显示label，默认开启。
        style:{height:DeviceInfo.isIPhoneX_deprecated ? 88 : 44,paddingBottom:DeviceInfo.isIPhoneX_deprecated ? 44 : 0,backgroundColor:'#eeeeee'}, // tabbar的样式。
        // labelStyle:{}, //label的样式。
        safeAreaInset : { bottom: 'never', top: 'never' },
        // 安卓属性

        // activeTintColor:'', // label和icon的前景色 活跃状态下（选中） 。
        // inactiveTintColor:'', // label和icon的前景色 不活跃状态下(未选中)。
        showIcon:true, // 是否显示图标，默认关闭。
        // showLabel:true, //是否显示label，默认开启。
        // style:{}, // tabbar的样式。
        // labelStyle:{}, // label的样式。
        upperCaseLabel:false, // 是否使标签大写，默认为true。
        // pressColor:'', // material涟漪效果的颜色（安卓版本需要大于5.0）。
        // pressOpacity:'', // 按压标签的透明度变化（安卓版本需要小于5.0）。
        // scrollEnabled:false, // 是否启用可滚动选项卡。
        // tabStyle:{}, // tab的样式。
        // indicatorStyle:{}, // 标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题。
        // labelStyle:{}, // label的样式。
        // iconStyle:{}, // 图标的样式。
    }

});
const TabOptions = (tabBarTitle,normalImage,navTitle) => {
    // console.log(navigation);
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({tintColor,focused})=> {
        // var imageStr = !focused ? normalImage : selectedImage;

        return(
            <Image
                // source={{uri: imageStr}}
                source={normalImage}
                style={[{height:20,width:20 }, {tintColor: tintColor}]}
            />
        )
    });
    const headerTitle = navTitle;
    const headerTitleStyle = {fontSize:16,color:'white',alignSelf:'center'};
    // header的style
    const headerStyle = {backgroundColor:'#4ECBFC'};
    const tabBarVisible = true;
    // const header = null;
    return {tabBarLabel,tabBarIcon,headerTitle,headerTitleStyle,headerStyle,tabBarVisible};
};

// export const AppNavigator = createStackNavigator({
//     tabNav : {
//         screen : AppTabNavigator,
//         navigationOptions : {
//
//         }
//     },
//     WelcomePage : {
//         screen : WelcomePage,
//         //2单个页面配置导航栏
//         navigationOptions : ({navigation}) => ({
//             title : '欢迎页'
//         })
//     },
//
//     SetupPage : {
//         screen : SetupPage,
//         navigationOptions : {
//             title : 'SetupPage'
//         }
//     },
//
//
//     // Page3 : {
//     //     screen : Page3,
//     //     //动态配置导航栏
//     //     navigationOptions : (props) => {
//     //         const {navigation} = props;
//     //         const {state,setParams} = navigation;
//     //         const {params} = state;
//     //         return {
//     //              title : params.name ? params.name : '',
//     //              headerRight : (
//     //                 <Button title='编辑'
//     //                         onPress={()=>{}}
//     //                 />
//     //             ),
//     //
//     //         }
//     //     }
//     // }
// },{
//     //1全局配置导航栏
//     // navigationOptions : {
//     //     header : null
//     // }
// });

