import React, { Component } from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';

@connect(mapStateToProps)
export default class Edit extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    console.log(this.props.expenseId)
    return (
      <div className="App">
        <h1>Edit product</h1>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    expenseId: ownProps.match.params.id
  };
}