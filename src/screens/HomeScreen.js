import React from 'react'
import { Link } from 'react-router-dom'
import ScrollContainer from 'react-indiana-drag-scroll'
import './HomeScreen.css'
import basic from '../imgs/basic.svg'


import intermidiate from '../imgs/intermidiate.svg'
import fly from '../imgs/fly.svg'
import mars from '../imgs/combo.svg'
import MobileCombo from '../imgs/MobileCombo.svg'

const HomeScreen = () => {
  const cards = [
    {
      cardType: 'Basic',
      cardRating: '4.5',
      redirect: 'basic',
      img:basic,
      cardAbout:
        'Basic resume maintain the simple layout that will friendly with the beginner. Easily completed in couple minutes by intuitive process.',
    },
    {
      cardType: 'Intermidiate',
      cardRating: '4.5',
      img:intermidiate,
      redirect: 'intermidiate',
      cardAbout:
        'Intermidiate resume focus on them which have enough experience to express themselves. Easily completed in couple minutes by intuitive process.',
    },
    {
      cardType: 'Advance',
      cardRating: '4.5',
      img:intermidiate,
      redirect: 'advance',
      cardAbout:
        'Advance resume are for those who reached to a certain position and having couple of experience in industry. Easily completed in couple minutes by intuitive process.',
    },
  ]
  return (
    <div className="HomeScreen">
      <div className="Intro">
        <div className="Punch">
          <p className="Desktop_P">
            Create your professional resume in 15 minutes.
          </p>
          <img
            className="Mobile_Combo"
            src={MobileCombo}
            height="500"
            width="350"
          ></img>
          <p className="Mobile_P">
            Create <br></br> your professional <br></br> resume in 15 minutes.
          </p>
          <p className="Sub_P">Land your #dreamjob with ResumeToMars.</p>
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
            {cards.map((card) => {
              return (
                <div className="Template_Card">
                  <img src={card.img}></img>

                  <p className="Template_Type">
                    {card.cardType}
                    <span style={{ marginLeft: '10px' }} className="Rating">
                      {' '}
                      {card.cardRating}{' '}
                      <i
                        style={{ color: 'yellow' }}
                        className="fas fa-star"
                      ></i>
                    </span>
                  </p>
                  <p className="About_Template">{card.cardAbout}</p>
                  <Link to={`/edit?redirect=${card.redirect}`}>
                    <div className="Template_btn">Select Template</div>
                  </Link>
                </div>
              )
            })}
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
