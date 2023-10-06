import React from 'react';

class InputForm extends React.Component {
  state = {
    qaName: '',
    currentDay: 1,
    totalTasks: '',
    tasksCompleted: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.currentDay < 5) {
      this.props.onSubmit(this.state);
      this.setState({
        currentDay: this.state.currentDay + 1,
        totalTasks: '',
        tasksCompleted: '',
      });
    }
  };

  handleShowResult = () => {
   
    this.props.onShowResult();
  };

  render() {
    return (
      <form className="mt-4" onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nama QA:</label>
          <input
            type="text"
            className="form-control"
            name="qaName"
            value={this.state.qaName}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Hari ke-{this.state.currentDay}:</label>
          <input
            type="text"
            className="form-control"
            value={`Hari ${this.state.currentDay}`}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Total Task:</label>
          <input
            type="number"
            className="form-control"
            name="totalTasks"
            value={this.state.totalTasks}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tasks Completed:</label>
          <input
            type="number"
            className="form-control"
            name="tasksCompleted"
            value={this.state.tasksCompleted}
            onChange={this.handleChange}
          />
        </div>
        {this.state.currentDay < 5 ? (
          <button type="submit" className="btn btn-primary">Submit</button>
        ) : (
          <button type="button" onClick={this.handleShowResult} className="btn btn-primary">Tampilkan Hasil</button>
        )}
      </form>
    );
  }
}

export default InputForm;
