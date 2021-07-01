import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {FAB, Card, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {addNewUser, getUserList} from '../actions';
import Geolocation from '@react-native-community/geolocation';
import {defineAnimation} from 'react-native-reanimated';

Icon.loadFont();

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      name: '',
      username: '',
      email: '',
      lat: '',
      lng: '',
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(info => {
      this.setState({lat: info.coords.latitude, lng: info.coords.longitude});
    });
  }

  render() {
    return (
      <ScrollView>
        <Card style={{flex: 1}}>
          <Card.Title>{this.state.name}</Card.Title>
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
          <Input placeholder="Address" value={this.state.user.address} />
          <Text h5 style={styles.userText}>
            Geo (latitude, longitude):
          </Text>
          <Input
            placeholder="Geo"
            value={`${this.state.lat}, ${this.state.lng}`}
            disabled={true}
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
          <Input placeholder="Company" value={this.state.user.company} />
        </Card>
        <FAB
          style={{paddingTop: 10}}
          title="Save"
          size="large"
          onPress={() => this.props.addNewUser(this.state.user)}
        />
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

export default AddUser;

// const mapStateToProps = state => {
//   return {
//     users: state.users.users,
//     isFetching: state.users.isFetching,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     getUserList: () => dispatch(getUserList()),
//     addNewUser: data => dispatch(addNewUser(data)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
