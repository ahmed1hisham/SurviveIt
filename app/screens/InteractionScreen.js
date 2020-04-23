import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Button, Image } from 'react-native';
import { Header } from '../components/Header';
import { TextInput } from '../components/Input';
import { CommonButton } from '../components/Button';
import * as Progress from 'react-native-progress';
const { width } = Dimensions.get('screen')

const data = [{ date: '14/02/20', time: '2:18', percentage: 0.4 }, { date: '15/02/20', time: '6:18', percentage: 0.9 }]
class InteractionScreen extends React.Component {
  renderTransactionItem({ item }) {
    return (
      <View style={{ marginTop: 20 }}>
        <View style={styles.interactionHistoryHeader}>
          <Text style={styles.interactionHistoryItemTitle}>{item.date}</Text>
          <Text style={styles.interactionHistoryItemTitle}>{item.time}</Text>

        </View>
        <Progress.Bar progress={item.percentage} width={width * 0.85} height={15} borderRadius={30} color={'#fdc82b'} unfilledColor="rgba(0,0,0,0.2)" borderColor="rgba(0,0,0,0.2)" />
        <View style={styles.interactionLevelView}>
          <View style={styles.interactionLevel}>
            <View style={{ width: 10, height: 10, borderRadius: 20, backgroundColor: '#fdc82b' }}>
            </View>
            <Text style={{ marginLeft: 5, }}>Interaction level</Text>
          </View>
          <Text>{item.percentage * 100}%</Text>
        </View>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Header title={'Cross-pathing'} description={'All about your interaction with patients'} />
        <View style={styles.dataConatiner}>
          <View style={styles.currentStatusView}>
            <Text style={styles.titleStyle}>Current Status</Text>
            <View style={styles.dataView}>
              <Text style={styles.smallTitleStyle}>interaction Severity</Text>
              <Progress.Bar progress={0.3} width={width * 0.85} height={15} borderRadius={30} color={'#fdc82b'} unfilledColor="rgba(0,0,0,0.2)" borderColor="rgba(0,0,0,0.2)" />
              <View style={styles.interactionLevelView}>
                <View style={styles.interactionLevel}>
                  <View style={{ width: 10, height: 10, borderRadius: 20, backgroundColor: '#fdc82b' }}>
                  </View>
                  <Text style={{ marginLeft: 5, }}>Interaction level</Text>
                </View>
                <Text>30%</Text>
              </View>
            </View>
            <View style={styles.dataView}>
              <Text style={styles.smallTitleStyle}>interaction Date</Text>
              <Text style={styles.titleStyle}>24/04/20</Text>
            </View>
            <View style={styles.dataView}>
              <Text style={styles.smallTitleStyle}>interaction Timing</Text>
              <Text style={styles.titleStyle}>13:02</Text>
            </View>
          </View>
          <View style={styles.InteractionHistoryView}>
            <Text style={styles.titleStyle}>Interaction history</Text>
            <FlatList
              data={data}
              keyExtractor={({ index }) => index}
              renderItem={this.renderTransactionItem.bind(this)}
            />
          </View>
        </View>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  dataConatiner: {
    marginTop: 30,
  },
  currentStatusView: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    marginRight: 10,
    backgroundColor: 'rgba(45, 119, 225, 0.3)', // #fdc82b 45 119 255 #fdc82b
    padding: 20,
    paddingLeft: 30
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 31,
  },
  smallTitleStyle: {
    color: 'rgba(45, 119, 225, 0.7)',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5
  },
  dataView: {
    marginTop: 10
  },
  interactionLevelView: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 2
  },
  interactionHistoryHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2
  },
  interactionLevel: {
    flexDirection: 'row', alignItems: 'center',
  },
  InteractionHistoryView: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    marginRight: 10,
    backgroundColor: 'white',
    padding: 20,
    paddingLeft: 30,
    marginTop: 20
  },
  interactionHistoryItemTitle: {
    color: 'rgba(45, 119, 225, 0.7)',
    fontSize: 14,
    fontWeight: 'bold',
  }
})


export default (InteractionScreen);