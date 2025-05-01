import { ThemeSwitcher } from "@/components/theme-switcher";
import { FontAwesome } from "@expo/vector-icons";
import Drawer from "expo-router/drawer";
import { ScrollView } from "react-native";
import { useStyles } from "react-native-unistyles";

export default function DrawerLayout() {
  const { theme } = useStyles();

  return (
    <Drawer
      screenOptions={({ navigation }) => ({
        sceneStyle: {
          backgroundColor: theme.colors.background,
        },
        headerStyle: {
          backgroundColor: theme.colors.background,
          shadowColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.onBackground,
        headerRight: () => (
          <>
            <ThemeSwitcher />
          </>
        ),
        headerRightContainerStyle: {
          paddingRight: 10,
        },
        drawerType: "back",
        drawerStyle: {
          backgroundColor: theme.colors.background,
          width: 250,
        },
        drawerActiveBackgroundColor: theme.colors.primaryContainer,
        drawerInactiveTintColor: theme.colors.onBackground,
        drawerActiveTintColor: theme.colors.onPrimaryContainer,
        freezeOnBlur: true, // Change theme fast while on a simple screen
      })}
      screenLayout={({ children }) => (
        <ScrollView
          bounces={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 10,
            paddingTop: 10,
          }}
        >
          {children}
        </ScrollView>
      )}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Home",
          drawerLabel: "Home",
          drawerIcon: ({ color }) => (
            <FontAwesome
              name="home"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="buttons-page"
        options={{
          title: "Buttons",
          drawerLabel: "Buttons",
          drawerIcon: ({ color }) => (
            <FontAwesome
              name="hand-pointer-o"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="dropdown-menu-page"
        options={{
          title: "Dropdown Menu",
          drawerLabel: "Dropdown Menu",
          drawerIcon: ({ color }) => (
            <FontAwesome
              name="caret-square-o-down"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Drawer>
  );
}
