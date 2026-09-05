import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import { colors, spacing } from '../../../app/theme';
import { AppText } from '../../../shared/components/AppText';
import { MovieCard } from './components/MovieCard';
import { usePopularMovies } from './hooks/usePopularMovies';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../app/store/store';
import { setSearchQuery } from '../../../app/store/uiSlice';
import { SearchBar } from './components/SearchBar';

export function HomeScreen() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.ui.searchQuery);
  const { data: movies = [], isLoading, isError, error } = usePopularMovies();
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator color={colors.primary} size="large" />
        <AppText color="mutedText">Cargando películas...</AppText>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.centered}>
        <AppText variant="heading">No pudimos cargar las películas</AppText>
        <AppText color="mutedText">
          {error instanceof Error
            ? error.message
            : 'Ocurrió un error inesperado.'}
        </AppText>
      </View>
    );
  }

  if (movies.length === 0) {
    return (
      <View style={styles.centered}>
        <AppText variant="heading">No hay películas</AppText>
        <AppText color="mutedText">
          No encontramos películas para mostrar.
        </AppText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AppText variant="title">Películas populares</AppText>

      <AppText variant="body" color="mutedText">
        Descubrí las películas más populares.
      </AppText>

      <SearchBar
        value={searchQuery}
        onChangeText={text => dispatch(setSearchQuery(text))}
      />

      {filteredMovies.length > 0 && (
        <FlatList
          data={filteredMovies}
          keyExtractor={movie => String(movie.id)}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => <MovieCard movie={item} />}
        />
      )}

      {searchQuery.trim() && filteredMovies.length === 0 && (
        <View style={styles.noResults}>
          <AppText variant="heading">No encontramos resultados</AppText>
          <AppText color="mutedText">
            Probá con otro nombre de película.
          </AppText>
        </View>
      )}
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
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    backgroundColor: colors.background,
  },
  noResults: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
});
