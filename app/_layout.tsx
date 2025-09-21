import InitialLayout from "@/components/InitialLayout";
import ClerkAndConvexProviders from "@/providers/ClerkAndConvexProviders";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function RootLayout() {
  return (
  <ClerkAndConvexProviders>
    <SafeAreaProvider>
      <SafeAreaView style={{flex : 1, backgroundColor: "black"}}>
        <InitialLayout/>
      </SafeAreaView>
    </SafeAreaProvider>
  </ClerkAndConvexProviders>
  )}
