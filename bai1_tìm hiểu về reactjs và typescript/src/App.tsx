import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators,State } from './components/redux/state';

function App() {
  const dispatch = useDispatch();
  const {increaseNumber, reduceNumber,reset} = bindActionCreators(actionCreators,dispatch);
  const count = useSelector((state: State) => state.counter)
  return (
    <div className='App'>
      <h1>{count}</h1>
      <button onClick={() => increaseNumber(1)}>Increase</button>
      <button onClick={() => reduceNumber(1)}>Reduce</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default App;
