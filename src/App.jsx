import React from 'react';
import InputForm from './components/InputForm';
import ResultText from './components/ResultText';

class App extends React.Component {
  state = {
    qas: [],
    currentQAIndex: null,
    showResult: false,
    currentUser: null, // Menyimpan nama pengguna yang aktif
  };

  componentDidMount() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.setState({ currentUser: savedUser });
    }
  }

  handleFormSubmit = (formData) => {
    const { qas, currentUser } = this.state;
    const newQA = { ...formData, id: qas.length + 1, user: currentUser };
    this.setState({ qas: [...qas, newQA] });
  };

  handleShowResult = () => {
    
    this.setState({ showResult: true,currentQAIndex:1 });
  };

  handleAddNewQA = () => {
    this.setState({ currentQAIndex: null, showResult: false });
  };

  handleSelectQA = (index) => {
    this.setState({ currentQAIndex: index });
  };

  handleSetCurrentUser = (user) => {
    this.setState({ currentUser: user });
    localStorage.setItem('currentUser', user);
  };

  render() {
    const { qas, currentQAIndex, showResult, currentUser } = this.state;
    const currentQA = qas[currentQAIndex];

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            {currentUser ? (
              <div>
                {showResult && currentQA ? (
                  <ResultText
                    tasksCompleted={currentQA.tasksCompleted}
                    totalTasks={currentQA.totalTasks}
                    user={currentQA.user}
                  />
                ) : (
                  <InputForm
                    onSubmit={this.handleFormSubmit}
                    onShowResult={this.handleShowResult}
                    onSelectQA={this.handleSelectQA}
                  />
                )}
                {currentQA && !showResult && (
                  <div className="mt-4">
                    <h3>Current QA: {currentQA.qaName}</h3>
                    <h3>Day: {currentQA.currentDay}</h3>
                    <h3>Tasks Completed: {currentQA.tasksCompleted}</h3>
                    <h3>Tasks Not Completed: {currentQA.totalTasks - currentQA.tasksCompleted}</h3>
                    {currentQA.currentDay < 5 && (
                      <button onClick={this.handleShowResult} className="btn btn-primary">Show Result</button>
                    )}
                  </div>
                )}
                {showResult && <button onClick={this.handleAddNewQA} className="btn btn-primary mt-4">Add New QA</button>}
              </div>
            ) : (
              <div>
                <h2>Select User</h2>
                <button onClick={() => this.handleSetCurrentUser('User1')} className="btn btn-primary mr-2">User 1</button>
                <button onClick={() => this.handleSetCurrentUser('User2')} className="btn btn-primary">User 2</button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
