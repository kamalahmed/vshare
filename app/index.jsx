import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="bg-gray-100 h-full text-red-300 flex justify-center items-center">
      <Text className="text-3xl font-pblack">vShare</Text>
      <Link href="/profile" style={{ color: "blue" }}>
        {" "}
        Go To the Profile{" "}
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
