import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer>
      <div>Made with curiosity by Anusha {`&`} Abhirup</div>
      <div>Copyright {new Date().getFullYear()} © Chicken Or Egg</div>
    </footer>
  )
}

export default Footer
