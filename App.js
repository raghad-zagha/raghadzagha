//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Story from './story/Story';
import StoryP from './story/StoryP';

function App() {
  return (
    <div className="app">
      <div className="col-10">
        <div className="body">
          <div className="story-gallary">
            <Story/>
            <StoryP title="raghadz" photo="https://i.pinimg.com/736x/b2/81/28/b28128a0546d0570f2581c452b8cdaf7.jpg"/>
            <StoryP title="haneen" photo="https://th.bing.com/th/id/OIP.jpP1tJ3ckoe-qSsORHmSMQHaJl?rs=1&pid=ImgDetMain"/>
            <StoryP title="raghadsh" photo="https://i.pinimg.com/564x/1a/4d/26/1a4d2676d76ed37d737b8bfedd30ae91.jpg"/>
            <StoryP  title="maha" photo="https://i.pinimg.com/564x/d5/be/6c/d5be6cd9a42e11949351fd1fc54a71a9.jpg"/>
            <StoryP  title="raghads" photo="https://i.pinimg.com/736x/6c/fe/9b/6cfe9b4819cdbd78887be8e601a11954.jpg" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
