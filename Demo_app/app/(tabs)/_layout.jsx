import { Tabs } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { HomeSvg } from "../../assets/SVGS/HomeSvg";
import { BellSvg } from "../../assets/SVGS/BellSvg";
import { BookMarkSvg } from "../../assets/SVGS/BookMarkSvg";
import { UserSvg } from "../../assets/SVGS/UserSvg";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabel: "",
        tabBarStyle: { height: hp(11) },
        tabBarItemStyle:{height:hp(13)},
        tabBarActiveTintColor:"black"
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => {
            return <HomeSvg color={color}/>
          },
        }}
      />
       <Tabs.Screen
        name="BookMark"
        options={{
          tabBarIcon: ({ color }) => <BookMarkSvg color={color}/>,
        }}
      />
      <Tabs.Screen
        name="Bell"
        options={{
          tabBarIcon: ({ color }) => <BellSvg color={color}/>,
        }}
      />
        <Tabs.Screen
          name="Profile"
          options={{
            tabBarIcon: ({ color }) => <UserSvg color={color}/>,
          }}
        />
     
    </Tabs>
  );
}

