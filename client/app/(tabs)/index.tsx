import { Pressable, StyleSheet } from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { useAuth0 } from "react-native-auth0";

export default function TabOneScreen() {
    const LogoutButton = () => {
        const { clearSession } = useAuth0();

        const onPress = async () => {
            try {
                await clearSession();
            } catch (e) {
                console.log(e);
            }
        };

        return (
            <Pressable onPress={onPress}>
                <Text>Log out</Text>
            </Pressable>
        );
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Welcome to StudyStats!</Text>
                <View
                    style={styles.separator}
                    lightColor="#eee"
                    darkColor="rgba(255,255,255,0.1)"
                />
                <EditScreenInfo path="app/(tabs)/index.tsx" />
            </View>
            <LogoutButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    logout: {
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
