import react from "react"
import Arr from "./Arr"
import Calculator2 from "./Calculator2"
const Calculator=()=>{
    return(
        <>
        <div className="container">
            <div className="container1">
                <h1 className="heading">ROI Calculator</h1>
                <div className="icons-container">
                    <div className="icons"><h6><i id="fontawe" class="fa fa-birthday-cake"></i>Cake</h6></div>
                    <div className="icons"><h6><i id="fontawe" class="fa fa-toggle-on"></i>USD</h6></div>
                </div>
                <div className="input">
                <div className="valuetxt">   <h2 id="value1" className="value">0.000 USD</h2></div>
                </div>
              <h6 className="right">~CAKE 0.000</h6>
              <div >
                  <div className="price">$1000</div>
                  <div className="price">$100</div>
                
              </div>
              <h5>TimeFrame</h5>
              <div className="map-container">
                  {
                      Arr.map((elem)=>{
                          return(
                              <>
                             <div className="time"key={elem.id}>
                                 <h6 className="map-heading">{elem.day}</h6>
                             </div>
                              </>
                          )
                      })
                  }
              </div>
              <div className="enable">
                  <div className="enable" >Enable Accelerated APY <i id="fontawe1" class="fa fa-toggle-on"></i></div>
                
              </div>
              <Calculator2/>
            </div>
        </div>
        </>
    )
}

export default Calculator