import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import HomeSvg from "../assets/SVGS/ProductsSvg";
import CartSvg from "../assets/SVGS/CartSvg";
import ProductsSvg from "../assets/SVGS/VectorSvg";
import ChatSvg from "../assets/SVGS/ChatSvg";
import UserSvg from "../assets/SVGS/UserSvg";
import { ICON_BG_COLOR, ICON_COLOR, INACTIVE_ICON_COLOR } from '../Constants';

export default function CustomTabBar({ state, descriptors, navigation }) {


  const icons = {
    Home :(color,focused) => <HomeSvg  focused={focused}  color={color}/>,
    Cart :(color,focused) => <CartSvg  focused={focused} color={color}/>,
    Products :(color,focused) => <ProductsSvg  focused={focused} color={color}/>,
    Messages :(color,focused) => <ChatSvg focused={focused}  color={color}/>,
    Profile :(color,focused) => <UserSvg focused={focused}  color={color}/>
  }



  return (
    <View style={styles.tabBar}>

      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const iconcolor = isFocused ? ICON_COLOR : "grey"

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            
          >
            <View style={[styles.iconContainer,{backgroundColor: isFocused ? ICON_BG_COLOR : "transparent"}]}>
            {
              icons[route.name](iconcolor,isFocused)
            }
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


const styles = StyleSheet.create({
  tabBar:{
    height:hp(9),
    flexDirection:"row",
    paddingHorizontal:wp(6),
    justifyContent:"space-between",
  },
  iconContainer:{
    width:wp(13),
    aspectRatio:1,
    backgroundColor:ICON_BG_COLOR,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20,
    marginTop:5
  }
})