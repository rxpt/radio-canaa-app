import 'react-native-gesture-handler';
//
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';
import RadioApp from './src/RadioApp';
import {styles, theme} from './src/theme/styles';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.container}>
      <PaperProvider theme={theme}>
        <RadioApp />
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

export default App;
