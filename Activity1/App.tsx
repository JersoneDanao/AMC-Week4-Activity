import React from 'react';
import {StyleSheet, Text, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
         A lonely road, crossed another cold state line
Miles away from those I love, purpose hard to find
While I recall all the words you spoke to me
Can't help but wish that I was there
Back where I'd love to be, oh yeah
Dear God, the only thing I ask of you
Is to hold her when I'm not around
When I'm much too far away
We all need that person who can be true to you
But I left her when I found her
And now I wish I'd stayed
'Cause I'm lonely and I'm tired
I'm missing you again, oh no
Once again
There's nothing here for me on this barren road
There's no one here while the city sleeps
And all the shops are closed
Can't help but think of the times I've had with you
Pictures and some memories
will have to help me through, oh yeah
Dear God the only thing I ask of you
is to hold her when I'm not around
When I'm much too far away
We all need that person who can be true to you
I left her when I found her
And now I wish I'd stayed
'Cause I'm lonely and I'm tired
I'm missing you again, oh no
Once again
Well some search, never finding a way
Before long, they waste away
I found you, something told me to stay
I gave in, to selfish ways
And how I miss someone to hold
When hope begins to fade
A lonely road, crossed another cold state line
Miles away from those I love, purpose hard to find
Dear God the only thing I ask of you
is to hold her when I'm not around
When I'm much too far away
We all need the person who can be true to you
I left her when I found her
And now I wish I'd stayed
'Cause I'm lonely and I'm tired
I'm missing you again, oh no
Once again
Woah
Yeah, yeah
        </Text>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 42,
    padding: 12,
  },
});

export default App;