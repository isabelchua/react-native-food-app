import { Text, View, StyleSheet } from "react-native";

export default function Header() {
	return (
		<View style={(styles.container, { flexDirection: "row" })}>
			<Text style={styles.lightHeader}>Places to</Text>
			<Text style={styles.boldHeader}> eat!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 10
	},
	lightHeader: {
		fontSize: 35,
		marginLeft: 30
	},
	boldHeader: {
		fontSize: 35,
		fontWeight: "bold"
	}
});
