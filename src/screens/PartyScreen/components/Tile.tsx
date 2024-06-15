import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import { TTileValueEnum } from '../../../types';

type Props = PressableProps & {
	value: TTileValueEnum;
};

const Tile = ({ value, ...pressableProps }: Props) => {
	return (
		<Pressable
			style={styles.tile}
			disabled={value !== TTileValueEnum.EMPTY}
			{...pressableProps}>
			<Text style={styles.tileContent}>
				{value !== TTileValueEnum.EMPTY ? value : ''}
			</Text>
		</Pressable>
	);
};

export default Tile;

const styles = StyleSheet.create({
	tile: {
		aspectRatio: 1 / 1,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#000000',
	},
	tileContent: {
		fontSize: 32,
		fontWeight: 'bold',
	},
});
