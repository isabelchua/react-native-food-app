import { View, StyleSheet, Text, Image } from "react-native";
import { elevation } from "./common/styles";

export default function RestaurantItem({ restaurant }) {
	return (
		<View styles={[styles.elevation, styles.container]}>
			<Image style={styles.image} source={{ uri: restaurant.image_url }} />
			<View>
				<Text>{restaurant.name}</Text>
				<View>
					<Text>{restaurant.rating}</Text>
					<Text>{restaurant.price}</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	elevation,
	container: {
		backgroundColor: "white",
		height: 120,
		alignSelf: "stretch",
		marginVertival: 15,
		flexDirection: "row",
		alignItems: "center"
	},
	image: {
		width: 75,
		height: 75,
		borderRadius: 50,
		marginLeft: 10
	}
});
