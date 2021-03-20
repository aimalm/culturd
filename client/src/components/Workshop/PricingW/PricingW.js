import React from 'react';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {LinkContainer} from 'react-router-bootstrap'
import { Button } from 'react-bootstrap';
import './PricingW.css'

function PricingW() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 54 }}>
        <div className='pricing__section'>
          <div className='pricing__wrapper'>
            <h1 className='pricing__heading'>Pricing</h1>
            <div className='pricing__container'>
              <LinkContainer to='/sign-up' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                  <div className='icon'>
                    <FaFire />
                  </div>
                  <h3>Workshop Art</h3>
                  <h4>€8.99</h4>
                  <p>per person</p>
                  <ul className='pricing__container-features'>
                    <li>100 Transactions</li>
                    <li>2% Cash Back</li>
                    <li>cook,dance and art 50%  </li>
                  </ul>
                  <LinkContainer to="/workshop">
                    <Button>
                        <span>SIGN UP</span>
                        </Button>
                 </LinkContainer>
                </div>
              </LinkContainer>
              <LinkContainer to='/sign-up' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                  <div className='icon'>
                    <BsXDiamondFill />
                  </div>
                  <h3>Cooking Workshop</h3>
                  <h4>€29.99</h4>
                  <p>per person</p>
                  <ul className='pricing__container-features'>
                    <li>1000 Transactions</li>
                    <li>3.5% Cash Back</li>
                    <li>group discont 20%</li>
                  </ul>
                  <LinkContainer to="/workshop">
                <Button>
                  <span>SIGN UP</span>
                </Button>
              </LinkContainer>
                </div>
              </LinkContainer>
              <LinkContainer to='/sign-up' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                  <div className='icon'>
                    <GiCrystalize />
                  </div>
                  <h3>Dance Workshop</h3>
                  <h4>€18.99</h4>
                  <p>per 5hours</p>
                  <ul className='pricing__container-features'>
                    <li>Unlimited Transactions</li>
                    <li>5% Cash Back</li>
                    <li>Unlimited Spending</li>
                  </ul>
                  <LinkContainer to="/workshop">
                <Button>
                  <span>SIGN UP</span>
                </Button>
              </LinkContainer>
                </div>
              </LinkContainer>
          </div>
        </div>
    </div>
      </IconContext.Provider>
    );
  }

export default PricingW
