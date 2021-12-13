import React from 'react'
import Arr from './Arr'

const Calculator2 = () => {
    return (
        <>
            <h6>Select Tier</h6>
            <div className="map-container">
                {
                 Arr.map((elem)=>{
                     return(
                         <>
                         <div className="time"  key={elem.id}>
                             <h6 className="map-heading">{elem.tier}</h6>
                             </div>
                         </>
                     )
                 })
                }
             
                </div> 
                <h6 className="roi">ROI at current Rates</h6> 
                <div>
                  
                    <div className="input">
                    <h2 id="value2">0.00 USD</h2>
                </div>
                <h6 className="cake">~0.000 CAKE + 0.000000 DON</h6>
                <h5 className="hide">Hide Details<i id="fontawe2" class="fa fa-angle-up"></i></h5>
                <div className="last-container">
                    <div id="apy"className="last-cont">APY</div>
                    <div id="percent" className="last-cont">9.0 %</div>
                </div>
                <ul>
                    <li>Calculated based on current rates.</li>
                    <li>All figures are estimated provided for your convenience only,and by no means represent guranteed returns.</li>
                </ul>
                    </div> 
            
        </>
    )
}

export default Calculator2
