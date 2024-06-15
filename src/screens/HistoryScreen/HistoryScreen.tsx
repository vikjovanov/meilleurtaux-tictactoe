import { FlatList, Text, View } from 'react-native';
import useHistory from '../../hooks/useHistory';
import styles from './HistoryScreen.styles';

const HistoryScreen = () => {
	const { history } = useHistory();

	const renderEmpty = () => {
		return (
			<View>
				<Text>L'historique est vide.</Text>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={history}
				renderItem={({ item, index }) => (
					<View style={styles.item}>
						<Text>
							{index + 1}. Joueur {item.player + 1}
						</Text>
						<Text>
							x: {item.x} | y: {item.y}
						</Text>
					</View>
				)}
				ListEmptyComponent={renderEmpty()}
				keyExtractor={item => `${item.x}${item.y}`}
				style={styles.list}
			/>
		</View>
	);
};

export default HistoryScreen;
