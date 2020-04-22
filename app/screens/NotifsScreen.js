import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
import {Header} from '../components/Header';

class NotifsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerBackgroundColor: 'transparent',
      data: [
        {
          id: 0,
          otherPeer: 'HyperPanda',
          amount: 30.7,
          paid: true,
          date: '11/11/19',
          time: '2:27',
          unread: true,
        },
        {
          id: 1,
          otherPeer: 'Abu Dawood',
          amount: 16.2,
          paid: false,
          date: '20/02/20',
          time: '10:19',
          unread: true,
        },
        {
          id: 2,
          otherPeer: 'Mohamed Mansour',
          amount: 27.2,
          paid: true,
          date: '01/01/20',
          time: '11:11',
          unread: false,
        },
        {
          id: 3,
          otherPeer: 'Carrefour',
          amount: 152.75,
          paid: true,
          date: '14/03/20',
          time: '2:18',
          unread: false,
        },
        {
          id: 4,
          otherPeer: 'Farm Superstores',
          amount: 356.9,
          paid: false,
          date: '14/02/20',
          time: '3:56',
          unread: false,
        },
        {
          id: 5,
          otherPeer: 'Albaik',
          amount: 356.9,
          paid: true,
          date: '14/02/20',
          time: '3:56',
          unread: false,
        },
        {
          id: 6,
          otherPeer: 'Mohamed Mansour',
          amount: 27.2,
          paid: false,
          date: '01/01/20',
          time: '11:11',
          unread: false,
        },
        {
          id: 7,
          otherPeer: 'Carrefour',
          amount: 152.75,
          paid: true,
          date: '14/03/20',
          time: '2:18',
          unread: false,
        },
        {
          id: 8,
          otherPeer: 'Albaik',
          amount: 356.9,
          paid: false,
          date: '14/02/20',
          time: '3:56',
          unread: false,
        },
      ],
    };
  }

  componentDidMount() {
    if (
      this.state.data[this.state.data.length - 1].unread === true ||
      this.state.data[0].unread === true
    ) {
      this.setState({headerBackgroundColor: '#ffac1e'});
    }
  }

  renderTransactionItem({item}) {
    if (item.unread === true) {
      return this.renderTransactionItemUnread(item);
    } else {
      return this.renderTransactionItemRead(item);
    }
  }
  renderTransactionItemUnread(item) {
    if (item.unread === true) {
      return (
        <View style={{backgroundColor: '#ffac1e'}}>
          <View style={styles.transactionItem}>
            {item.paid ? (
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
            <View style={{marginLeft: 20, width: '90%'}}>
              <Text style={styles.transactionTitleUnread}>
                {item.amount + ' SR - ' + item.otherPeer}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.transactionDateUnread}>{item.date}</Text>
                <Text style={styles.transactionDateUnread}>{item.time}</Text>
              </View>
            </View>
          </View>
        </View>
      );
    }
  }

  renderTransactionItemRead(item) {
    if (item.unread === false) {
      return (
        <View style={styles.transactionItem}>
          {item.paid ? (
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
          <View style={{marginLeft: 20, width: '90%'}}>
            <Text style={styles.transactionTitleRead}>
              {item.amount + ' SR - ' + item.otherPeer}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.transactionDateRead}>{item.date}</Text>
              <Text style={styles.transactionDateRead}>{item.time}</Text>
            </View>
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{flex: 1, backgroundColor: this.state.headerBackgroundColor}}>
          <Header
            title="Transactions"
            description="Everything you paid or recieved"
          />
        </View>

        <View style={{flex: 3}}>
          <FlatList
            data={this.state.data}
            keyExtractor={({id}) => id}
            bottomDivider={true}
            scrollEnabled={true}
            renderItem={this.renderTransactionItem.bind(this)}
          />
        </View>
        {/* <View>
          <FlatList
            data={this.state.data}
            keyExtractor={({id}) => id}
            bottomDivider={true}
            renderItem={this.renderTransactionItemRead.bind(this)}
          />
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    fontSize: 20,
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

export default NotifsScreen;
