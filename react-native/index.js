import React from 'react';
import {AppRegistry, WebView} from 'react-native';

class ReactNativeScreen extends React.Component {
    render() {
        return (
            <WebView
                source={{uri: 'http://facebook.github.io/react-native/blog/'}}
                onScrollChanged={({nativeEvent}) => {
                    console.log("Scroll changed:");
                    console.log(nativeEvent.x);
                    console.log(nativeEvent.y);
                    console.log(nativeEvent.prevX);
                    console.log(nativeEvent.prevY);
                }}
            />
        );
    }
}

AppRegistry.registerComponent('ReactNativeScreen', () => ReactNativeScreen);
