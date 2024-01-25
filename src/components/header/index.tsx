import { TouchableOpacity, View } from "react-native";
import { CaretLeft } from "phosphor-react-native";
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton}>
        <CaretLeft size={24} color="#DDDDDD" />
      </TouchableOpacity>
    </View>
  );
}
