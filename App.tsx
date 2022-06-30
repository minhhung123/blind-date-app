import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navigation from './src/modules/navigation';
import AuthProvider from './src/modules/auth/AuthProvider';
import { store, StoreContext } from './src/modules/stores/store';

export default function App() {
  return (
    <StoreContext.Provider value={store}>
      <AuthProvider>
        <Navigation />
        <StatusBar style="auto" />
      </AuthProvider>
    </StoreContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
