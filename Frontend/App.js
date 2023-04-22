import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header/Header';
import Edit from './src/components/Edit/Edit';
import { Provider } from 'react-redux';
import store from './src/components/Redux/store';

export default function App() {
  const [edit, setEdit] = useState(false);
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.body}>
        <View style={styles.app}>
          {edit ? (<Edit setEdit={setEdit}/>) : (<Header setEdit={setEdit}/>)}
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 0,
    margin: 0,
  },
  app: {
    display: 'flex',
    flexDirection: 'column',
    height: "100%",
    backgroundColor: '#0c0c0c',
  },
});
