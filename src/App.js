import React from "react";
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';
import OrderingContainer from './components/ordering/containers/OrderingContainer.jsx'

class App extends React.Component {
  render() {
    return (
      <>
        <OrderingContainer />
      </>
    );
  }
}

export default hot(App);
