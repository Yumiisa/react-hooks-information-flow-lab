import React from 'react'

const Header = ({onDarkModeClick, isDarkMode}) => {
   //console.log(onChangeMode)
  return (
    <div>
       <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    </div>
  )
}

export default Header
