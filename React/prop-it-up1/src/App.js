
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = {"Ricky"} lastName={"Rodriguez-Van Dusen"} age = {33} hairColor={"Brown"}></PersonCard>
      <PersonCard firstName = {"Alex"} lastName={"Rodriguez-Van Dusen"} age = {31} hairColor={"Brown"}></PersonCard>
      <PersonCard firstName = {"Maige, Nallory"} lastName={"Picolet"} age = {40} hairColor={"Brown"}></PersonCard>
      <PersonCard firstName = {"Kathy"} lastName={"Van Dusen"} age = {21} hairColor={"Brown"}></PersonCard>

    </div>
  );
}

export default App;
