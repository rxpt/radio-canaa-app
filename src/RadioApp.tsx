import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles, theme} from './theme/styles';
import {Text} from 'react-native-paper';
import TextTicker from 'react-native-text-ticker';
import Socials from './components/Socials';
import {Image} from 'react-native';
import Player from './components/Player';
import Column from './components/Column';

function RadioApp(): React.JSX.Element {
  return (
    <LinearGradient
      colors={[theme.colors.onPrimary, theme.colors.onSecondary]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.mainContainer}>
      <Column style={styles.card}>
        <LinearGradient
          colors={[
            theme.colors.primary,
            theme.colors.secondary,
            theme.colors.tertiary,
          ]}
          style={styles.cardImageBackground}>
          <Image
            source={require('./assets/images/logo.png')}
            style={styles.cardImage}
          />
        </LinearGradient>
        <TextTicker style={styles.cardTitle}>
          FM Ministério Canaã 93.5
        </TextTicker>
        <Text style={styles.cardSubtitle}>A Rádio da Família Cristã</Text>
        <Socials
          buttons={[
            {
              url: 'https://wa.me/5585996845637',
              icon: 'whatsapp',
              name: 'WhatsApp',
            },
            {
              url: 'https://www.instagram.com/radiocanaa/',
              icon: 'instagram',
              name: 'Instagram',
            },
            {
              url: 'https://www.youtube.com/@MinisterioCanaaOficialSede',
              icon: 'youtube',
              name: 'YouTube',
            },
            {
              url: 'https://www.ministeriocanaanacional.com',
              icon: 'web',
              name: 'Site Oficial',
            },
          ]}
        />
      </Column>
      <Player />
    </LinearGradient>
  );
}

export default RadioApp;
