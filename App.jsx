import './App.css'
import ClockTime from './components/ClockTime';
import ClockHeading from './components/ClockHeading';
import ClockSlogan from './components/ClockSlogan';

function App() {
  return(
    <center className="App">
        <ClockHeading></ClockHeading>
        <ClockSlogan></ClockSlogan>
        <ClockTime></ClockTime>
    </center>
  )
}

export default App
