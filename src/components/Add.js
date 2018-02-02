import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Row  from 'react-bootstrap/lib/Row';
import Col  from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

import { addExpense } from '../actions';

@connect(undefined, { addExpense })
export default class Add extends Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);

    this.state = {
      title: '',
      description: '',
      amount: '',
      date: ''
    };
  }

  handleAdd() {
    const expense = {
        title: this.state.title,
        description: this.state.description,
        amount: this.state.amount,
        date: this.state.date,
    };

    this.props.addExpense(expense);
  }

  handleChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleChangeDescription(e) {
    this.setState({ description: e.target.value });
  }

  handleChangeAmount(e) {
    this.setState({ amount: e.target.value });
  }

  handleChangeDate(e) {
    this.setState({ date: e.target.value });
  }

  render() {
    return (
      <div className="Add">
        <Row className="show-grid">
          <Col xs={12} sm={12} md={12} lg={12}>
            <h1>Add expense</h1>
          </Col>
        </Row>
        <form>
          <FormGroup controlId="formBasicTitle">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              value={this.state.title}
              placeholder="Title"
              onChange={this.handleChangeTitle}
            />
          </FormGroup>
          <FormGroup controlId="formControlsDescription">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              componentClass="textarea" 
              placeholder="Description" 
              value={this.state.description}
              onChange={this.handleChangeDescription}
            />
          </FormGroup>
          <FormGroup controlId="formBasicAmount">
            <ControlLabel>Amount</ControlLabel>
            <FormControl
              type="number"
              value={this.state.amount}
              placeholder="Amount"
              onChange={this.handleChangeAmount}
            />
          </FormGroup>
          <FormGroup controlId="formBasicDate">
            <ControlLabel>Date</ControlLabel>
            <FormControl
              type="date"
              value={this.state.date}
              onChange={this.handleChangeDate}
            />
          </FormGroup>
          <Link to="/"><Button onClick={this.handleAdd} bsStyle="success">Add</Button></Link>
        </form>
      </div>
    );
  }
}