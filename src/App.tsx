import React from 'react';

type State = {
  documentMessage: string;
};
export class App extends React.PureComponent<{}, State> {
  state: State = {
    documentMessage: 'Nothing was pressed yet',
  };

  handleDocumentKeypress = (event: KeyboardEvent) => {
    this.setState({
      documentMessage: `The last pressed key is [${event.key}]`,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentKeypress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeypress);
  }

  render(): React.ReactNode {
    const { documentMessage } = this.state;

    return (
      <div className="App">
        <p className="App__message">{documentMessage}</p>
      </div>
    );
  }
}
