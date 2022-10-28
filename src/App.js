import logo from './logo.svg';
import './App.css';
import Side_Bar from './Component/Sild_Bar/Side_Bar';
import Top_Bar from './Component/Top_Bar/Top_Bar';
import Match_mini_barr from './Component/Match_mini_barr/Match_mini_barr';
import Match_mini_bar from './Component/Match_mini_bar/Match_mini_bar';
import Matches_body from './Component/Matches_body/Matches_body';
import League_Bar from './Component/League_Bar/League_Bar';
import Display_Bar from './Component/Display_Bar/Display_Bar';
function App() {
  return (
    <div className="App">
     <Top_Bar/>
     <Side_Bar/>
     <Display_Bar/>
     <League_Bar/>
     <Matches_body/>
     <Match_mini_bar/>
     <Match_mini_barr/>
    </div>
  );
}

export default App;
