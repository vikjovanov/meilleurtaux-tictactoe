import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GAMES_CONFIG } from '../../constants';
import styles from './HomeScreen.styles';
import capitalize from '../../utils/capitalize';
import usePartyConfig from '../../hooks/usePartyConfig';

const HomeScreen = () => {
	const [, setPartyConfig] = usePartyConfig();

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Tic Tac Toe</Text>
			<Text style={styles.description}>
				Cliquez sur un mode de jeu pour démarrer la partie
			</Text>
			<View>
				{GAMES_CONFIG.map(game => (
					<Button
						key={game.mode}
						title={capitalize(game.mode)}
						onPress={() => setPartyConfig({ mode: game.mode })}
					/>
				))}
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
