import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';

import Date from './Date';

import { deleteExpense } from '../actions';

@connect(undefined, { deleteExpense })
export default class Expense extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteExpense(this.props.id);
  }

  render() {
    const { id, title, description, amount, date } = this.props;
    console.log("gaftus")
    return (
      <tr>
        <td>{title}</td>
        <td>{description}</td>
        <td>{amount}</td>
        <td><Date date={date} /></td>
        <td><Link to={`/edit/${id}`}><Button bsStyle="info">Edit</Button></Link></td>
        <td><Button onClick={this.handleDelete} bsStyle="danger">Delete</Button></td>
      </tr>
    );
  }
}