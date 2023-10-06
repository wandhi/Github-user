import React from 'react';

class ResultText extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      // Simpan data ke localStorage
      localStorage.setItem(`${this.props.user}_tasksCompleted`, this.props.tasksCompleted);
      localStorage.setItem(`${this.props.user}_totalTasks`, this.props.totalTasks);
    }
  }

  render() {
    return (
      <div className="mt-4">
        <h2>Result Text</h2>
        <p>Tasks Completed: {this.props.tasksCompleted}</p>
        <p>Tasks Not Completed: {this.props.totalTasks - this.props.tasksCompleted}</p>
        <p>Additional Text or Data Here...</p>
      </div>
    );
  }
}

export default ResultText;
