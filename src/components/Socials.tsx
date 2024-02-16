import React from 'react';
import {Linking} from 'react-native';
import {IconButton, Tooltip} from 'react-native-paper';
import {styles} from '../theme/styles';
import Row from './Row';

type SocialsIcon = {
  size?: number;
  name: string;
  icon: string;
  url?: string;
  disabled?: boolean;
};

type SocialsProps = {
  buttons: SocialsIcon[];
};

function Socials({buttons}: SocialsProps): React.JSX.Element {
  return (
    <Row style={styles.socialContainer}>
      {buttons.map((button, index) => {
        const size = button.size ? button.size : 24;

        return (
          <Tooltip title={button.name} key={index}>
            <IconButton
              size={size}
              icon={button.icon}
              onPress={() => button.url && Linking.openURL(button.url)}
              disabled={button.disabled}
            />
          </Tooltip>
        );
      })}
    </Row>
  );
}

export default Socials;
