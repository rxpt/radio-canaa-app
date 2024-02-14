import React from 'react';
import {ScrollView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from 'react-native-paper';
import {styles, theme} from '../theme/styles';
import Socials from './Socials';

function TitleCard(): React.JSX.Element {
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <LinearGradient
        colors={[
          theme.colors.primary,
          theme.colors.secondary,
          theme.colors.tertiary,
        ]}
        style={styles.card}>
        <Image
          source={{
            uri: 'https://ministeriocanaanacional.com/wp-content/uploads/2021/07/117331414_2809115472649873_3288870818344017396_n-removebg-preview.png',
          }}
          height={150}
          width={150}
        />
      </LinearGradient>
      <Text variant="headlineSmall">FM Ministério Canaã 93.5</Text>
      <Text variant="bodySmall">A Rádio da Família Cristã</Text>
      <Socials
        buttons={[
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
    </ScrollView>
  );
}

export default TitleCard;
