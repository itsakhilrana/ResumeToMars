import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import './HomeScreen.css'
import A from '../imgs/A4F.svg'

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <div className="Intro">
        <div className="Punch">
          <p className="Main_P">
            Create <br></br> your professional <br></br> resume in 15 minutes.
          </p>
          <p className="Sub_P">Proven resume templates.</p>
        </div>
        <div className="Swipe_Arrow">
          Swipe for Templates
          <i style={{ marginLeft: '5px' }} className="fas fa-arrow-right"></i>
        </div>
      </div>
      <div className="Templates_Container">
        <div className="Scrolling">
          <ScrollContainer className="Scrolling_Templates">
            <div className="Template_Card">
              <img src={A}></img>

              <p className="Template_Type">
                Basic<span style={{marginLeft:"10px"}} className="Rating"> 4.5 <i style={{color:"yellow"}} className="fas fa-star"></i></span>
              </p>
              <p className="About_Template">
                Easily personalize this basic resume layout that can be
                completed in under ten minutes by intuitive process. Easily personalize this basic resume layout that can be
                completed in under ten minutes by intuitive process.
              </p>
              <div className="Template_btn">Select Template</div>
            </div>

            <div className="Template_Card">
              <img src={A}></img>

              <p className="Template_Type">
                Basic<span style={{marginLeft:"10px"}} className="Rating"> 4.5 <i style={{color:"yellow"}} className="fas fa-star"></i></span>
              </p>
              <p className="About_Template">
                Easily personalize this basic resume layout that can be
                completed in under ten minutes by intuitive process. Easily personalize this basic resume layout that can be
                completed in under ten minutes by intuitive process.
              </p>
              <div className="Template_btn">Select Template</div>
            </div>


            <div className="Template_Card">
              <img src={A}></img>

              <p className="Template_Type">
                Basic<span style={{marginLeft:"10px"}} className="Rating"> 4.5 <i style={{color:"yellow"}} className="fas fa-star"></i></span>
              </p>
              <p className="About_Template">
                Easily personalize this basic resume layout that can be
                completed in under ten minutes by intuitive process. Easily personalize this basic resume layout that can be
                completed in under ten minutes by intuitive process.
              </p>
              <div className="Template_btn">Select Template</div>
            </div>


            <div className="Template_Card">
              <img src={A}></img>

              <p className="Template_Type">
                Basic<span style={{marginLeft:"10px"}} className="Rating"> 4.5 <i style={{color:"yellow"}} className="fas fa-star"></i></span>
              </p>
              <p className="About_Template">
                Easily personalize this basic resume layout that can be
                completed in under ten minutes by intuitive process. Easily personalize this basic resume layout that can be
                completed in under ten minutes by intuitive process.
              </p>
              <div className="Template_btn">Select Template</div>
            </div>

            <div className="Template_Card">
              <img src={A}></img>

              <p className="Template_Type">
                Basic<span style={{marginLeft:"10px"}} className="Rating"> 4.5 <i style={{color:"yellow"}} className="fas fa-star"></i></span>
              </p>
              <p className="About_Template">
                Easily personalize this basic resume layout that can be
                completed in under ten minutes by intuitive process. Easily personalize this basic resume layout that can be
                completed in under ten minutes by intuitive process.
              </p>
              <div className="Template_btn">Select Template</div>
            </div>

            
          </ScrollContainer>
        </div>
        <div className="Swipe_Arrow_Mob">
          Swipe for Templates
          <i style={{ marginLeft: '5px' }} className="fas fa-arrow-right"></i>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
