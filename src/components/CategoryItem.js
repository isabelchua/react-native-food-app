import { Text, View, StyleSheet, Image } from "react-native";
import { elevation } from "./common/styles";

export default function CategoryItem({ name, imageUrl }) {
	return (
		<View style={[styles.container, styles.elevation]}>
			<View>
				<Image style={styles.image} source={imageUrl} />
			</View>
			<Text style={styles.header}>{name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 80,
		height: 100,
		borderRadius: 50,
		marginVertical: 15,
		marginHorizontal: 25,
		backgroundColor: "rgb(241,186,87)",
		alignItems: "center"
	},
	elevation,
	image: {
		width: 37,
		height: 37
	},
	header: {
		fontWeight: "bold"
	}
});
