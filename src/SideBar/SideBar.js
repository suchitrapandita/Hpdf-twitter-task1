import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {FooterBottom} from '../HomeScreen/FooterBottom';
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
const routes = ["Home", "Search","Profile" , "List", "Highlights","Moments"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content style={{marginTop:StatusBar.currentHeight, padding:20}}>
          <Image circle
            source={{
              uri: "https://yt3.ggpht.com/-GaXvBkENq1c/AAAAAAAAAAI/AAAAAAAAAAA/uigA1OMOrtM/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
            }}
            style={{
              height : 50,
              width : 50,
              alignSelf: "stretch",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center"
            }}
          />
          <Text style={{color: 'black', fontWeight: 'bold',fontSize: 20}}>
           Ranjani Mudaliar
         </Text>
         <Text style={{color: 'black'}}>
          @ranjaniMudaliar
        </Text>
        <Text>
        <Text style={{fontWeight: 'bold'}}>
        855
        {' '}
        <Text style={{color: 'black'}}>
          Followers
        </Text>
      </Text>
      {' '}
      <Text style={{fontWeight: 'bold'}}>
         268
         {' '}
        <Text style={{color: 'black'}}>
          Following
        </Text>
      </Text>
      </Text>

          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
          <FooterBottom/>
      </Container>
    );
  }
}
