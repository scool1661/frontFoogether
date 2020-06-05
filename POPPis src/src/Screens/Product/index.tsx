import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LabelContainer = Styled.View`
  flex-direction: row;
`;

const ProfileItem = Styled.View`
  flex: 1;
  align-items: center;
`;

import Input from '~/Components/Input';
import IconButton from '~/Components/IconButton';
import Tab from '~/Components/Tab';

const Label = Styled.Text``;

const mainProduct = () => {
  return (
    <Container>
      <Label>This is Product</Label>
      
      <LabelContainer>
          <ProfileItem>
          <IconButton iconName="camera" />
          </ProfileItem>
          <ProfileItem>
          <IconButton iconName="live" />
          </ProfileItem>
          <ProfileItem>
         <IconButton iconName="camera" />
          </ProfileItem>
        </LabelContainer>

    </Container>
  );
};

export default mainProduct;