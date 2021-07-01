import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Avatar,
  FAB,
  Button,
  Card,
  Input,
  ListItem,
  Text,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.navigation.getParam('user'),
    };
  }

  render() {
    return (
      <ScrollView>
        <Card style={{flex: 1}}>
          <Card.Title>{this.state.user.name}</Card.Title>
          <Card.Divider />
          <Card.Image
            style={styles.userImage}
            source={{uri: 'https://i.pravatar.cc/300'}}
          />
          <Text h5 style={styles.userText}>
            Full Name:
          </Text>
          <Input placeholder="Full Name" value={this.state.user.name} />
          <Text h5 style={styles.userText}>
            Username:
          </Text>
          <Input placeholder="Username" value={this.state.user.username} />
          <Text h5 style={styles.userText}>
            Email:
          </Text>
          <Input placeholder="Email" value={this.state.user.email} />
          <Text h5 style={styles.userText}>
            Address:
          </Text>
          <Input
            placeholder="Address"
            value={`${this.state.user.address.suite}, ${this.state.user.address.street}, ${this.state.user.address.city}, ${this.state.user.address.zipcode}`}
          />
          <Text h5 style={styles.userText}>
            Geo:
          </Text>
          <Input
            placeholder="Geo"
            value={`${this.state.user.address.geo.lat}, ${this.state.user.address.geo.lng}`}
          />
          <Text h5 style={styles.userText}>
            Phone:
          </Text>
          <Input placeholder="Phone" value={this.state.user.phone} />
          <Text h5 style={styles.userText}>
            Website:
          </Text>
          <Input placeholder="Website" value={this.state.user.website} />
          <Text h5 style={styles.userText}>
            Company:
          </Text>
          <Input placeholder="Company" value={this.state.user.company.name} />
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  userImage: {
    borderRadius: 5,
    marginBottom: 10,
    height: 300,
    width: '100%',
  },
  userText: {
    margin: 3,
    marginLeft: 5,
    marginBottom: 1,
    marginTop: 0,
  },
});

export default Details;
