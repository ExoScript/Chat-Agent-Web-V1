import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './sidebar-left-component.css'

const SidebarLeftComponent = (props) => {
  const [menu, setMenu] = useState(true)
  return (
    <div
      className={`sidebar-left-component-sidebar-left-component ${props.rootClassName} `}
    >
      {menu === true && (
        <div className="sidebar-left-component-menu-open">
          <div className="sidebar-left-component-topbar1">
            <div className="sidebar-left-component-container10">
              <div className="sidebar-left-component-container11">
                <img
                  alt={props.logoImageAlt}
                  src={props.logoImageSrc}
                  className="sidebar-left-component-logo-image1"
                />
              </div>
              <div className="sidebar-left-component-logo-txt">
                <span className="sidebar-left-component-text10">
                  {props.text ?? (
                    <Fragment>
                      <span className="sidebar-left-component-text25">
                        Traffls
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="sidebar-left-component-text11">
                  {props.text1 ?? (
                    <Fragment>
                      <span className="sidebar-left-component-text22">
                        Beta
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div
              onClick={() => setMenu(false)}
              className="sidebar-left-component-container12"
            >
              <svg height="15" width="15" viewBox="0 0 32 32">
                <path
                  fill="currentColor"
                  d="M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="sidebar-left-component-menubox1">
            <div className="menu-open-button button-active">
              <div className="sidebar-left-component-lablebox1">
                <div className="sidebar-left-component-container13">
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path
                      d="M12 2c2.65 0 5.19 1.06 7.07 2.93l-1.42 1.42A8 8 0 0 0 12 4c-2.12 0-4.16.84-5.65 2.35L4.93 4.93C6.81 3.06 9.35 2 12 2M3.66 6.5l1.45 1.44A8.04 8.04 0 0 0 4 12a8 8 0 0 0 8 8a8 8 0 0 0 8-8c0-1.43-.39-2.83-1.12-4.06l1.46-1.44A9.93 9.93 0 0 1 22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12c0-1.96.58-3.88 1.66-5.5M12 6a6 6 0 0 1 6 6c0 1.59-.63 3.12-1.76 4.24l-1.41-1.41a4.004 4.004 0 0 1-5.66 0l-1.41 1.41A5.97 5.97 0 0 1 6 12a6 6 0 0 1 6-6m0 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <span className="sidebar-left-component-btn-lable">
                  {props.btnLable ?? (
                    <Fragment>
                      <span className="sidebar-left-component-text24">
                        Conversations
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="sidebar-left-component-unreadbox1">
                <span className="sidebar-left-component-count1">
                  {props.count ?? (
                    <Fragment>
                      <span className="sidebar-left-component-text19">3</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="menu-open-button">
              <div className="sidebar-left-component-lablebox2">
                <div className="sidebar-left-component-container14">
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path
                      d="M10 13.5h3.48v-1H10zm0-3h6.962v-1H10zm0-3h6.962v-1H10zM8.116 17q-.691 0-1.153-.462T6.5 15.385V4.615q0-.69.463-1.153T8.116 3h10.769q.69 0 1.153.462t.462 1.153v10.77q0 .69-.462 1.152T18.884 17zm0-1h10.769q.23 0 .423-.192t.192-.423V4.615q0-.23-.192-.423T18.884 4H8.116q-.231 0-.424.192t-.192.423v10.77q0 .23.192.423t.423.192m-3 4q-.69 0-1.153-.462T3.5 18.385V6.615h1v11.77q0 .23.192.423t.423.192h11.77v1zM7.5 4v12z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <span className="sidebar-left-component-text12">
                  {props.text2 ?? (
                    <Fragment>
                      <span className="sidebar-left-component-text18">
                        Files
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="sidebar-left-component-unreadbox2">
                <span className="sidebar-left-component-count2">
                  {props.count1 ?? (
                    <Fragment>
                      <span className="sidebar-left-component-text27">3</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="menu-open-button">
              <div className="sidebar-left-component-lablebox3">
                <div className="sidebar-left-component-container15">
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path
                      d="M10 13H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1m-1 7H4v-5h5ZM21 2h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1 7h-5V4h5Zm1 4h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1m-1 7h-5v-5h5ZM10 2H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M9 9H4V4h5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <span className="sidebar-left-component-text13">
                  {props.text3 ?? (
                    <Fragment>
                      <span className="sidebar-left-component-text20">
                        Apps
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="sidebar-left-component-unreadbox3">
                <span className="sidebar-left-component-count3">
                  {props.count2 ?? (
                    <Fragment>
                      <span className="sidebar-left-component-text23">3</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="menu-open-button">
              <div className="sidebar-left-component-lablebox4">
                <div className="sidebar-left-component-container16">
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path
                      d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2zm3-4v-2H6v2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <span className="sidebar-left-component-text14">
                  {props.text4 ?? (
                    <Fragment>
                      <span className="sidebar-left-component-text26">
                        Documentation
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="sidebar-left-component-unreadbox4">
                <span className="sidebar-left-component-count4">
                  {props.count3 ?? (
                    <Fragment>
                      <span className="sidebar-left-component-text17">3</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="sidebar-left-component-bottombar1">
            <div className="sidebar-left-component-container17">
              <div className="sidebar-left-component-container18 shadow-style gradient-lila">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M6 12h6m6 0h-6m0 0V6m0 6v6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span className="sidebar-left-component-text15">
                  {props.text5 ?? (
                    <Fragment>
                      <span className="sidebar-left-component-text21">
                        New chat
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="sidebar-left-component-accountbox1">
              <div className="sidebar-left-component-container19">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.9 7.9 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.93 7.93 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="sidebar-left-component-text16">
                  {props.text6 ?? (
                    <Fragment>
                      <span className="sidebar-left-component-text28">
                        Your Account
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <svg
                width="30"
                height="30"
                viewBox="0 0 48 48"
                className="sidebar-left-component-icon23"
              >
                <circle r="3" cx="12" cy="24" fill="currentColor"></circle>
                <circle r="3" cx="24" cy="24" fill="currentColor"></circle>
                <circle r="3" cx="36" cy="24" fill="currentColor"></circle>
              </svg>
            </div>
          </div>
        </div>
      )}
      {menu === false && (
        <div className="sidebar-left-component-menu-close">
          <div className="sidebar-left-component-topbar2">
            <div className="sidebar-left-component-container20">
              <img
                alt={props.logoImageAlt3}
                src={props.logoImageSrc3}
                className="sidebar-left-component-logo-image2"
              />
            </div>
            <div
              onClick={() => setMenu(true)}
              className="sidebar-left-component-container21"
            >
              <svg height="15" width="15" viewBox="0 0 32 32">
                <path
                  fill="currentColor"
                  d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="sidebar-left-component-menubox2">
            <div className="button-active menu-close-button">
              <div className="sidebar-left-component-container22">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    d="M12 2c2.65 0 5.19 1.06 7.07 2.93l-1.42 1.42A8 8 0 0 0 12 4c-2.12 0-4.16.84-5.65 2.35L4.93 4.93C6.81 3.06 9.35 2 12 2M3.66 6.5l1.45 1.44A8.04 8.04 0 0 0 4 12a8 8 0 0 0 8 8a8 8 0 0 0 8-8c0-1.43-.39-2.83-1.12-4.06l1.46-1.44A9.93 9.93 0 0 1 22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12c0-1.96.58-3.88 1.66-5.5M12 6a6 6 0 0 1 6 6c0 1.59-.63 3.12-1.76 4.24l-1.41-1.41a4.004 4.004 0 0 1-5.66 0l-1.41 1.41A5.97 5.97 0 0 1 6 12a6 6 0 0 1 6-6m0 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="menu-close-button">
              <div className="sidebar-left-component-container23">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    d="M10 13.5h3.48v-1H10zm0-3h6.962v-1H10zm0-3h6.962v-1H10zM8.116 17q-.691 0-1.153-.462T6.5 15.385V4.615q0-.69.463-1.153T8.116 3h10.769q.69 0 1.153.462t.462 1.153v10.77q0 .69-.462 1.152T18.884 17zm0-1h10.769q.23 0 .423-.192t.192-.423V4.615q0-.23-.192-.423T18.884 4H8.116q-.231 0-.424.192t-.192.423v10.77q0 .23.192.423t.423.192m-3 4q-.69 0-1.153-.462T3.5 18.385V6.615h1v11.77q0 .23.192.423t.423.192h11.77v1zM7.5 4v12z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="menu-close-button">
              <div className="sidebar-left-component-container24">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    d="M10 13H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1m-1 7H4v-5h5ZM21 2h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1 7h-5V4h5Zm1 4h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1m-1 7h-5v-5h5ZM10 2H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M9 9H4V4h5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="menu-close-button">
              <div className="sidebar-left-component-container25">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2zm3-4v-2H6v2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="sidebar-left-component-bottombar2">
            <div className="sidebar-left-component-container26">
              <div className="sidebar-left-component-container27 shadow-style gradient-lila">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M6 12h6m6 0h-6m0 0V6m0 6v6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="sidebar-left-component-accountbox2">
              <div className="sidebar-left-component-container28">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                  className="sidebar-left-component-icon38"
                >
                  <circle r="3" cx="12" cy="24" fill="currentColor"></circle>
                  <circle r="3" cx="24" cy="24" fill="currentColor"></circle>
                  <circle r="3" cx="36" cy="24" fill="currentColor"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

SidebarLeftComponent.defaultProps = {
  count3: undefined,
  text2: undefined,
  count: undefined,
  text3: undefined,
  text5: undefined,
  text1: undefined,
  logoImageSrc: '/external/logo_white-200w-200w.png',
  count2: undefined,
  btnLable: undefined,
  text: undefined,
  logoImageAlt: 'image',
  text4: undefined,
  count1: undefined,
  text6: undefined,
  logoImageSrc3: '/external/logo_white-200w-200w.png',
  logoImageAlt3: 'image',
  rootClassName: '',
}

SidebarLeftComponent.propTypes = {
  count3: PropTypes.element,
  text2: PropTypes.element,
  count: PropTypes.element,
  text3: PropTypes.element,
  text5: PropTypes.element,
  text1: PropTypes.element,
  logoImageSrc: PropTypes.string,
  count2: PropTypes.element,
  btnLable: PropTypes.element,
  text: PropTypes.element,
  logoImageAlt: PropTypes.string,
  text4: PropTypes.element,
  count1: PropTypes.element,
  text6: PropTypes.element,
  logoImageSrc3: PropTypes.string,
  logoImageAlt3: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SidebarLeftComponent
