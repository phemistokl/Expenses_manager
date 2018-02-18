import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Row  from 'react-bootstrap/lib/Row';
import Col  from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';
import './App.css';

import Expense from './Expense';

@connect(mapStateToProps)
export default class ExpensesBox extends Component {
  constructor(props) {
    super(props);

    // this.state ={
    //   expenses: []
    // };
  }

  render() {
    console.log(this.props)
    return (
      <div className="ExpensesBox">
        <Row className="show-grid">
          <Col xs={12} sm={12} md={12} lg={12}>
            <h1>List of expenses</h1>
            <Link to="/add"><Button bsStyle="primary">Add</Button></Link>
          </Col>
        </Row>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.expenses.map(expense => 
                <Expense key={expense.id} {...expense} />
              )
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    expenses: state.expenses.expenses
  };
}