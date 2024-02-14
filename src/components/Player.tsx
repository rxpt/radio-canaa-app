import React from 'react';
import {Alert, View, ToastAndroid} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import TrackPlayer, {useIsPlaying} from 'react-native-track-player';
import {TimerPickerModal} from 'react-native-timer-picker';
import Slider from '@react-native-community/slider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconButton from './IconButton';
import LinearGradient from 'react-native-linear-gradient';
import dateFns from 'date-fns';
import NetInfo from '@react-native-community/netinfo';
import {setupPlayer, playRadio, stopRadio} from '../services';
import {styles, theme} from '../theme/styles';

function Player(): React.JSX.Element {
  const [timerPickerVisible, setTimerPickerVisible] = React.useState(false);
  const [playerIsSetup, setPlayerIsSetup] = React.useState(false);
  const [currVolume, setCurrVolume] = React.useState(0);
  const {playing: isPlaying} = useIsPlaying();

  React.useEffect(() => {
    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        ToastAndroid.show('Sem conexão com a internet', ToastAndroid.LONG);
      }
    });

    setupPlayer().then(isSetup => {
      TrackPlayer.getVolume()
        .then(setCurrVolume)
        .then(() => setPlayerIsSetup(isSetup));
    });
  }, []);

  if (!playerIsSetup) {
    return <View />;
  }

  return (
    <View>
      <View style={styles.controlContainer}>
        {/* Volume - */}
        <IconButton
          icon="timer"
          size={28}
          onPress={() => {
            setTimerPickerVisible(true);
          }}
          disabled={currVolume <= 0}
        />
        {/* Play/Pause */}
        <IconButton
          animated
          gradient={{
            colors: [theme.colors.primary, theme.colors.tertiary],
            start: {x: 0, y: 0},
            end: {x: 1, y: 1},
          }}
          color={theme.colors.background}
          icon={isPlaying ? 'pause' : 'play'}
          size={60}
          onPress={() => {
            if (isPlaying) {
              stopRadio().catch(() => {
                ToastAndroid.show(
                  'Não foi possível parar a rádio',
                  ToastAndroid.SHORT,
                );
              });
            } else {
              playRadio().catch(() => {
                ToastAndroid.show(
                  'Não foi possível iniciar a rádio',
                  ToastAndroid.SHORT,
                );
              });
            }
          }}
          disabled={!playerIsSetup}
          style={styles.controlButton}
        />
        {/* Volume + */}
        <IconButton
          icon="share"
          size={28}
          onPress={() => {
            Alert.alert('Compartilhar', 'Em breve você poderá compartilhar');
          }}
        />
      </View>
      {/* Volume Slider */}
      <View style={styles.volumeContainer}>
        <MaterialIcons
          name="volume-up"
          size={20}
          color={theme.colors.primary}
        />
        <Slider
          style={styles.volumeSlider}
          value={currVolume}
          onValueChange={value => {
            setCurrVolume(value);
            TrackPlayer.setVolume(value);
          }}
          minimumTrackTintColor={theme.colors.secondary}
          maximumTrackTintColor={theme.colors.tertiary}
          thumbTintColor={theme.colors.primary}
        />
      </View>
      {/* Timer Picker */}
      <TimerPickerModal
        visible={timerPickerVisible}
        setIsVisible={setTimerPickerVisible}
        modalTitle="Desligar em..."
        onConfirm={time => {
          const {hours, minutes} = time;
          const now = new Date();
          const timer = dateFns.differenceInMilliseconds(
            dateFns.addMinutes(dateFns.addHours(now, hours), minutes),
            now,
          );

          ToastAndroid.show(
            `Desligando em ${hours}h ${minutes}min`,
            ToastAndroid.SHORT,
          );

          BackgroundTimer.stop();
          BackgroundTimer.setTimeout(() => {
            stopRadio().catch(() => {
              ToastAndroid.show(
                'Não foi possível parar a rádio',
                ToastAndroid.SHORT,
              );
            });
          }, timer);

          setTimerPickerVisible(false);
        }}
        onCancel={() => setTimerPickerVisible(false)}
        LinearGradient={LinearGradient}
        closeOnOverlayPress
        cancelButtonText="Cancelar"
        confirmButtonText="Confirmar"
        hourLabel="h"
        minuteLabel="min"
        hideCancelButton
        hideSeconds
        initialHours={1}
        styles={styleTimePicker as any}
      />
    </View>
  );
}

const styleTimePicker = {
  theme: 'dark',
  contentContainer: {
    width: 300,
  },
  pickerItemContainer: {
    minWidth: 100,
  },
  pickerLabel: {
    color: theme.colors.primary,
  },
  pickerItem: {
    color: theme.colors.primary,
  },
  disabledPickerItem: {
    color: theme.colors.tertiary,
  },
  text: {
    color: theme.colors.primary,
  },
  confirmButton: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.onPrimary,
    color: theme.colors.background,
  },
};

export default Player;
