import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import CategoryItem from "./src/components/CategoryItem";

export default function App() {
	// let term = "Bruger"
	const [term, setTerm] = useState("Burger");
	const commonCategories = [
		{
			name: "Burger",
			imageUrl: require("./src/assets/images/burger.png")
		},
		{
			name: "Pizza",
			imageUrl: require("./src/assets/images/pizza.png")
		},
		{
			name: "Dessert",
			imageUrl: require("./src/assets/images/cake.png")
		},
		{
			name: "Pasta",
			imageUrl: require("./src/assets/images/pasta.png")
		},
		{
			name: "Steak",
			imageUrl: require("./src/assets/images/steak.png")
		},
		{
			name: "Drinks",
			imageUrl: require("./src/assets/images/smoothies.png")
		}
	];
	return (
		<View style={styles.container}>
			<Header />
			<Search />
			<FlatList
				data={commonCategories}
				renderItem={({ item, index }) => {
					return (
						<CategoryItem
							name={item.name}
							imageUrl={item.imageUrl}
							index={index}
							active={item.name === term}
							handlePress={() => setTerm(item.name)}
						/>
					);
				}}
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={category => category.name}
			/>
			{/* <CategoryItem
				name="Burger"
				imageUrl={require("./src/assets/images/burger.png")}
			/>
			<CategoryItem
				name="Pizza"
				imageUrl={require("./src/assets/images/pizza.png")}
			/>
			<CategoryItem
				name="Dessert"
				imageUrl={require("./src/assets/images/cake.png")}
			/> */}
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
