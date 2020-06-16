import React from 'react';
import Styled from 'styled-components/native';
import Input from '~/Components/Input';
import Button from '~/Components/Button';
import {StackNavigationProp} from '@react-navigation/stack';

const Container = Styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const LabelContainer = Styled.View`
  left: 20px;
  top: 50px;
  border-color: #ff0000;
  margin-bottom: 16px;
`;

const InputContainer = Styled.View`
  top: 80px;
  margin-left: 20px;
  margin-right: 20px;
`;

const ButtonContainer = Styled.View`
<<<<<<< HEAD
=======
  top: 100px;
>>>>>>> 97c51aa5fc43f4f10bb9a75577064b9398f518c4
  align-items: center;
`;

const LabelTitle = Styled.Text`
  font-size: 25px;
  left: 15px;
`;

const Label = Styled.Text`
  font-size: 15px;
  left: 15px;
`;

type NavigationProp = StackNavigationProp<ProfileTabParamList, 'Profile'>

interface Props {
    navigation: NavigationProp;
}

const Withdrawal = ({navigation}: Props) => {

   return (
       <Container>
           <LabelContainer>
               <LabelTitle>비밀번호 확인</LabelTitle>
           </LabelContainer>
           <LabelContainer>
               <Label>본인 확인을 위해 비밀번호를 입력해 주세요</Label>
           </LabelContainer>
           <InputContainer>
           <Input
                style={{marginBottom: 16}}
                placeholder="비밀번호 입력"
                secureTextEntry={true}
            />
            </InputContainer>
            <ButtonContainer>
            <Button
                label="다음"
<<<<<<< HEAD
                style={{width: 150, height: 45, marginTop: 100}}                
=======
                style={{width: 150, height: 45}}                
>>>>>>> 97c51aa5fc43f4f10bb9a75577064b9398f518c4
                onPress={() => {navigation.navigate('DetailWd');}}
            />
            </ButtonContainer>
       </Container>
   ) 
}

export default Withdrawal;