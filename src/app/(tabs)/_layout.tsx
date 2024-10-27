// import Feather from '@expo/vector-icons/Feather';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// import { Tabs } from 'expo-router';
// import React from 'react';

// export default function componentName() {
//   return (
//     <Tabs>
//       <Tabs.Screen name='profile' options={{
//         title: "Pofile", headerShown: false, tabBarIcon: ({ focused }) =>
//           focused ? (
//             <Feather name="eye" size={24} color="black" />
//           ) : (
//             <Feather name="eye" size={24} color="gray" />
//           )
//       }}
//       />
//       <Tabs.Screen name='chat' options={{
//         title: "Chats", headerShown: false, tabBarIcon: ({ focused }) =>
//           focused ? (
//             <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
//           ) : (
//             <Ionicons name="chatbubble-ellipses-outline" size={24} color="gray" />
//           )
//       }}
//       />
//       <Tabs.Screen name='bio' options={{
//         title: "Account", headerShown: false, tabBarIcon: ({ focused }) =>
//           focused ? (
//             <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />
//           ) : (
//             <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="gray" />
//           )
//       }}
//       />
//     </Tabs>
//   );
// }





import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import React from 'react';

export default function componentName() {



  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          bottom: 2,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: 'rgba(116, 9, 56, 0.7)', // Slightly transparent for glassy look
          borderRadius: 100,
          height: 70,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: 10 },
          shadowRadius: 10,
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.5)',
        },
        tabBarBackground: () => (
          <BlurView
            tint="dark"
            intensity={80}
            style={{backgroundColor:"red"}} // Applying full blur effect
          />
        ),
        tabBarShowLabel: false, // Hide labels to keep icons only
      }}
    >

      <Tabs.Screen name='bio' options={{
        title: "Account", headerShown: false, tabBarIcon: ({ focused }) =>
          focused ? (
            <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="black" />
          ) : (
            <MaterialCommunityIcons name="guy-fawkes-mask" size={24} color="white" />
          )
      }}
      />

      <Tabs.Screen name='chat' options={{
        title: "Chats", headerShown: false, tabBarIcon: ({ focused }) =>
          focused ? (
            <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
          ) : (
            <Ionicons name="chatbubble-ellipses-outline" size={24} color="white" />
          )
      }}
      />


      <Tabs.Screen name='profile' options={{
        title: "Profile", headerShown: false, tabBarIcon: ({ focused }) =>
          focused ? (
            <Feather name="eye" size={24} color="black" />
          ) : (
            <Feather name="eye" size={24} color="white" />
          )
      }}
      />


    </Tabs>
  );
}
