// src/components/StatefulHello.tsx
import './NavBar.css';
import * as React from "react";
import Fungi from './Fungi2.png';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}

class NavBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
  }

  onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

  render() {
    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="navbar">
        <div className="leftSide">
        <img className="fungiLogo" src={Fungi} alt="" />
        </div>
        <div className="rightSide">
        <div className="loginSignUpLink">
          SignUp/Login
        </div>
        </div>
      </div>
    );
  }

  updateEnthusiasm(currentEnthusiasm: number) {
    if(currentEnthusiasm > 0){
        this.setState({ currentEnthusiasm });
    }
  }
}

export default NavBar;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
