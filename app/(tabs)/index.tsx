import { Text, View , TouchableOpacity} from "react-native";
import { styles } from "../../styles/auth.styles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/notifications">feed notifications screen</Link>
    </View>
  );
}