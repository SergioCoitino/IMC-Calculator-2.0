import React from 'react'

function Footer() {
  return (

      <footer className='footer'>
          <a 
            href="https://github.com/SergioCoitino" 
            target="_blank"
            rel='noopener noreferrer'>
            <p>&copy; {new Date().getFullYear()} Sergio Coitiño. Todos los derechos reservados.</p>
          </a>
      </footer>  

  )
}

export default Footer