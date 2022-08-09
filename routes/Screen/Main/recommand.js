import { View, Text, Button } from "react-native";

export default function Signup({ navigation }) {
  return (
    <View>
      <Text>Recommand Page</Text>
      <Button
        title="Go to Calender"
        onPress={() => navigation.navigate("Calender")}
      />
    </View>
  );
}