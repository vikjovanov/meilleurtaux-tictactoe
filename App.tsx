import { NavigationContainer } from '@react-navigation/native';
import { RootNavigation } from './src/navigation/navigation';

function App(): React.JSX.Element {
	return (
		<NavigationContainer>
			<RootNavigation />
		</NavigationContainer>
	);
}

export default App;
