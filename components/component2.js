import { StyleSheet, Text, View, Button } from 'react-native';

export default function Component2(props) {


    return (
        <View style={styles.container2}>
            <Text style={styles.text}> Component 2</Text>
            <Button
                title="Increment"
                onPress={() => {
                    props.component2AmountHandler('incrementAmount');
                    console.log('Incremented');
                }
                }
            />
            <Button
                title="Decrement"
                onPress={() => {
                    props.component2AmountHandler('decrementAmount');
                    console.log('Decremented');
                }
                }
            />
        </View>

    );
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    },
    container2: {
        width: '80%',
        height: '30%',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-around',


    }
});
