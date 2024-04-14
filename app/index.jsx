import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="bg-secondary h-full text-red-300 flex justify-center items-center">
      <Text>vShare</Text>
      <Link href="/profile" style={{ color: "blue" }}>
        {" "}
        Go To the Profile{" "}
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
