import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Text } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  render() {
    return (
      <FlatList
        enableEmptySections
        data={this.props.employees}
        renderItem={({ item }) => <ListItem employee={item}></ListItem>}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; // { shift, 'Monday', name: 'S', id: 'saodjfi'}
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
