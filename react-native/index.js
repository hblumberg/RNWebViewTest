import React from 'react';
import {AppRegistry, WebView} from 'react-native';

class ReactNativeScreen extends React.Component {
    render() {
        return (
            <WebView
                source={{uri: 'http://facebook.github.io/react-native/blog/'}}
                onScrollChanged={({nativeEvent}) => {
                    console.log("Scroll changed:");
                    console.log(nativeEvent.l);
                    console.log(nativeEvent.t);
                    console.log(nativeEvent.oldl);
                    console.log(nativeEvent.oldt);
                }}
            />
        );
    }
}

AppRegistry.registerComponent('ReactNativeScreen', () => ReactNativeScreen);
