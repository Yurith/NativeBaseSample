/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Container, Content, Button, Text } from 'native-base';

export default class NativeBaseSample extends Component {
  render() {
    return (
      <Container>
          <Content style={styles.buttonLocation}>
              <Button light><Text> Light </Text></Button>
              <Button primary><Text> Primary </Text></Button>
              <Button success><Text> Success </Text></Button>
              <Button info><Text> Info </Text></Button>
              <Button warning><Text> Warning </Text></Button>
              <Button danger><Text> Danger </Text></Button>
              <Button dark><Text> Dark </Text></Button>
          </Content>
      </Container>
    );
  }
}

const styles = {
  buttonLocation: {
    paddingTop: 100,
  },
};

AppRegistry.registerComponent('NativeBaseSample', () => NativeBaseSample);
