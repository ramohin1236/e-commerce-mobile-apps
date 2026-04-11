import { COLORS } from '@/constants'
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'


export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                title: "Home", headerShown: false, tabBarActiveTintColor: COLORS.primary, tabBarInactiveTintColor: "#CDCDE0",
                tabBarStyle: {
                    backgroundColor: "#fff",
                    borderTopWidth: 1,
                    borderTopColor: "#fofofo",
                    height: 60,
                    paddingBottom: 10,

                },
                tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />
            }} />

            <Tabs.Screen name="cart" options={{
                title: "Cart", headerShown: false, tabBarActiveTintColor: COLORS.primary, tabBarInactiveTintColor: "#CDCDE0",
                tabBarStyle: {
                    backgroundColor: "#fff",
                    borderTopWidth: 1,
                    borderTopColor: "#fofofo",
                    height: 60,
                    paddingBottom: 10,

                },
                tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "cart" : "cart-outline"} size={24} color={color} />
            }} />

            <Tabs.Screen name="favorites" options={{
                title: "Favorites", headerShown: false, tabBarActiveTintColor: COLORS.primary,
                tabBarStyle: {
                    backgroundColor: "#fff",
                    borderTopWidth: 1,
                    borderTopColor: "#fofofo",
                    height: 60,
                    paddingBottom: 10,

                },
                tabBarInactiveTintColor: "#CDCDE0", tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "heart" : "heart-outline"} size={24} color={color} />
            }} />

            <Tabs.Screen name="profile" options={{
                title: "Profile", headerShown: false, tabBarActiveTintColor: COLORS.primary,
                tabBarStyle: {
                    backgroundColor: "#fff",
                    borderTopWidth: 1,
                    borderTopColor: "#fofofo",
                    height: 60,
                    paddingBottom: 10,

                },
                tabBarInactiveTintColor: "#CDCDE0", tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "person" : "person-outline"} size={24} color={color} />
            }} />
        </Tabs>
    )
}