import {
	Text,
	View,
	StyleSheet,
	Image,
	Button,
	TouchableOpacity
} from "react-native";
import { elevation } from "./common/styles";

export default function CategoryItem({
	name,
	imageUrl,
	index,
	active,
	handlePress
}) {
	return (
		<TouchableOpacity onPress={handlePress}>
			<View
				style={[
					styles.container,
					styles.elevation,
					index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
					active
						? { backgroundColor: "rgb(241,186,87)" }
						: { backgroundColor: "white" }
				]}
			>
				<View>
					<Image style={styles.image} source={imageUrl} />
				</View>
				<Text style={styles.header}>{name}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 80,
		height: 100,
		borderRadius: 50,
		marginVertical: 15,

		backgroundColor: "rgb(241,186,87)",
		alignItems: "center"
	},
	elevation,
	image: {
		width: 40,
		height: 40
	},
	header: {
		fontWeight: "bold"
	}
});
