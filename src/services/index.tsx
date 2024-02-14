import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  Event,
} from 'react-native-track-player';

export const setupPlayer = async () => {
  let isSetup = false;
  try {
    await TrackPlayer.retry();
    isSetup = true;
  } catch {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
      },
      capabilities: [Capability.Play, Capability.Pause],
      compactCapabilities: [Capability.Play, Capability.Pause],
      progressUpdateEventInterval: 2,
    });

    isSetup = true;
  } finally {
    return isSetup;
  }
};

export const playRadio = async () => {
  await TrackPlayer.load({
    url: 'https://stream1.svrdedicado.org/8006/stream',
    title: 'FM Ministério Canaã 93.5',
    artist: 'A Rádio da Família Cristã',
    artwork:
      'https://ministeriocanaanacional.com/wp-content/uploads/2021/07/117331414_2809115472649873_3288870818344017396_n-removebg-preview.png',
    isLiveStream: true,
  });
  await TrackPlayer.play();
};

export const stopRadio = async () => {
  await TrackPlayer.reset();
};

export const PlaybackService = async () => {
  TrackPlayer.addEventListener(Event.RemotePlay, () => playRadio());
  TrackPlayer.addEventListener(Event.RemotePause, () => stopRadio());
};
