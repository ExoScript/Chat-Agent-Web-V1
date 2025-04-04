import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './text-input-component.css'

const TextInputComponent = (props) => {
  const [textfieldVisible, setTextfieldVisible] = useState(false)
  return (
    <div className="text-input-component-text-input-component">
      <div className="text-input-component-container10">
        {textfieldVisible === false && (
          <div className="text-input-component-container11">
            <div
              onClick={() => setTextfieldVisible(true)}
              className="text-input-component-container12"
            >
              <svg width="34" height="34" viewBox="0 0 24 24">
                <path
                  d="M6 12h6m6 0h-6m0 0V6m0 6v6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span className="text-input-component-text10">
                {props.text ?? (
                  <Fragment>
                    <span className="text-input-component-text16">
                      Type something here...
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="text-input-component-container13">
              <div className="button-w">
                <span className="text-input-component-text11">
                  {props.text11 ?? (
                    <Fragment>
                      <span className="text-input-component-text17">
                        Upload Files
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="button-transparent">
                <span className="text-input-component-text12">
                  {props.text22 ?? (
                    <Fragment>
                      <span className="text-input-component-text19">Help</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        )}
        {textfieldVisible === true && (
          <div className="text-input-component-container16">
            <div className="text-input-component-container17">
              <div className="text-input-component-container18">
                <textarea
                  rows={6}
                  autoFocus
                  className="text-input-component-textarea"
                ></textarea>
                <div className="text-input-component-container19">
                  <div className="text-input-component-container20">
                    <div className="text-input-component-container21 shadow-style">
                      <svg width="15" height="15" viewBox="0 0 24 24">
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
                  <div className="text-input-component-container22">
                    <span className="text-input-component-text13">
                      {props.text1 ?? (
                        <Fragment>
                          <span className="text-input-component-text18">
                            0 / 9000
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <div className="text-input-component-container23 shadow-style gradient-lila">
                      <svg width="15" height="15" viewBox="0 0 48 48">
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-width="4"
                          stroke-linejoin="round"
                        >
                          <path d="M43 5L29.7 43l-7.6-17.1L5 18.3z"></path>
                          <path
                            d="M43 5L22.1 25.9"
                            stroke-linecap="round"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-input-component-container24">
              <span className="text-input-component-text14">
                {props.text21 ?? (
                  <Fragment>
                    <span className="text-input-component-text15">Help</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

TextInputComponent.defaultProps = {
  text21: undefined,
  text: undefined,
  text11: undefined,
  text1: undefined,
  text22: undefined,
}

TextInputComponent.propTypes = {
  text21: PropTypes.element,
  text: PropTypes.element,
  text11: PropTypes.element,
  text1: PropTypes.element,
  text22: PropTypes.element,
}

export default TextInputComponent
