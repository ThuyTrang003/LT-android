import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, Dimensions, TouchableOpacityComponent } from 'react-native';
//import { minutes, seconds, milliseconds } from 'minutes-seconds-milliseconds';
function startButton() {
    const handleStartPress = () => {

    }
    return (
        <TouchableOpacity style={styles.button} >

        </TouchableOpacity>
    )
}
const StopwatchScreen = () => {

}

function thuyTrang(): React.JSX.Element {

    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [timeElapsed, setTimeElapsed] = useState(null);
    const [running, setRunning] = useState(false);
    const [startTime, setStartTime] = useState(null);

    const handleStartStop = () => {
        setIsActive(!isActive);

        if (!isActive) {
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        }
        else if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
        }
    };

    const handleReset = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
        }
        setTime(0);
        setIsActive(false);
    };
    const startStopButton = () => {

        //let style = running ? styles.StopButton : styles.startButton;
        return (
            <TouchableOpacity
                //onPress={handleStartPress}
                style={[styles.button]}
            >
                <Text>
                    {/* {running ? 'Stop' : 'Start'} */}
                    start
                </Text>
            </TouchableOpacity>
        );
    }
    const handleStartPress = () => {
        setStartTime(null),

            // if (this.state.running) {
            //     clearInterval(this.interval);
            //     this.setState({ running: false });
            //     return
            // }
            setInterval(() => {
                //setTimeElapsed(time=>time + 1000);
                // this.setState({
                //     timeElapsed: new Date() - this.state.startTime,
                //     running: true
                // });
            }, 10);
    }



    //const [timer, setTimer] = useState("");
    const formatTime = require('minutes-seconds-milliseconds');
    return (
        <View style={styles.background}>
            <View style={styles.timerBackground}>
                <Text style={[styles.fontWeight, { fontSize: 60, color: 'white' }]}>
                    {formatTime(timeElapsed)}
                </Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Vòng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={handleStartPress}>
                    <Text style={styles.buttonText}>Bắt đầu</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.scrollView}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    timerBackground: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderRadius: 50,
        height: 70,
        width: 70,
        backgroundColor: 'gray',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 14,
        color: 'white',
    },
    buttons: {
        paddingLeft: 20,
        paddingRight: 20,
        flex: 2.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderColor: 'white',

    },
    scrollView: {
        flex: 9,

    },
    lap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    background: {
        flex: 1,
        backgroundColor: 'black',
    },
    fontWeight: {
        fontFamily: 'Roboto-Light',
    },
});

export default thuyTrang;
