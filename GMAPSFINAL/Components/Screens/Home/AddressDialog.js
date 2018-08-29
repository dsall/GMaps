import * as React from 'react';
import { View } from 'react-native';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Paragraph } from 'react-native-paper';

export default class MyComponent extends React.Component {
  state = {
    visible: false,
  };

  _showDialog = () => this.setState({ visible: true });
  _hideDialog = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;
    return (
      <View>
        <Button onPress={this._showDialog}>Show Dialog</Button>
        <Dialog
           visible={visible}
           onDismiss={this._hideDialog}
        >
          <DialogTitle>Alert</DialogTitle>
          <DialogContent>
            <Paragraph>This is simple dialog</Paragraph>
          </DialogContent>
          <DialogActions>
            <Button onPress={this._hideDialog}>Done</Button>
          </DialogActions>
        </Dialog>
      </View>
    );
  }
}