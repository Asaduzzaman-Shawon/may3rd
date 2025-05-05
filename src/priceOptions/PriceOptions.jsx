import React from 'react';
import Price from '../priceoption/Price';

const PriceOptions = () => {

    const pricingOptions = [
        {
          id: 1,
          name: "Basic Membership",
          price: 1500,
          features: [
            "Access to gym equipment",
            "Locker facility",
            "1 Fitness assessment"
          ]
        },
        {
          id: 2,
          name: "Standard Membership",
          price: 2500,
          features: [
            "Access to all equipment",
            "Group fitness classes",
            "Locker & Shower access",
            "Monthly fitness assessment"
          ]
        },
        {
          id: 3,
          name: "Premium Membership",
          price: 3500,
          features: [
            "Personal trainer (3 sessions/month)",
            "Access to all classes",
            "Steam & sauna",
            "Diet consultation",
            "Priority support"
          ]
        },
        {
          id: 4,
          name: "Student Package",
          price: 1200,
          features: [
            "Limited access to equipment",
            "Evening slot access",
            "Student-only fitness group"
          ]
        },
        {
          id: 5,
          name: "Couples Plan",
          price: 4500,
          features: [
            "2 Premium memberships",
            "Couples training session",
            "Free protein shakes (4/month)"
          ]
        },
        {
          id: 5,
          name: "Couples Plan",
          price: 4500,
          features: [
            "2 Premium memberships",
            "Couples training session",
            "Free protein shakes (4/month)"
          ]
        }
      ];
      
    return (

        
        <div className='grid grid-cols-3'>
            
            {
              pricingOptions.map(op => <Price op={op}></Price>)
            }
        </div>
    );
};

export default PriceOptions;