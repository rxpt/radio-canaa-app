import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Player from './components/Player';
import TitleCard from './components/TitleCard';
import {styles, theme} from './theme/styles';

function RadioApp(): React.JSX.Element {
  return (
    <LinearGradient
      colors={[theme.colors.onPrimary, theme.colors.onSecondary]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>
      <TitleCard />
      <Player />
    </LinearGradient>
  );
}

export default RadioApp;
