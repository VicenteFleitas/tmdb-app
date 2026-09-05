import { StyleSheet, View } from 'react-native';

import { colors, spacing } from '../../../app/theme';
import { AppText } from '../../../shared/components/AppText';

export function MovieDetailScreen() {
  return (
    <View style={styles.container}>
      <AppText variant="title">Detalle de película</AppText>
      <AppText color="mutedText">Información detallada de la película.</AppText>
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
