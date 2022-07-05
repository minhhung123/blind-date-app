import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import useAuth from '../../hooks/useAuth';
import Header from './components/Header';
import Cards from './components/Cards';

const HomeScreen = () => {
  const { signOut } = useAuth();
  const handlePress = () => {
    signOut();
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>

      <View style={styles.cardsContainer}>
        <Cards />
      </View>
      
      <Button title='Log out' onPress={handlePress} />
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    paddingTop: 15,
  },
  cardsContainer: {
    flex: 7,
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsButtonContainer: {

  },
})