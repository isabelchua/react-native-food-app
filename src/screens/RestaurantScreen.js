import { Text, View } from "react-native";

export default function RestaurantScreen({ navigation }) {
	const id = navigation.getParam("id");
	return (
		<View>
			<Text>Hello res screen</Text>
			<Text>{id}</Text>
		</View>
	);
}
