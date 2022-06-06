import AppetizerMenu from '../menu/appetizer.json';
import BBQMenu from '../menu/bbq.json';
import BeefMenu from '../menu/beef.json';
import BeverageMenu from '../menu/beverage.json';
import BurgerMenu from '../menu/burger.json';
import ChickenMenu from '../menu/chicken.json';
import SaladMenu from '../menu/salad.json';
import SweetMenu from '../menu/sweet.json';
import VeggieMenu from '../menu/veggie.json';
import PlatterMenu from '../menu/platter.json';

function DisplayMenu({menu, isMultiPrice}){

  const Category = menu;
  const CategoryIcon = "../icons/" + menu + ".png";
  console.log(isMultiPrice)
  let MenuJSON;

  if(menu === 'appetizer'){
    MenuJSON = AppetizerMenu;
  }
  if(menu === 'bbq'){
    MenuJSON = BBQMenu;
  }
  else if(menu === 'beef'){
    MenuJSON = BeefMenu;
  }
  else if(menu === 'beverage'){
    MenuJSON = BeverageMenu;
  }
  else if(menu === 'burger'){
    MenuJSON = BurgerMenu;
  }
  else if(menu === 'chicken'){
    MenuJSON = ChickenMenu;
  }
  else if(menu === 'platter'){
    MenuJSON = PlatterMenu;
  }
  else if(menu === 'salad'){
    MenuJSON = SaladMenu;
  }
  else if(menu === 'sweet'){
    MenuJSON = SweetMenu;
  }
  else{
    MenuJSON = VeggieMenu;
  }


    const MenuItems = MenuJSON.map(
      (info)=>{
        
        if(isMultiPrice == "false") {
          return(
          
            <div class="card bg-transparent text-start my-2 p-1 shadow-sm border border-bite">
                <div class="card-body p-2 ">
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title">{info.Name}</h5>
                        <div class="text-end">
                            <span class="badge bg-bite text-dark">{info.Price} ֏</span>
                        </div>
                    </div>
      

                  <p class="card-text">{info.Engredients}</p>
                </div>
            </div>
          )
        }
        else if(isMultiPrice == "true" && info['1/2KG'] != "") {
          return(
          <div class="card bg-transparent text-start my-2 p-1 shadow-sm border border-bite">
                    <div class="card-body p-2 ">
                        <div class="d-flex justify-content-between">
                            <h5 class="col-4 card-title">{info.Name}</h5>
                            <div class=" col-6 d-flex justify-content-between">
                                <div class="text-center">
                                    <span class="badge bg-bite text-dark">{info.Platter} ֏</span>
                                </div>
                                <div class="text-end">
                                    <span class="badge bg-bite text-dark">{info['1/2KG']} ֏</span>
                                </div>
                            </div>
                            
                        </div>
                
                        <p class="card-text">{info.Engredients}</p>
                    </div>
                </div>
          )
        }
        else if(isMultiPrice == "true" && info['1/2KG'] == "") {
          return(
          <div class="card bg-transparent text-start my-2 p-1 shadow-sm border border-bite">
                    <div class="card-body p-2 ">
                        <div class="d-flex justify-content-between">
                            <h5 class="col-4 card-title">{info.Name}</h5>
                            <div class=" col-6 d-flex justify-content-between">
                                <div class="text-end">
                                    <span class="badge bg-bite text-dark">{info.Platter} ֏</span>
                                </div>
                            </div>
                            
                        </div>
                
                        <p class="card-text">{info.Engredients}</p>
                    </div>
                </div>
          )
        }
        
      }
    )
  

  return(

    <div class="mt-4">     
      <div class="d-flex flex-row">
        <h3 class="col fs-3 fw-bold text-start category">{Category}</h3>
        <img class="col-1 img-fluid me-2 text-end" src={CategoryIcon} width="36px"/>
      </div>

      {MenuItems}
    </div>
  )
}

export default DisplayMenu;
