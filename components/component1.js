import { StyleSheet, View, Text } from 'react-native';
import Component2 from './component2';

export default function Component1(props) {
    return (

        <View style={styles.container1}>
            <Text>{props.value} Component 1</Text>
            <Component2 component2AmountHandler={props.component1AmountHandler}></Component2>
        </View>


    );
}

const styles = StyleSheet.create({

    container1: {
        width: '50%',
        height: '50%',
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    }

});
