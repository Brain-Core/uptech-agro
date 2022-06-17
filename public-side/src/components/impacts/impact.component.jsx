import React from 'react'
import './impact.component.css';
import ImpactItem from './impactitem/impactitem.component';
import poverity from '../../assets/property.png'
import zero from '../../assets/zero.png'
import health from '../../assets/health.png'

function Impact() {
    return (
        <div style={{
            marginTop:'150px', 
            marginBottom:'30px',
            marginLeft:'40px',
            marginRight:'50px'
            }} className="impact" id='impact'>
          <h1 className="title" id='impact' style={{
              marginBottom:'30px'
          }}>Our Impacts</h1> 
          <div className="row" style={{
              textAlign: 'justify',  textJustify: 'inter-word'
          }}>
              <ImpactItem
              img={poverity}
              title='No Poverty'
              paragraph="Up-tech empowers farmers by giving them sustainable access to certified high quality inputs 
              and agricultural services that optimize the productivity, profitability and economic growth of small producers. 
              The increase in the incomes of our poultry producers and the increase of jobs in this sector guarantee 
              the contribution of UP-Tech to the sustainable development objective 1, No poverty."
              />
              <ImpactItem
              img={zero}
              title='Zero Hunger'
              paragraph="Ensuring the productivity of chickens in quantity and good quality poultry houses 
              from our certified inputs ensures that producers are producing enough feed to feed the growing population 
              of the region. We are therefore working diligently to achieve Sustainable Goal 2; Zero Hunger, 
              ensuring that there is enough food to feed each individual. "
              />

              <ImpactItem
              img={health}
              title='Health, responsible production and climate action'
              paragraph="Malnutrition is another major problem in the DRC. 
              Most of the malnourished people in DRC come from rural areas where agriculture is the main employer. 
              The concept of UP-Tech places food security, nutrition, health and climate-smart farming at the center 
              of its fundamental priorities. Our dedication and passion is to serve producers the best of high-yielding, 
              nutrient-rich inputs that ensure responsible poultry house production and a significant impact on the health 
              and well-being of end consumers of farm products. "
              />

          </div>
        </div>
    )
}

export default Impact
