import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./src/components/Header";
import Search from "./src/components/Search";

export default function App() {
	return (
		<View style={styles.container}>
			<Header />
			<Search />
			{/* <Text>Hello! test</Text> */}
			<StatusBar />
		</View>
	);
}

const styles = StyleSheet.create({
	// container: {
	// 	flex: 1,
	// 	backgroundColor: "#fff",
	// 	alignItems: "center",
	// 	justifyContent: "center"
	// }
});
