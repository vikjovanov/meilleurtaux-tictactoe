import { StyleSheet } from 'react-native';

const HistoryScreenStyles = StyleSheet.create({
	container: { flex: 1 },
	list: {
		flex: 1,
		backgroundColor: '#fff',
	},
	item: {
		padding: 8,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

export default HistoryScreenStyles;
