import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PartyScreen from '../screens/PartyScreen/PartyScreen';
import HistoryScreen from '../screens/HistoryScreen/HistoryScreen';
import useParty from '../hooks/useParty';

type PartyStackParamsList = {
	Party: undefined;
	History: undefined;
};

type HomeStackParamsList = {
	Home: undefined;
};

const PartyStack = createStackNavigator<PartyStackParamsList>();
const HomeStack = createStackNavigator<HomeStackParamsList>();

export const PartyNavigation = () => {
	return (
		<PartyStack.Navigator>
			<PartyStack.Screen name="Party" component={PartyScreen} />
			<PartyStack.Screen name="History" component={HistoryScreen} />
		</PartyStack.Navigator>
	);
};

export const HomeNavigation = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={HomeScreen} />
		</HomeStack.Navigator>
	);
};

export const RootNavigation = () => {
	const [party] = useParty();

	if (!party) {
		return <HomeNavigation />;
	}

	return <PartyNavigation />;
};
