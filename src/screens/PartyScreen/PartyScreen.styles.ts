import { StyleSheet } from 'react-native';

const PartyScreenStyles = StyleSheet.create({
	container: { flex: 1 },
	header: {
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerText: {
		fontSize: 20,
		fontWeight: 'bold',
		paddingVertical: 20,
	},
	board: {
		flexDirection: 'column',
		width: '100%',
		flex: 0,
	},
	boardRow: {
		flexDirection: 'row',
		width: '100%',
	},
	footer: {
		flex: 1,
		paddingVertical: 20,
		justifyContent: 'center',
		gap: 10,
	},
});

export default PartyScreenStyles;
