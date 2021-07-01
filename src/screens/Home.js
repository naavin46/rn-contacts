import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar, FAB, ListItem, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {getUserList} from '../actions';
Icon.loadFont();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    this.props.getUserList();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.users !== state.users) {
      return {
        users: props.users,
        isLoading: props.isFetching,
      };
    }

    return null;
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <FlatList
            data={this.state.users}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Details', {user: item})
                }>
                <ListItem bottomDivider>
                  <Avatar source={{uri: 'https://i.pravatar.cc/300'}} />
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <FAB
          icon={<Icon name="add" size={20} color="white" />}
          placement="right"
          size="large"
          onPress={() => this.props.navigation.navigate('New')}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    margin: 10,
    paddingTop: 10,
  },
  item: {
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 4,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});

const mapStateToProps = state => {
  return {
    users: state.users.users,
    isFetching: state.users.isFetching,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserList: () => dispatch(getUserList),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
