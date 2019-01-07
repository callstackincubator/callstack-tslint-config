import React from 'react';

function Body() {
  return <span>Hello World</span>;
}

type Props = {
  children: string;
};

type State = {
  message: string;
};

export default class MyComponent extends React.Component<Props, State> {
  state: State = {
    message: '',
  };

  onClick = () => {
    this.setState({ message: 'Goodbye world' });
  };

  render() {
    return (
      <>
        <Body />
        <div>{this.state.message}</div>
        <button onClick={this.onClick}>Press me</button>
      </>
    );
  }
}

export class MyClass {
  readonly property1: boolean = true;

  readonly children: MyClass[] = [];

  private property2?: string;

  logProperty(times: number = 1) {
    this.assignProperty([{ message: 'hey' }]);
    for (let i = 0; i < times; i += 1) {
      // tslint:disable-next-line: no-console
      console.log(this.property2);
    }
  }

  private assignProperty(msgs: Array<{ message: string }>) {
    this.property2 = msgs
      .map(({ message }: { message: string }) => message)
      .join('');
  }
}
