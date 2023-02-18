import React, { useState } from "react";
import { render } from "react-dom";

export default function WorkingProcess() {

  const [stepSelected, setStepSelected] = useState(1)
  // const [selectedStatusElement, setSelectedStatusElement] = useState()

  let activeStateIcon = 'working-process-step-selected-status expanded'
  let inactiveStateIcon = 'working-process-step-selected-status'

  let activeStateBg = 'working-process-selected'

  const handleStepChange = (e) => { 
    if(e.target.checked) {
      setStepSelected(e.target.value)
    }
  }
  function RenderIlustration({ index }) {

    if(index == 1) {
      return <div className="working-process-detail-visualization">
        <img class="rectangle-14" src="/src/assets/images/rectangle-14.svg" alt="rectangle 14" />
        <img class="rectangle-16" src="/src/assets/images/rectangle-16.svg" alt="rectangle 16" />
        <img class="rectangle-16" src="/src/assets/images/rectangle-16.svg" alt="rectangle 16" />
        <img class="rectangle-16" src="/src/assets/images/rectangle-16.svg" alt="rectangle 16" />
        <img class="rectangle-16" src="/src/assets/images/rectangle-16.svg" alt="rectangle 16" />
        <img class="rectangle-21" src="/src/assets/images/rectangle-21.svg" alt="rectangle 21" />
        <img class="rectangle-15" src="/src/assets/images/rectangle-15.svg" alt="rectangle 15" />
      </div>
    }
    else if(index == 2) {
      return <div className="working-process-detail-visualization">
        <img class="rectangle-14" src="/src/assets/images/rectangle-14.svg" alt="rectangle 14" />
        <img class="rectangle-16" src="/src/assets/images/rectangle-16.svg" alt="rectangle 16" />
        <img class="rectangle-16" src="/src/assets/images/rectangle-16.svg" alt="rectangle 16" />
        <img class="rectangle-16" src="/src/assets/images/rectangle-16.svg" alt="rectangle 16" />
        <img class="rectangle-16" src="/src/assets/images/rectangle-16.svg" alt="rectangle 16" />
        <img class="rectangle-21" src="/src/assets/images/rectangle-21.svg" alt="rectangle 21" />
        <img class="rectangle-15" src="/src/assets/images/rectangle-15.svg" alt="rectangle 15" />
      </div>
    }
    else {
      return <div className="working-process-detail-visualization">
        <img class="rectangle-14" src="/src/assets/images/rectangle-14.svg" alt="rectangle 14" />
        <img class="rectangle-16" src="/src/assets/images/rectangle-16.svg" alt="rectangle 16" />
        <img class="rectangle-16" src="/src/assets/images/rectangle-16.svg" alt="rectangle 16" />
        <img class="rectangle-16" src="/src/assets/images/rectangle-16.svg" alt="rectangle 16" />
        <img class="rectangle-16" src="/src/assets/images/rectangle-16.svg" alt="rectangle 16" />
        <img class="rectangle-21" src="/src/assets/images/rectangle-21.svg" alt="rectangle 21" />
        <img class="rectangle-15" src="/src/assets/images/rectangle-15.svg" alt="rectangle 15" />
      </div>
    }
  }
  

  return(
    <section className="section-vh-75 section-working-process">
      <div className="container-fluid section-working-process-inner section-inner text-center">
        <h4 className="section-subtitle section-subtitle-with-bg">
          What We Do
        </h4>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="card working-process-detail">
              <div className="card-body">
                <RenderIlustration index={stepSelected} />
                <h5>Fill the Form</h5>
                <p className="card-text">Fill the form with your details and upload your video.</p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <ul className="working-process-steps">
              <li className={"working-process-step working-process-step-1 " + (stepSelected == 1 && activeStateBg)}>
                <span className="working-process-step-number">01</span>
                <input type="radio" name="working-process-step" id="step-1" value={1} onChange={handleStepChange} />
                <label htmlFor="step-1">Fill The E-Form</label>
                <span className={stepSelected == 1 ? activeStateIcon : inactiveStateIcon}></span>
              </li>
              <li className={"working-process-step working-process-step-2 " + (stepSelected == 2 && activeStateBg)}>
                <span className="working-process-step-number">02</span>
                <input type="radio" name="working-process-step" id="step-2" value={2} onChange={handleStepChange} />
                <label htmlFor="step-2">Deliver Footage</label>
                <span className={stepSelected == 2 ? activeStateIcon : inactiveStateIcon}></span>
              </li>
              <li className={"working-process-step working-process-step-3 " + (stepSelected == 3 && activeStateBg)}>
                <span className="working-process-step-number">03</span>
                <input type="radio" name="working-process-step" id="step-3" value={3} onChange={handleStepChange} />
                <label htmlFor="step-3">Download Films</label>
                <span className={stepSelected == 3 ? activeStateIcon : inactiveStateIcon}></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}