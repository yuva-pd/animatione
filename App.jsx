import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Dashboard from './src/Dashboard';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Dashboard />
    </SafeAreaView>
  );
};

export default App;
