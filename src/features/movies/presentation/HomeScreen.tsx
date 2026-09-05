import { FlatList, StyleSheet, View } from 'react-native';

import { colors, spacing } from '../../../app/theme';
import { AppText } from '../../../shared/components/AppText';
import { MovieCard } from './components/MovieCard';
import { usePopularMovies } from './hooks/usePopularMovies';

export function HomeScreen() {
  const { data: movies = [] } = usePopularMovies();

  return (
    <View style={styles.container}>
      <AppText variant="title">Películas populares</AppText>

      <AppText variant="body" color="mutedText">
        Descubrí las películas más populares.
      </AppText>

      <FlatList
        data={movies}
        keyExtractor={movie => String(movie.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <MovieCard movie={item} />}
      />
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
  list: {
    gap: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.xl,
  },
});
