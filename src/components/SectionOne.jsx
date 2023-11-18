import cuadrado from '../assets/images/image-web-3-mobile.jpg';
import rect from '../assets/images/image-web-3-desktop.jpg';
import nuevo from '../assets/images/image-retro-pcs.jpg';

import '../scss/styles/sectionOne.scss';

export const SectionOne = () => {
  return (
    <section className="sectionOne container">
      <picture>
        <source media='(max-width: 46.875rem)' srcSet= {cuadrado}/>
        <source media='(min-width: 47rem)' srcSet= {rect}/>
        <img src= {nuevo} alt="" />
      </picture>

  

      <div className="sectionOne__title">
        The Bright Future of Web 3.0?
      </div>  

      <div className="sectionOne__p">
        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>

        <button className='sectionOne__btn'>Read More</button>

      </div>

      
      <div className="sectionDark">
        <div className='sectionDark__title'>
          <h3>New</h3>
        </div>

        <div className="sectionDark__container">
          <div className="sectionDark__card">

            <div className="sectionDark__subtitle">
              <h3>Hydrogen VS Electric Cars</h3>
            </div>

            <div className="sectionDark__p">
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
          </div>

          <div className="sectionDark__card">

            <div className="sectionDark__subtitle">
              <h3>The Downsides of AI Artistry</h3>
            </div>

            <div className="sectionDark__p">
              <p>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
          </div>

          <div className="sectionDark__card">

            <div className="sectionDark__subtitle">
              <h3>Is VC Funding Drying Up?</h3>
            </div>

            <div className="sectionDark__p">
              <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
          </div>
        </div>
      </div>


        
     

    </section>
  )
}
