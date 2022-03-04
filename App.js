import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Component1 from './components/component1';
import Component2 from './components/component2';
export default function App() {

  const [amount, setAmount] = useState(10);

  const incrementAmount = () => setAmount(amount + 1);
  const decrementAmount = () => setAmount(amount - 1);


  const amountHandler = (actionType) => {
    switch (actionType) {
      case 'incrementAmount':
        incrementAmount();
        break;
      case 'decrementAmount':
        decrementAmount();
        break;
      default:
        console.log('default case');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Component 0 </Text>
      <Component1 value={amount} component1AmountHandler={amountHandler} />
      {/* we can not reuse like this <Component2 /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
