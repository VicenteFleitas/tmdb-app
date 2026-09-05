import { StyleSheet, View } from 'react-native';

import { colors, spacing } from '../../../app/theme';
import { AppText } from '../../../shared/components/AppText';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../app/navigation/types';

type MovieDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MovieDetail'
>;

export function MovieDetailScreen({ route }: MovieDetailScreenProps) {
  return (
    <View style={styles.container}>
      <AppText variant="title">Detalle de película</AppText>
      <AppText color="mutedText">Información detallada de la película.</AppText>
      <AppText color="mutedText">
        ID de película: {route.params.movieId}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacing.sm,
    padding: spacing.md,
    backgroundColor: colors.background,
  },
});
