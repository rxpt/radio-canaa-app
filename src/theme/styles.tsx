import {StyleSheet} from 'react-native';
import {MD3DarkTheme as DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: DefaultTheme.colors.onSecondary,
    onBackground: DefaultTheme.colors.secondary,
  },
  dark: true,
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    minWidth: '100%',
  },
  controlContainer: {
    minWidth: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  socialContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  controlButton: {
    borderRadius: 100,
  },
  volumeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  volumeSlider: {
    flex: 1,
  },
  card: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  cardImageBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
    width: '100%',
    elevation: 10,
    marginBottom: 20,
    borderRadius: 12,
  },
  cardImage: {
    height: 250,
    width: 250,
    resizeMode: 'cover',
  },
  cardTitle: {
    ...theme.fonts.titleLarge,
    color: theme.colors.onBackground,
    textAlign: 'center',
    width: '100%',
  },
  cardSubtitle: {
    ...theme.fonts.bodySmall,
    color: theme.colors.onBackground,
    textAlign: 'center',
  },
});
