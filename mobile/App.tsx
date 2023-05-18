import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-yellow-300 ">
      <Text className="text-8xl font-bold text-zinc-600">Hello World</Text>
      <Text className="text-8xl font-bold">Victor</Text>
      <StatusBar style="auto" />
    </View>
  )
}
