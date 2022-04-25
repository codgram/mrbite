import * as React from 'react';



function Header({parentToChild}) {
  
  const Language = () => {
    if(parentToChild == "am") {
      return(
        <div class="col-3 text-end d-flex justify-content-between mt-2">
          <a href="/menu/en"><img src="../icons/usa.png" height="24px" /></a>
          <a href="/menu/am"><img class="rounded border border-2 border-bite rounded-circle" src="../icons/am.png" height="24px" /></a>
          <a href="/menu/ru"><img src="../icons/ru.png" height="24px" /></a>
        </div>
      )
    }
    if(parentToChild == "en") {
      return(
        <div class="col-3 text-end d-flex justify-content-between mt-2">
          <a href="/menu/en"><img class="rounded border border-2 border-bite rounded-circle" src="../icons/usa.png" height="26px" /></a>
          <a href="/menu/am"><img src="../icons/am.png" height="24px" /></a>
          <a href="/menu/ru"><img src="../icons/ru.png" height="24px" /></a>
        </div>
      )
    }
    if(parentToChild == "ru") {
      return(
        <div class="col-3 text-end d-flex justify-content-between mt-2">
          <a href="/menu/en"><img src="../icons/usa.png" height="26px" /></a>
          <a href="/menu/am"><img src="../icons/am.png" height="24px" /></a>
          <a href="/menu/ru"><img class="rounded border border-2 border-bite rounded-circle"  src="../icons/ru.png" height="24px" /></a>
        </div>
      )
    }
  }
  
  return (
    
      // <div class="col-12 d-flex justify-content-between bg-transparent px-1 my-1 rounded">
      //   <div class="col-8 text-start">
      //     <a href="/">
      //       <i class="bi bi-arrow-left-circle color-bite fw-bold icon-bite"></i>
      //     </a>
      //   </div>
      //   <Language />
      // </div>

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
      
  );
}

export default Header;
