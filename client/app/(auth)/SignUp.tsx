import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";

export default function SignUp() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>No login yet? Sign Up now!s</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
