import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Tile from './components/Tile';
import { useState } from 'react';
import { TPlayerEnum } from '../../types';
import generateGameGrid from '../../utils/generateGameGrid';
import useGameMode from '../../hooks/useGameMode';
import styles from './PartyScreen.styles';
import useHistory from '../../hooks/useHistory';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { PartyStackParamsList } from '../../navigation/navigation';

const PartyScreen = () => {
	const navigation = useNavigation<NavigationProp<PartyStackParamsList>>();

	const [partyMode, setPartyMode] = useGameMode();
	const {
		addToHistory,
		resetHistory,
		getValue: getHistoryValue,
	} = useHistory();

	const [currentPlayer, setCurrentPlayer] = useState<TPlayerEnum>(
		TPlayerEnum.PLAYER_1,
	);

	const handlePressTile = (x: number, y: number) => {
		addToHistory(currentPlayer, x, y);
		setCurrentPlayer(prev =>
			prev === TPlayerEnum.PLAYER_1
				? TPlayerEnum.PLAYER_2
				: TPlayerEnum.PLAYER_1,
		);
	};

	const handleReset = () => {
		resetHistory();
		setCurrentPlayer(TPlayerEnum.PLAYER_1);
	};

	const handleQuit = () => {
		handleReset();
		setPartyMode(null);
	};

	const handleOpenHistory = () => {
		navigation.navigate('History');
	};

	if (!partyMode) {
		return (
			<SafeAreaView style={styles.container}>
				<Text>Une erreur s'est produite avec la sélection du mode</Text>
			</SafeAreaView>
		);
	}

	const board = generateGameGrid(partyMode);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>
					C'est au tour du joueur {currentPlayer + 1}
				</Text>
			</View>
			<View style={styles.board}>
				{board.map((row, x) => {
					return (
						<View key={x} style={styles.boardRow}>
							{row.map((_, y) => {
								return (
									<Tile
										key={y}
										value={getHistoryValue(x, y)}
										onPress={() => handlePressTile(x, y)}
									/>
								);
							})}
						</View>
					);
				})}
			</View>
			<View style={styles.footer}>
				<Button title="Recommencer la partie" onPress={handleReset} />
				<Button title="Choisir un autre mode" onPress={handleQuit} />
				<Button title="Historique" onPress={handleOpenHistory} />
			</View>
		</SafeAreaView>
	);
};

export default PartyScreen;
