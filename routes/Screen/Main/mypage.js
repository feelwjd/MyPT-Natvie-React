import { View, Text, Button } from "react-native";

export default function Signup({ navigation }) {
  return (
    <View>
      <Text>Mypage Page</Text>
      <Button
        title="Go to Recommand"
        onPress={() => navigation.navigate("Recommand")}
      />
    </View>
  );
}