import React from 'react'
import './Mascot.css'
import Mascot0 from '../../assets/svg/Mascot0.svg'
// import Mascot1 from '../../assets/svg/Mascot1.svg'
// import Mascot2 from '../../assets/svg/Mascot2.svg'

const Mascot: React.FC = () => {
  return (
    <>
      <img className='mascot' src={Mascot0} alt='Neutral Face' />
    </>
  )
}

export default Mascot
