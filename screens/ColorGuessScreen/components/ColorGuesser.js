import { Button, StyleSheet, Text, View, useState } from 'react-native';

export default function ColorGuesser() {

    return (
        <View style={styles.container}>
            <View style={styles.colorRow}>
                <ColorBox />
                <ColorBox />
                <ColorBox />
                <ColorBox />
            </View>
            <View style={styles.submitRow}>
                <Button title='Reset' />
                <Button  title='submit'/>
            </View>
        </View>
    );
}

function ColorBox(){
    
    return(
        <View>
            <View style={styles.box}> 
            </View>
            <Text>
            #COLOR
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'colomn',
        borderWidth: 5,
        borderRadius: 10,
        backgroundColor: '#00807F',
        width: '100%',
        height: 400
    },

    colorRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 3,
        flex: 2,
        borderColor: 'green',
        margin: '5%',
    },

    submitRow:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderWidth: 3,
        flex: 1,
        borderColor: 'green'
    },

    box: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'space-around',
        width: 50,
        borderRadius: 100,
        margin: '5%',
        padding: '5%'
    },

    text: {
        fontSize: 24,
        textAlign: 'center',
    }
});