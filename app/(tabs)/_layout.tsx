
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs 
        screenOptions={{
            tabBarActiveTintColor: '#3dff87ff',
            headerStyle: 
            { backgroundColor: '#25292e',

             },
            headerShadowVisible: false,
            headerTintColor: '#fff',
            tabBarStyle: { 
            backgroundColor: '#25292e', 
            },
        }}
        >
              <Tabs.Screen 
            name="index" 
            options={{ 
                title: 'Início', 
                tabBarIcon: ({ color, focused, }) => (
                    <MaterialCommunityIcons name={focused ? 'home-circle' : 'home-circle-outline'} size={24} color={color} />
                ),
            }}
          />
            <Tabs.Screen 
            name="about" 
            options={{
                title: 'Sobre',
                tabBarIcon: ({ color, focused, }) => (
                    <AntDesign name={focused ? 'info-circle' : 'info'} size={24} color={color} />
                ),
            }}
          />
        </Tabs>
        );
}       

   
        