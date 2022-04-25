import DisplayMenu from './components/DisplayMenu'
import Header from './components/Header'
import { Link, BrowserRouter as Router, Route } from "react-router-dom";


export default function Menu () {
      
      const lang = window.location.pathname.slice(-2);
      return (
        <header className="App-header mx-2 container-desktop">

          <Header parentToChild={lang}/>

          <img src="../mrbite-250.png" class="img-fluid mb-3" alt="logo" />

          <div class="col-12">
            <DisplayMenu menu="appetizer" isMultiPrice="false"/>
          </div>
          <div class="col-12">
            <DisplayMenu menu="chicken" isMultiPrice="false"/>
          </div>
          <div class="col-12">
            <DisplayMenu menu="beef" isMultiPrice="false"/>
          </div>
          <div class="col-12">
            <DisplayMenu menu="burger" isMultiPrice="false"/>
          </div>
          <div class="col-12">
            <DisplayMenu menu="bbq" isMultiPrice="true"/>
          </div>
          <div class="col-12">
            <DisplayMenu menu="salad" isMultiPrice="false"/>
          </div>
          <div class="col-12">
            <DisplayMenu menu="veggie" isMultiPrice="false"/>
          </div>
          <div class="col-12">
            <DisplayMenu menu="beverage" isMultiPrice="false"/>
          </div>
          
          
          
          
          
        </header>
      );
    }