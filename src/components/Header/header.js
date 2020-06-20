import React from "react"
import Logo from "src/svgs/tk_logo"
import Hamburger from "src/svgs/hamburger"
import Close from "src/svgs/close"
import LanguageToggle from "src/components/LanguageToggle/LanguageToggle"
import LoginLogout from "src/components/LoginLogout/LoginLogout"
import { Link } from "gatsby"

import "./header.scss"

function Header({ theme, title, showNav, setShowNav }) {
  return (
    <header className={`header ${theme}`}>
      <Link to="/">
        <Logo className="logo" />
      </Link>
      {/* This needs to be styled */}
      <LanguageToggle theme={theme} />

      {/* This needs to be styled */}
      <LoginLogout />
      <button onClick={() => setShowNav()}>
        <span>
          {showNav ? (
            <Close className="close" />
          ) : (
            <Hamburger className="hamburger" />
          )}
          <p className="title">{title}</p>
        </span>
      </button>
    </header>
  )
}

export default Header
