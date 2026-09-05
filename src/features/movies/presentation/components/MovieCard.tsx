import { Image, StyleSheet, View } from 'react-native';

import { colors, radii, spacing } from '../../../../app/theme';
import { AppText } from '../../../../shared/components/AppText';
import { Movie } from '../../domain/entities/Movie';

type MovieCardProps = {
  movie: Movie;
};

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <View style={styles.card}>
      {movie.posterPath ? (
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w342${movie.posterPath}`,
          }}
          style={styles.poster}
        />
      ) : (
        <View style={styles.placeholder}>
          <AppText variant="caption" color="mutedText">
            Sin imagen
          </AppText>
        </View>
      )}

      <View style={styles.info}>
        <AppText variant="heading" numberOfLines={2}>
          {movie.title}
        </AppText>

        <AppText color="mutedText">⭐ {movie.voteAverage.toFixed(1)}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: spacing.md,
    borderRadius: radii.md,
    backgroundColor: colors.surface,
    padding: spacing.sm,
  },
  poster: {
    width: 90,
    height: 135,
    borderRadius: radii.sm,
  },
  placeholder: {
    width: 90,
    height: 135,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.sm,
    backgroundColor: colors.border,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    gap: spacing.sm,
  },
});
