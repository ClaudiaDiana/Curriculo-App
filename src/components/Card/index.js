/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import style from './style';
const Card = ({tiulo, children}) => {
  return (
    <View style={style.card_container}>
      <View style={style.card}>
        <View style={style.card_header}>
          <Text>{tiulo}</Text>
        </View>
        <View style={style.card_content}>{children}</View>
      </View>
    </View>
  );
};

export default Card;
