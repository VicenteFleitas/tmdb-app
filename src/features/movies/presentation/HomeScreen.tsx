import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { colors, spacing } from '../../../app/theme';
import { RootState } from '../../../app/store/store';
import { setSearchQuery } from '../../../app/store/uiSlice';
import { AppText } from '../../../shared/components/AppText';
import { MovieCard } from './components/MovieCard';
import { SearchBar } from './components/SearchBar';
import { useDebouncedSearch } from './hooks/useDebouncedSearch';
import { usePopularMovies } from './hooks/usePopularMovies';
import { useSearchMovies } from './hooks/useSearchMovies';

export function HomeScreen() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.ui.searchQuery);
  const debouncedSearchQuery = useDebouncedSearch(searchQuery);
  const popularMoviesQuery = usePopularMovies();
  const searchMoviesQuery = useSearchMovies(debouncedSearchQuery);

  const isSearching = debouncedSearchQuery.trim().length > 0;
  const activeQuery = isSearching ? searchMoviesQuery : popularMoviesQuery;

  const { data: movies = [], isLoading, isError } = activeQuery;

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

      {isLoading && (
        <View style={styles.centered}>
          <ActivityIndicator color={colors.primary} size="large" />
          <AppText color="mutedText">Cargando películas...</AppText>
        </View>
      )}

      {isError && (
        <View style={styles.centered}>
          <AppText variant="heading">No pudimos cargar las películas</AppText>
          <AppText color="mutedText">Ocurrió un error inesperado.</AppText>
        </View>
      )}

      {!isLoading && !isError && movies.length > 0 && (
        <FlatList
          data={movies}
          keyExtractor={movie => String(movie.id)}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => <MovieCard movie={item} />}
        />
      )}

      {!isLoading && !isError && !isSearching && movies.length === 0 && (
        <View style={styles.noResults}>
          <AppText variant="heading">No hay películas disponibles</AppText>
          <AppText color="mutedText">
            No encontramos películas populares para mostrar.
          </AppText>
        </View>
      )}

      {!isLoading && !isError && isSearching && movies.length === 0 && (
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
