import { Image, StyleSheet, ScrollView } from 'react-native';

import { colors, spacing } from '../../../app/theme';
import { AppText } from '../../../shared/components/AppText';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../app/navigation/types';
import { useMovieDetail } from './hooks/useMovieDetail';
import { SafeAreaView } from 'react-native-safe-area-context';

type MovieDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MovieDetail'
>;

export function MovieDetailScreen({ route }: MovieDetailScreenProps) {
  const {
    data: movie,
    isLoading,
    isError,
  } = useMovieDetail(route.params.movieId);
  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <AppText variant="title">Detalle de película</AppText>
        <AppText color="mutedText">
          Información detallada de la película.
        </AppText>
        {isLoading && <AppText color="mutedText">Cargando detalle...</AppText>}

        {isError && (
          <AppText color="mutedText">No pudimos cargar el detalle.</AppText>
        )}

        {!isLoading && !isError && movie && (
          <>
            <AppText color="mutedText">{movie.title}</AppText>
            {movie.posterPath && (
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w780${movie.posterPath}`,
                }}
                style={styles.poster}
              />
            )}
            <AppText variant="heading">Sinopsis</AppText>

            <AppText color="mutedText">
              {movie.overview || 'Sin sinopsis disponible.'}
            </AppText>

            <AppText color="mutedText">
              Géneros: {movie.genres.join(', ') || 'No disponibles'}
            </AppText>

            <AppText color="mutedText">
              Fecha de estreno: {movie.releaseDate || 'No disponible'}
            </AppText>

            <AppText color="mutedText">
              ⭐ {movie.voteAverage.toFixed(1)}
            </AppText>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacing.sm,
    padding: spacing.md,
    backgroundColor: colors.background,
  },
  poster: {
    width: '100%',
    height: 480,
    borderRadius: 12,
  },
  content: {
    paddingBottom: spacing.xl,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
