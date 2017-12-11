'use strict';
import React, { Component } from "react";
import { StatusBar,StyleSheet,Image } from "react-native";
import Profile from './Profile.js';
import {Search} from './Search';
import {Noti} from './Notify';
import {FooterBottom} from './FooterBottom';
import {
  Button,
  Text,
  Item,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  FooterTab,
  Icon,
  Right,
} from "native-base";

export default class HomeScreen extends React.Component {


  render() {



    return (

      <Container>
        <Header style={{marginTop:StatusBar.currentHeight}}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
        <Image
        style={{
          height : 50,
          width : 50,
          borderRadius: 50,

        }} source={{uri: 'https://yt3.ggpht.com/-GaXvBkENq1c/AAAAAAAAAAI/AAAAAAAAAAA/uigA1OMOrtM/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'}}/>
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>

        <FooterTab>

           <Button active>
             <Icon active name="home" />
           </Button>
           <Button>
             <Icon name="search" />
           </Button>
           <Button>
             <Icon name="notifications" />
           </Button>
           <Button>
             <Icon name="md-mail" />
           </Button>
         </FooterTab>

        </Content>
        <Item>
               <Text style={{color: 'black', fontWeight: 'bold',fontSize: 20, alignItems:'stretch'}}>
                   Homescreen
                   </Text>
             </Item>


        <FooterBottom/>
      </Container>
    );
  }
}
