import { StatusBar } from 'expo-status-bar';

import rw from 'random-words';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_900Black,
  Poppins_300Light
} from '@expo-google-fonts/poppins'

import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  Pressable,
  View, SafeAreaView,
  Platform,
  StatusBar as SB,
  Alert,
  TouchableHighlight
} from 'react-native';




import AppLoading from 'expo-app-loading';
import Clipboard from 'expo-clipboard';


export default function App() {
  let [font_loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_900Black,
    Poppins_300Light
  })

  let [word, setWord] = useState(rw())

  let handlePress = () => {
    setWord(rw())
  }

  let handleLongPress = () => {
    let content = Clipboard.setString(word);
    Alert.alert("Copied to your Clipboard")
  }

  if (!font_loaded) return <AppLoading />

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>

        <Text style={styles.title}>Words Generator</Text>

        <View style={styles.word_container}>

          <Text style={styles.word}>{word}</Text>

          <TouchableHighlight
            style={styles.btn}
            onPress={handlePress}
            onLongPress={handleLongPress}
            underlayColor={"#0e3486"}
          >

            <Text style={styles.btn_text}>Press To Random Generate</Text>

          </TouchableHighlight>

          <Text
            style={styles.info_text}
          >Long press to copy the word to clipboard</Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? SB.currentHeight : 0
  },

  container: {
    width: "100%",
    height: "70%",
    backgroundColor: "#fff",
    alignItems: 'center',
  },

  title: {
    flex: 1,
    fontSize: 40,
    color: "#616161",
    fontFamily: "Poppins_400Regular",
    textAlignVertical: "center"
  },

  word_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },

  word: {
    fontSize: 45,
    color: "black",
    fontFamily: "Poppins_900Black",
    textTransform: "capitalize"
  },

  btn: {
    backgroundColor: "#1855da",
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 8
  },


  btn_text: {
    fontFamily: "Poppins_300Light",
    color: "white",
    fontSize: 20,
  },


  info_text: {
    color: "#616161",
    fontFamily: "Poppins_400Regular",
    fontSize: 12
  }

});
