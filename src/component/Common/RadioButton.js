import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const RadioButton = props => {
  const {sortData} = props;
  const [value, setValue] = useState('');
  return (
    <View>
      {sortData.map(res => {
        return (
          <View key={res.key} style={styles.container}>
            <TouchableOpacity
              style={styles.radioCircle}
              onPress={() => {
                setValue(res.key);
              }}>
              {value === res.key && <View style={styles.selectedRb} />}
            </TouchableOpacity>
            <Text style={styles.radioText}>{res.text}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    marginBottom: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 14,
  },
  radioText: {
    fontSize: 16,
    color: '#282c3f',
    fontWeight: '400',
    marginLeft: 7,
  },
  radioCircle: {
    height: 18,
    width: 18,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgb(255, 155, 109)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 25,
    backgroundColor: 'rgb(255, 155, 109)',
  },
});

export default RadioButton;
