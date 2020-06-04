import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import Styled from 'styled-components/native';
import IconButton3 from '~/Components/IconButton3';

import Input from '~/Components/Input';
import Button from '~/Components/Button';
import Tab from '~/Components/Tab';
import { NavigationContainer } from '@react-navigation/native';

import {
  Dimensions,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
} from 'react-native';


const Container = Styled.View`
  flex: 1;
  align-items: center;
`;

const LabelContainer = Styled.View`
  flex-direction: row;  
  background-color: #FFFFFF;
  justify-content: center;
  border: 1px;
`;

const LabelTitle1 = Styled.Text`
  width : 100%;
  font-size: 30px;
  margin-top: 40px;  
  textAlign: center;

`;

const Label = Styled.Text``;

const MeetProgress = () => {
  return (
    <Container>
      <ScrollView>
      <LabelContainer>
        <LabelTitle1>진행중인 모임</LabelTitle1>
      </LabelContainer>
      </ScrollView>
    </Container>
  );
};

export default MeetProgress;