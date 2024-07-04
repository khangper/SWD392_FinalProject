import React from 'react'
import './InsAStdFooter.css'
const InsAStdFooter = ({sidebar}) => {
  return (
    <footer className={`footer ${sidebar ? 'footer-container' : 'footer-large-container'}`}>InsAStdFooter</footer>
  )
}

export default InsAStdFooter