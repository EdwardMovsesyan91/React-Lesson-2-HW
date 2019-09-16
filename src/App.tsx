import React from 'react';
import './App.css';
import { Image } from './components/class/index'
import { MyHeader } from './components/header'
import { MyFooter } from './components/footer/index'


const App: React.FC = () => {
  const layoutStyle: any = {
    border: '2px solid black', backgroundColor: "white", textAlign: 'center', margin: 'auto', width: '550px'
  }
  const topHeader: any = {
    backgroundColor: "white", textAlign: 'center', margin: '35px', fontSize: '35px'
  }

  return (<div>

    <div style={topHeader}>React Lesson 2 Home Work</div>

    <div style={layoutStyle}>
      <MyHeader />
      <Image rc={require('./images/1.jpg')} />
      <Image src={require('./images/2.jpg')} />
      <Image rc={require('./images/3.jpg')} />
      <Image src={require('./images/4.jpg')} />
      <Image src={require('./images/5.jpg')} />
      <MyFooter />
    </div>

  </div>
  );
}

export default App;
