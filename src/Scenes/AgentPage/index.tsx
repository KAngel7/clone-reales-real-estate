import * as React from 'react';
import './style.css';
import Dashboard from 'Components/DashboardLayout';
import { RouteComponentProps } from 'react-router-dom';
import SearchAgentForm from './Components/SearchAgentForm';
import MyAgent from './Components/MyAgent';

class AgentPage extends React.Component<RouteComponentProps<{action: string}>, {}> {
  AgentPageAction: {
    findAgent: JSX.Element;
    myAgent: JSX.Element;
    notFound: JSX.Element;
  };
  constructor() {
    super();
    this.AgentPageAction = {
      findAgent: <SearchAgentForm />,
      myAgent: <MyAgent />,
      notFound: <h2>Agent's action not found !</h2>
    };
  }
  matchSection = () => {
    const section = this.props.match.params.action;
    switch (section) {
      case 'myagents':
        return this.AgentPageAction.myAgent;
      case 'search':
        return this.AgentPageAction.findAgent;
      default:
        return this.AgentPageAction.notFound;
    }
  }
  render() {
    return (
      <div className="AgentPage">
        <Dashboard >
          <div className="agentWrapper">
            {this.matchSection()}
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default AgentPage;