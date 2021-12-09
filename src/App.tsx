import React from 'react';
import Button from '@mui/material/Button';
import Header from './header';
import RoomList from './room_list';
import { ThemeProvider } from '@mui/material/styles';
import color from './color'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={color}>
        <Header/>
        <RoomList />
      </ThemeProvider>
    </div>
  );
}

export default App;
