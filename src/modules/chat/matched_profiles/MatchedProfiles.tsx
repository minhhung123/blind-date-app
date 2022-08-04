import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProfileAvatar from '../shared/components/ProfileAvatar';
import ChatHeader from "../shared/components/ChatHeader";
import { useStore } from '../../stores/store';
import { Match } from '../../../types/match';

const MatchedProfiles = () => {
  const { matches } = useStore().matchStore;
  const { user } = useStore().userStore;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ChatHeader fontSize={15} text="Matches"/>
      </View>

      <ScrollView
        contentContainerStyle={styles.horizontalProfilesListContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.matchedProfilesListContainer}>
          {matches.length > 0 ? 
            matches.map((match: Match) => {
              const otherUser = match.users[match.userMatched.find((id) => id !== user?.uid) as string]
              return (
                <ProfileAvatar
                  key={match.id}
                  imageUrl={otherUser.photoUrl} 
                  width={80}
                  height={80}
                  borderRadius={40}
                  isBlurred={true}
                />
              )
            })
          : (
            <View>
              <Text>Empty</Text>
            </View>
          )}
          
        </View>
      </ScrollView>

    </View>
  )
}

export default MatchedProfiles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    marginTop: 0,
  },
  headerContainer: {
    paddingLeft: 15,
    paddingTop: 5,
  },
  headerText: {
    paddingLeft: 15,
    fontSize: 15,
  },
  horizontalProfilesListContainer: {
    flex: 1,
    paddingTop: 15,
  },
  matchedProfilesListContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
})