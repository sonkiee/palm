import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text> Hello World!</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
