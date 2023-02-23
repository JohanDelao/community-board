import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

import Heat from './assets/netsvsheat.jpg';
import Knicks from './assets/netsvknicks.jpg';
import Sixers from './assets/netsvs76ers.jpg';
import Bulls from './assets/netsvsbulls.jpg';
import Suns from './assets/netsvssuns.jpg';
import Clippers from './assets/netsvsclippers.jpg';
import Wizards from './assets/netsvswizards.jpg';
import Celtics from './assets/netsvsceltics.jpg';
import Lakers from './assets/netsvslakers.jpg';
import Knicks2 from './assets/netsvsknicks2.jpg';


function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='inner'>
        <Card image={Heat} away={"Heat"} home={"Nets"} awayScore={105} homeScore={116} won={'won'} link={'https://www.espn.com/nba/boxscore/_/gameId/401469033'} />
        <Card image={Knicks} away={"Nets"} home={"Knicks"} awayScore={106} homeScore={124} won={'lost'} link={'https://www.espn.com/nba/boxscore/_/gameId/401469017'}  />
        <Card image={Sixers} away={"76ers"} home={"Nets"} awayScore={101} homeScore={98} won={'lost'} link={'https://www.espn.com/nba/boxscore/_/gameId/401469001'} />
        <Card image={Bulls} away={"Bulls"} home={"Nets"} awayScore={105} homeScore={116} won={'won'} link={'https://www.espn.com/nba/boxscore/_/gameId/401468988'}  />
        <Card image={Suns} away={"Suns"} home={"Nets"} awayScore={116} homeScore={112} won={'lost'} link={'https://www.espn.com/nba/boxscore/_/gameId/401468972'} />
        <Card image={Clippers} away={"Clippers"} home={"Nets"} awayScore={124} homeScore={116} won={'lost'} link={'https://www.espn.com/nba/boxscore/_/gameId/401468965'} />
        <Card image={Wizards} away={"Wizards"} home={"Nets"} awayScore={123} homeScore={125} won={'won'} link={'https://www.espn.com/nba/boxscore/_/gameId/401468948'} />
        <Card image={Celtics} away={"Nets"} home={"Celtics"} awayScore={96} homeScore={139} won={'lost'} link={'https://www.espn.com/nba/boxscore/_/gameId/401468927'}  />
        <Card image={Lakers} away={"Lakers"} home={"Nets"} awayScore={104} homeScore={121} won={'won'} link={'https://www.espn.com/nba/boxscore/_/gameId/401468912'} />
        <Card image={Knicks2} away={"Knicks"} home={"Nets"} awayScore={115} homeScore={122} won={'won'} link={'https://www.espn.com/nba/boxscore/_/gameId/401468897'} />
      </div>
    </div>
  )
}

export default App
