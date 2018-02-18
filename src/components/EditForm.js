import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Row  from 'react-bootstrap/lib/Row';
import Col  from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

import { updateExpense } from '../actions';

@connect(undefined, { updateExpense })
export default class EditForm extends Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);

    this.state = {
      title: props.title,
      description: '',
      amount: '',
      date: ''
    };
  }

//   componentWillMount() {
//     this.setState({ title: this.props.title });
//   }

  componentWillReceiveProps(nextProps) {
      //console.log(nextProps.current)
      if (nextProps.id !== this.props.id) {
        this.setState({ title: nextProps.title, description: nextProps.description, amount: nextProps.amount, date: nextProps.date });
        console.log("hey");
      }
  }

  handleEdit() {
    const expense = {
        title: this.state.title,
        description: this.state.description,
        amount: this.state.amount,
        date: this.state.date,
    };

    this.props.updateExpense(this.props.id, expense);
  }

  handleChangeTitle(e) {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  handleChangeDescription(e) {
    e.preventDefault();
    this.setState({ description: e.target.value });
  }

  handleChangeAmount(e) {
    e.preventDefault();
    this.setState({ amount: e.target.value });
  }

  handleChangeDate(e) {
    e.preventDefault();
    this.setState({ date: e.target.value });
  }

  render() {
      console.log(this.props.title)
      //console.log(this.state.title)
    return (
      <div className="Add">
        <Row className="show-grid">
          <Col xs={12} sm={12} md={12} lg={12}>
            <div>{this.state.title}</div>
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
          <Link to="/"><Button onClick={this.handleEdit} bsStyle="success">Edit</Button></Link>
        </form>
      </div>
    );
  }
}



// import React from 'react';

// const EditForm = props => {
//     return (
//             <div>
//                 <h1>{props.title}</h1>
//                 <p>{props.description}</p>
//             </div>
//     );
// }

// export default EditForm;