import React, {useEffect} from 'react';
import TrackPlayer, {Capability} from 'react-native-track-player';
import {Provider} from 'react-redux';

import AppNavigation from './src/framework/AppNavigation';
import store from './src/store/store';

const App = () => {
  useEffect(() => {
    TrackPlayer.setupPlayer({});
    TrackPlayer.updateOptions({
      // Media controls capabilities
      stopWithApp: true,
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],

      // Capabilities that will show up when the notification is in the compact form on Android
      compactCapabilities: [Capability.Play, Capability.Pause],
    });
  }, []);
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
