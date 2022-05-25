export default function HomeScreen() {
	import { View } from "react-native";
	import Header from "./../components/Header";
	import Search from "./../components/Search";
	import Categories from "./../components/Categories";
	import Restaurants from "./../components/Restaurants";
	import { StatusBar } from "expo-status-bar";
	return (
		<View>
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
