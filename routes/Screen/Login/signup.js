import { View, Text, Button } from "react-native";

export default function Signup({ navigation }) {
  return (
    <View>
      <Text>Signup Page</Text>
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate("Signin")}
      />
    </View>
  );
}