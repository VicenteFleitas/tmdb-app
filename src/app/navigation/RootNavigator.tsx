import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MovieDetailScreen } from '../../features/movie-detail/presentation/MovieDetailScreen';
import { HomeScreen } from '../../features/movies/presentation/HomeScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Películas' }}
        />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetailScreen}
          options={{ title: 'Detalle' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
