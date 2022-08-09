import { View, Text, Button } from "react-native";

export default function Signup({ navigation }) {
  return (
    <View>
      <Text>Community Page</Text>
      <Button
        title="Go to Mypage"
        onPress={() => navigation.navigate("Mypage")}
      />
    </View>
  );
}