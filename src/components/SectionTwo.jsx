import React from 'react'
import { DataSectionTwo } from './DataSectionTwo';

import '../scss/styles/sectionTwo.scss'

export const SectionTwo = () => {   

  return (
    <>
        <section className="sectionTwo">

            <div className="sectionTwo__container container">

                {
                    DataSectionTwo.map(({img, id, title, text, number}) => {
                        return(
                            <div className='sectionTwo__card' key={id}>
                                <div className="sectionTwo__img">
                                    <img src= {img} alt= {`imagen-${title}`} />
                                </div>
                                <div className='sectionTwo__text'>
                                    <div className='sectionTwo__num'>{number}</div>
                                    <div className='sectionTwo__title'>{title}</div>
                                    <p className='sectionTwo__p'>{text}</p>
                                </div>
                            </div>
                        )
                    }) 
                
                }


            </div>



        </section>
        
    
    </>
  )
}