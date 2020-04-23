import {View, Text, StyleSheet, Alert, Image, Switch} from 'react-native';
import React, {Component} from 'react';
import {Header} from '../components/Header';
import {Input, Button} from 'react-native-elements';

class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FetchedUser: {
        name: 'Mohamed ElZaher',
        nationalID: '021503724753145',
        phoneNumber: '01234567891',
        infected: false,
        otherAttributes: '...',
      },
      userFound: false,
      nationalIDInput: '',
      resultText: 'Enter an ID to display user',
    };
  }

  onChangeTextFunc = (text) => {
    this.setState({nationalIDInput: text});
  };

  onSearchClicked = () => {
    if (this.state.nationalIDInput === '') {
      Alert.alert('Error', 'Please enter an ID');
    } else {
      this.setState({userFound: true});
    }
  };
  toggleUserInfected = (value) => {
    this.setState(Object.assign(this.state.FetchedUser, {infected: value}));
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f1f1f3'}}>
        <View style={{flex: 1}}>
          <Header
            title="Case Entry"
            description="Add a new Corona-virus victim"
          />
        </View>

        <View style={{flex: 3}}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <Input
              placeholder="Search by national ID"
              inputStyle={{color: 'black', marginLeft: 10}}
              containerStyle={{
                marginBottom: 20,
                paddingHorizontal: -5,
                width: '70%',
              }}
              inputContainerStyle={{borderBottomColor: '#fdc82b'}}
              onChangeText={(text) => this.onChangeTextFunc(text)}
              keyboardType="number-pad"
            />
            <Button
              type="solid"
              title="Search"
              titleStyle={styles.titleStyle}
              buttonStyle={styles.buttonStyle}
              onPress={() => this.onSearchClicked()}
            />
          </View>
          <View
            style={{
              flex: 5,
            }}>
            {this.state.userFound ? (
              <View
                style={{
                  borderRadius: 100,
                  backgroundColor: '#ffac1e',
                  marginHorizontal: 5,
                }}>
                <View style={styles.transactionItem}>
                  {this.state.FetchedUser.infected ? (
                    <Image
                      style={styles.indicator}
                      source={require('../assets/TransactionPaid.png')}
                    />
                  ) : (
                    <Image
                      style={styles.indicator}
                      source={require('../assets/TransactionRecieved.png')}
                    />
                  )}
                  <View
                    style={{
                      marginLeft: 20,
                      width: '70%',
                    }}>
                    <Text style={styles.transactionTitleUnread}>
                      {this.state.FetchedUser.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={styles.transactionDateUnread}>
                        {this.state.FetchedUser.nationalID}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 25,
                    }}>
                    <Switch
                      trackColor={{false: '#767577', true: '#767577'}}
                      thumbColor={
                        this.state.FetchedUser.infected ? '#f4f3f4' : '#f4f3f4'
                      }
                      ios_backgroundColor="#767577"
                      onValueChange={this.toggleUserInfected}
                      value={this.state.FetchedUser.infected}
                    />
                  </View>
                </View>
              </View>
            ) : (
              <Text style={styles.noResultsText}>{this.state.resultText}</Text>
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor: '#fdc82b',
    borderRadius: 30,
    width: 100,
    paddingVertical: 12,
    marginRight: 5,
  },
  noResultsText: {
    fontSize: 18,
    textAlign: 'center',
    opacity: 0.3,
    marginTop: 50,
  },
  transactionItem: {
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    borderBottomColor: 'rgba(0,0,0,0.3)',
    borderBottomLeftRadius: 50,
    paddingHorizontal: 50,
    paddingVertical: 20,
    width: '90%',
    alignItems: 'center',
  },
  transactionTitleRead: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionTitleUnread: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  transactionDateRead: {
    color: 'black',
    fontSize: 16,
  },
  transactionDateUnread: {
    color: 'white',
    fontSize: 14,
  },
  indicator: {
    width: 50,
    height: 50,
  },
});
export default SearchScreen;
