import { View, StyleSheet } from "react-native";
import Header from "./../components/Header";
import Search from "./../components/Search";
import Categories from "./../components/Categories";
import Restaurants from "./../components/Restaurants";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function HomeScreen() {
	const [term, setTerm] = useState("Burger");
	const commonCategories = [
		{
			name: "Burger",
			imageUrl: require("../assets/images/burger.png")
		},
		{
			name: "Pizza",
			imageUrl: require("../assets/images/pizza.png")
		},
		{
			name: "Dessert",
			imageUrl: require("../assets/images/cake.png")
		},
		{
			name: "Pasta",
			imageUrl: require("../assets/images/pasta.png")
		},
		{
			name: "Steak",
			imageUrl: require("../assets/images/steak.png")
		},
		{
			name: "Drinks",
			imageUrl: require("../assets/images/smoothies.png")
		}
	];

	return (
		<View style={styles.container}>
			<Header />
			<Search setTerm={setTerm} />
			<Categories
				categories={commonCategories}
				setTerm={setTerm}
				term={term}
			/>
			<Restaurants term={term} />
			<StatusBar />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgb(253,253,253)",
		flex: 1
	}
});
