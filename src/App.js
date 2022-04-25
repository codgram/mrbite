import logo from './logo.svg';
import './App.css';
import { Today } from '@mui/icons-material';

function App() {

  const d = new Date();
  let day = d.getDay(); // 0-6
  let dayStr;

  if(day === 0){
    dayStr = "Sunday";
  }
  else if(day === 1){
    dayStr = "Monday";
  }
  else if(day === 2){
    dayStr = "Tuesday";
  }
  else if(day === 3){
    dayStr = "Wednesday";
  }
  else if(day === 4){
    dayStr = "Thursday";
  }
  else if(day === 5){
    dayStr = "Friday";
  }
  else if(day === 6){
    dayStr = "Saturday";
  }
  console.log(dayStr);
  

  return (
    <div className="App">
      <header className="App-header">
        <img src="mrbite-nobg.png" class="img-fluid" alt="logo" />
        <p class="fs-4 mt-4">
          Welcom to <strong class="resto-name">Mr. Bite</strong>
        </p>
        <div class="d-flex justify-content-between">
          <div class="col mx-2">
            <a href="https://instagram.com/mrbite.evn" target="_blank"><i class="bi bi-instagram social-icon color-insta"></i></a>
          </div>
          <div class="col mx-2">
          <a href="https://facebook.com/mrbite.evn" target="_blank"><i class="bi bi-facebook social-icon color-fb"></i></a>
          </div>
        </div>
      </header>
      <div class="container d-grid gap-2 mt-3 mx-auto">
        <a type="button" class="btn btn-outline-bite" href="/menu/en">
          <strong>Menu</strong>
        </a>
        <div class="text-center">
          <img src="delivery-nobg.png" class="img-fluid" alt="logo" />
        </div>
      </div>
      
    </div>
  );
}

export default App;
