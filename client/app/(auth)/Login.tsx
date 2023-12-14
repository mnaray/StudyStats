import { Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../../components/Themed";
import { useAuth } from "../../context/AuthProvider";
import { useAuth0, Auth0Provider } from "react-native-auth0";

export default function Login() {
    const { setUser } = useAuth();

    const login = () => {
        setUser({
            name: "John Doe",
        });
    };
    const LoginButton = () => {
        const { authorize } = useAuth0();

        const onPress = async () => {
            try {
                await authorize();
            } catch (e) {
                console.log(e);
            }
        };

        return <Pressable onPress={onPress}></Pressable>;
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome to StudyStats! Login Please.
            </Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.3)"
            />
            <LoginButton />
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
    login: {
        position: "relative",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        marginTop: 200,
        backgroundColor: "#911f84",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
});
