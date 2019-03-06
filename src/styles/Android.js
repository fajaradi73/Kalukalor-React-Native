import {StyleSheet, Dimensions} from 'react-native';

let deviceWidth = Dimensions.get('window').width;

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    inputContainer: {
        flex: 7,
        backgroundColor: '#40bfe8'
    },

    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#fff'
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },

    displayContainer: {
        flex: 2,
        backgroundColor: '#193441',
        justifyContent: 'center'
    },

    displayText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },

    inputButtonHighlighted: {
      backgroundColor: '#193441'
    },

    historyDisplayContainer: {
      flex: 1,
      backgroundColor: '#193441'
    },

    historyDisplayText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },
});

export default Style;
