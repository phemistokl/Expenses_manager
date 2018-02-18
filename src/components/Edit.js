import React, { Component } from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';

import EditForm from './EditForm';

import { currentExpense, updateExpense } from '../actions';

@connect(mapStateToProps, { currentExpense, updateExpense })
export default class Edit extends Component {
  constructor(props) {
    super(props);
    
  }

  componentWillMount() {
    const { expenseId } = this.props;

    this.props.currentExpense(expenseId);
    console.log("componentWillMount")
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.current !== this.props.current;
  // }

  // componentWillReceiveProps(nextProps) {
  //   //console.log(nextProps.current)
  //   if (nextProps.current !== this.props.current) {
  //     this.props.currentExpense(this.props.expenseId);
  //     console.log("hey");
  //   }
  // }

  render() {
    const { current } = this.props;
    //console.log("Render")
    console.log(current)
    return (
      <div className="App">
        <h1>Edit product</h1>
        <EditForm {...current} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    current: state.expenses.current[0],
    expenseId: ownProps.match.params.id
  };
}