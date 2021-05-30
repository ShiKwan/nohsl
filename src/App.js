import { createRef, useRef, Fragment } from 'react';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Sponsor from './Sponsor';
import Contact from './Contact';
import FieldCondition from './FieldCondition';
import './App.css';
import Navigation from './Navigation';
import TeamSnap from './TeamSnap';
import Teams from './Teams';
import Footer from './Footer';

function App() {
  const contextRef = createRef();
  const gameScheduleScrollRef = useRef(null);
  const fieldConditionScrollRef = useRef(null);
  const contactScrollRef = useRef(null);
  const missionScrollRef = useRef(null);
  const scrollRef = useRef(null);
  const scrollRef2 = useRef(null);

  const gameScheduleExecuteScroll = () => {
    console.log(gameScheduleScrollRef);
    if(gameScheduleScrollRef && gameScheduleScrollRef.current){
      gameScheduleScrollRef.current.scrollIntoView()
    }
  };

  const fieldConditionExecuteScroll = () => {
    console.log(fieldConditionScrollRef);
    if(fieldConditionScrollRef && fieldConditionScrollRef.current){
      fieldConditionScrollRef.current.scrollIntoView()
    }
  };

  const executeScroll = () => {
    console.log(scrollRef);
    if(scrollRef && scrollRef.current){
      scrollRef.current.scrollIntoView()
    }
  };

  const executeScroll2 = () => {
    console.log(scrollRef2);
    if(scrollRef2 && scrollRef2.current){
      scrollRef2.current.scrollIntoView()
    }
  };

  const executeMissionScroll = () => {
    console.log(missionScrollRef);
    if(missionScrollRef && missionScrollRef.current){
      missionScrollRef.current.scrollIntoView()
    }
  };

  const contactExecuteScroll = () => {
    console.log(contactScrollRef);
    if(contactScrollRef && contactScrollRef.current){
      contactScrollRef.current.scrollIntoView()
    }
  };

  return (
    <div ref={contextRef}>
      <Header />
      <Navigation 
        contextRef={contextRef} 
        executeSponsorScroll ={executeScroll} 
        executeTeamsScroll = {executeScroll2}
        executeGameScheduleScroll = {gameScheduleExecuteScroll}
        executeFieldConditionScroll = { fieldConditionExecuteScroll}
        executeContactScroll = { contactExecuteScroll}
        executeMissionScroll= {executeMissionScroll}
      />
      <div className="AppContainer">
        
        <Jumbotron missionRef={missionScrollRef}/>
        <FieldCondition fieldConditionRef={fieldConditionScrollRef} />
        <Teams teamsRef={gameScheduleScrollRef}/>
        <TeamSnap teamRef={scrollRef2} />
        <Sponsor sponsorRef={scrollRef} />
        <Contact contactRef={contactScrollRef}/>
        <Footer />
      </div>
    </div>
    
  );
}

export default App;
