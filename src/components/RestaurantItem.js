import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import { withNavigation } from "react-navigation";
import { elevation } from "./common/styles";

function RestaurantItem({ restaurant, navigation }) {
	return (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate("Restaurant", { id: restaurant.id })
			}
		>
			<View style={[styles.container, styles.elevation]}>
				<Image
					style={styles.image}
					source={{ uri: restaurant.image_url }}
				/>
				<View style={styles.infoContainer}>
					<Text style={styles.header}>{restaurant.name}</Text>
					<View style={styles.info}>
						<Text style={styles.rating}>{restaurant.rating} stars</Text>
						<Text style={styles.money}>{restaurant.price}</Text>
					</View>
					<Text style={styles.rating}>
						{restaurant.review_count} reviews
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	elevation,
	container: {
		backgroundColor: "white",
		height: 120,
		alignSelf: "stretch",
		marginVertical: 5,
		flexDirection: "row",
		alignItems: "center"
	},
	image: {
		width: 75,
		height: 75,
		borderRadius: 50,
		marginLeft: 10
	},
	infoContainer: {
		flex: 1,
		paddingHorizontal: 10
	},
	header: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 4
	},
	info: {
		flexDirection: "row"
	},
	rating: {
		marginRight: 20
	},
	money: {
		color: "orange"
	}
});

export default withNavigation(RestaurantItem);
