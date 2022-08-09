import { View, Text, Button } from "react-native";

export default function Signup({ navigation }) {
  return (
    <View>
      <Text>Calender Page</Text>
      <Button
        title="Go to Community"
        onPress={() => navigation.navigate("Community")}
      />
    </View>
  );
}