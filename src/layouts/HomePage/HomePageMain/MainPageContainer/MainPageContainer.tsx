import React from 'react'
import './MainPageContainer.scss'
import FirstImg from '../../../../images/image1.png'
import SecondImg from '../../../../images/image2.png'
import ThirdImg from '../../../../images/image3.png'

const MainPageContainer = () => {
  return (
      <section className="mainpage-main-container">
          <div className="mainpage-container-box">
              <img src={ThirdImg} alt="card"/>
                  <div className="mainpage-card-text">
                      <h3 className="title-of-card">Apple Airpods</h3>
                      <p>Indi satishda</p>
                  </div>
                  <button className="mainpage-button">
                      Etrafli
                  </button>
          </div>
          <div className="mainpage-container-box">
              <img src={FirstImg} alt="card"/>
                  <div className="mainpage-card-text">
                      <h3 className="title-of-card">Apple Airpods</h3>
                      <p>Indi satishda</p>

                  </div>
                  <button className="mainpage-button">
                      Etrafli
                  </button>
          </div>
          <div className="mainpage-container-box">
              <img src={SecondImg} alt="card"/>
                  <div className="mainpage-card-text">
                      <h3 className="title-of-card">Apple Airpods</h3>
                      <p>Indi satishda</p>

                  </div>
                  <button className="mainpage-button">
                      Etrafli
                  </button>
          </div>
      </section>
  )
}

export default MainPageContainer