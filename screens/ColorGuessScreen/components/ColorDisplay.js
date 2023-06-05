import { StyleSheet, Text, View, useState } from 'react-native';

export default function ColorDisplay() {

    return (
        <View style={styles.container}>
            <View style={[styles.box, , {backgroundColor: '#263672'}]}>
                <Text style={[styles.text]}>
                    Target Color
                </Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>
                    Your Mix
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        flexDirection: 'column',
        borderWidth: 5,
        borderRadius: 10,
        backgroundColor: '#00807F',
        width: '100%',
        height: 400
    },

    box: {
        flex: 1,
        backgroundColor: '#025904',
        justifyContent: 'space-around'
    },

    text: {
        fontSize: 24,
        textAlign: 'center',
    }
});