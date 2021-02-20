import React from 'react'
import {Link} from 'react-router-dom'
import ScrollContainer from 'react-indiana-drag-scroll'
import './HomeScreen.css'
import A from '../imgs/A4F.svg'
import fly from '../imgs/fly.svg'
import mars from '../imgs/combo.svg'
import MobileCombo from '../imgs/MobileCombo.svg'

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <div className="Intro">
      
        <div className="Punch">
          
          <p className="Desktop_P">
            Create your professional resume in 15 minutes.
          </p>
          <img className="Mobile_Combo" src={MobileCombo} height="500" width="350"></img>
          <p className="Mobile_P">
          Create <br></br> your professional <br></br> resume in 15 minutes.
          </p>
          <p className="Sub_P">Proven resume templates.</p>
          <div className="Swipe_Arrow">
          Swipe for Templates
          <i style={{ marginLeft: '5px' }} className="fas fa-arrow-right"></i>
        </div>
        <img className="Combo" src={mars} height="350" width="250"></img>
        </div>
        
      </div>
      <div className="Templates_Container">
        <div className="Scrolling">
          <ScrollContainer className="Scrolling_Templates">
            <div className="Template_Card">
              <img src={A}></img>

              <p className="Template_Type">
                Basic
                <span style={{ marginLeft: '10px' }} className="Rating">
                  {' '}
                  4.5{' '}
                  <i style={{ color: 'yellow' }} className="fas fa-star"></i>
                </span>
              </p>
              <p className="About_Template">
                Easily personalize this basic resume layout that can be
                completed in under ten minutes by intuitive process. Easily
                personalize this basic resume layout that can be completed in
                under ten minutes by intuitive process.
              </p>
              <Link to='/edit'><div className="Template_btn">Select Template</div></Link>
            </div>

            <div className="Template_Card">
              <img src={A}></img>

              <p className="Template_Type">
                Basic
                <span style={{ marginLeft: '10px' }} className="Rating">
                  {' '}
                  4.5{' '}
                  <i style={{ color: 'yellow' }} className="fas fa-star"></i>
                </span>
              </p>
              <p className="About_Template">
                Easily personalize this basic resume layout that can be
                completed in under ten minutes by intuitive process. Easily
                personalize this basic resume layout that can be completed in
                under ten minutes by intuitive process.
              </p>
              <Link to='/edit'><div className="Template_btn">Select Template</div></Link>
            </div>


            <div className="Template_Card">
              <img src={A}></img>

              <p className="Template_Type">
                Basic
                <span style={{ marginLeft: '10px' }} className="Rating">
                  {' '}
                  4.5{' '}
                  <i style={{ color: 'yellow' }} className="fas fa-star"></i>
                </span>
              </p>
              <p className="About_Template">
                Easily personalize this basic resume layout that can be
                completed in under ten minutes by intuitive process. Easily
                personalize this basic resume layout that can be completed in
                under ten minutes by intuitive process.
              </p>
              <Link to='/edit'><div className="Template_btn">Select Template</div></Link>
            </div>


            <div className="Template_Card">
              <img src={A}></img>

              <p className="Template_Type">
                Basic
                <span style={{ marginLeft: '10px' }} className="Rating">
                  {' '}
                  4.5{' '}
                  <i style={{ color: 'yellow' }} className="fas fa-star"></i>
                </span>
              </p>
              <p className="About_Template">
                Easily personalize this basic resume layout that can be
                completed in under ten minutes by intuitive process. Easily
                personalize this basic resume layout that can be completed in
                under ten minutes by intuitive process.
              </p>
              <Link to='/edit'><div className="Template_btn">Select Template</div></Link>
            </div>


            <div className="Template_Card">
              <img src={A}></img>

              <p className="Template_Type">
                Basic
                <span style={{ marginLeft: '10px' }} className="Rating">
                  {' '}
                  4.5{' '}
                  <i style={{ color: 'yellow' }} className="fas fa-star"></i>
                </span>
              </p>
              <p className="About_Template">
                Easily personalize this basic resume layout that can be
                completed in under ten minutes by intuitive process. Easily
                personalize this basic resume layout that can be completed in
                under ten minutes by intuitive process.
              </p>
              <Link to='/edit'><div className="Template_btn">Select Template</div></Link>
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
