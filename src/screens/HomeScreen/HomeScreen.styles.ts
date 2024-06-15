import { StyleSheet } from 'react-native';

const HomeScreenStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
		gap: 12,
	},
	title: { fontSize: 32, fontWeight: 'bold', textAlign: 'center' },
	description: { fontSize: 16, textAlign: 'center' },
	buttonsContainer: {
		gap: 10,
	},
});

export default HomeScreenStyles;
