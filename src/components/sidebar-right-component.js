import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './sidebar-right-component.css'

const SidebarRightComponent = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="sidebar-right-component-sidebar-right-component">
      {isVisible === true && (
        <div className="sidebar-right-component-container1">
          <div className="sidebar-right-component-container2">
            <span>
              {props.text ?? (
                <Fragment>
                  <span className="sidebar-right-component-text2"> Setup</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="sidebar-right-component-container3">
            <div className="sidebar-right-component-container4"></div>
          </div>
          <div className="sidebar-right-component-container5"></div>
        </div>
      )}
      {isVisible === false && (
        <div
          onClick={() => setIsVisible(true)}
          className="sidebar-right-component-sidebar-open-button shadow-style gradient-lila"
        >
          <svg height="15" width="15" viewBox="0 0 32 32">
            <path
              fill="currentColor"
              d="M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z"
            ></path>
          </svg>
        </div>
      )}
      {isVisible === true && (
        <div
          onClick={() => setIsVisible(false)}
          className="sidebar-right-component-sidebar-close-button"
        >
          <svg height="15" width="15" viewBox="0 0 32 32">
            <path
              fill="currentColor"
              d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"
            ></path>
          </svg>
        </div>
      )}
    </div>
  )
}

SidebarRightComponent.defaultProps = {
  text: undefined,
}

SidebarRightComponent.propTypes = {
  text: PropTypes.element,
}

export default SidebarRightComponent
