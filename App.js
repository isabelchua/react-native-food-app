import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import CategoryItem from "./src/components/CategoryItem";
import Categories from "./src/components/Categories";
import Restaurants from "./src/components/Restaurants";

// export default function App() {
// 	// let term = "Bruger"

// 	return (
// 		<View>
// 			<Header />
// 			<Search setTerm={setTerm} />
// 			<Categories
// 				categories={commonCategories}
// 				setTerm={setTerm}
// 				term={term}
// 			/>
// 			<Restaurants term={term} />
// 			<StatusBar />
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({});
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/Restaurant";

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Restaurant: RestaurantScreen
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "BusinessSearch"
		}
	}
);

export default createAppContainer(navigator);
