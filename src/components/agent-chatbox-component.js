import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './agent-chatbox-component.css'

const AgentChatboxComponent = (props) => {
  return (
    <div className="agent-chatbox-component-agent-chatbox-component">
      <div className="agent-chatbox-component-container10">
        <div className="agent-chatbox-component-container11">
          <span className="agent-chatbox-component-text10">
            {props.text ?? (
              <Fragment>
                <span className="agent-chatbox-component-text15">
                  What are you Building?
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="agent-chatbox-component-container12">
          <span className="agent-chatbox-component-text11">
            {props.text1 ?? (
              <Fragment>
                <span className="agent-chatbox-component-text16">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="agent-chatbox-component-container13">
          <div className="agent-chatbox-component-container14 box-style">
            <div className="agent-chatbox-component-container15">
              <svg width="30" height="30" viewBox="0 0 24 24">
                <path
                  d="M12 2c2.65 0 5.19 1.06 7.07 2.93l-1.42 1.42A8 8 0 0 0 12 4c-2.12 0-4.16.84-5.65 2.35L4.93 4.93C6.81 3.06 9.35 2 12 2M3.66 6.5l1.45 1.44A8.04 8.04 0 0 0 4 12a8 8 0 0 0 8 8a8 8 0 0 0 8-8c0-1.43-.39-2.83-1.12-4.06l1.46-1.44A9.93 9.93 0 0 1 22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12c0-1.96.58-3.88 1.66-5.5M12 6a6 6 0 0 1 6 6c0 1.59-.63 3.12-1.76 4.24l-1.41-1.41a4.004 4.004 0 0 1-5.66 0l-1.41 1.41A5.97 5.97 0 0 1 6 12a6 6 0 0 1 6-6m0 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="agent-chatbox-component-text12">
                {props.text2 ?? (
                  <Fragment>
                    <span className="agent-chatbox-component-text17">
                      Hier Kommt der Titel hin.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="agent-chatbox-component-container16">
              <span className="agent-chatbox-component-text13">
                {props.text3 ?? (
                  <Fragment>
                    <span className="agent-chatbox-component-text18">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="agent-chatbox-component-container17">
              <span className="agent-chatbox-component-text14">
                {props.text4 ?? (
                  <Fragment>
                    <span className="agent-chatbox-component-text19">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="agent-chatbox-component-container18">
          <div className="agent-chatbox-component-container19">
            <svg viewBox="0 0 24 24" className="agent-chatbox-component-icon12">
              <path
                d="M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H9V4h9zM3 15v-2h2v2zm0-5.5h2v2H3zM10 20h2v2h-2zm-7-1.5v-2h2v2zM5 22c-1.1 0-2-.9-2-2h2zm3.5 0h-2v-2h2zm5 0v-2h2c0 1.1-.9 2-2 2M5 6v2H3c0-1.1.9-2 2-2"
                fill="currentColor"
              ></path>
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              className="agent-chatbox-component-icon14"
            >
              <path
                d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7c0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4c47.6-20.3 78.3-66.8 78.3-118.4c0-12.6-1.8-25-5.4-37c16.8-22.2 26.1-49.4 26.1-77.7c0-12.6-1.8-25-5.4-37c16.8-22.2 26.1-49.4 26.1-77.7c-.2-12.6-2-25.1-5.6-37.1M184 852V568h81v284zm636.4-353l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19l13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7c9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43"
                fill="currentColor"
              ></path>
            </svg>
            <svg
              viewBox="0 0 1024 1024"
              className="agent-chatbox-component-icon16"
            >
              <path
                d="M885.9 490.3c3.6-12 5.4-24.4 5.4-37c0-28.3-9.3-55.5-26.1-77.7c3.6-12 5.4-24.4 5.4-37c0-28.3-9.3-55.5-26.1-77.7c3.6-12 5.4-24.4 5.4-37c0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4c20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3c40.4-23.5 65.5-66.1 65.5-111c0-28.3-9.3-55.5-26.1-77.7M184 456V172h81v284zm627.2 160.4H496.8l9.6 198.4c.6 11.9-4.7 23.1-14.6 30.5c-6.1 4.5-13.6 6.8-21.1 6.7a44.28 44.28 0 0 1-42.2-32.3L329 459.2V172h415.4a56.85 56.85 0 0 1 33.6 51.8c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4l21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4l21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-14 25.5l21.9 19a56.76 56.76 0 0 1 19.6 43c0 19.1-11 37.5-28.8 48.4"
                fill="currentColor"
              ></path>
            </svg>
            <svg viewBox="0 0 20 20" className="agent-chatbox-component-icon18">
              <path
                d="M19.295 12a.704.704 0 0 1 .705.709v3.204a.704.704 0 0 1-.7.709a.704.704 0 0 1-.7-.709v-1.125C16.779 17.844 13.399 20 9.757 20c-4.41 0-8.106-2.721-9.709-6.915a.71.71 0 0 1 .4-.917c.36-.141.766.04.906.405c1.4 3.662 4.588 6.01 8.403 6.01c3.371 0 6.52-2.182 7.987-5.154l-1.471.01a.704.704 0 0 1-.705-.704a.705.705 0 0 1 .695-.714zm-9.05-12c4.408 0 8.105 2.721 9.708 6.915a.71.71 0 0 1-.4.917a.697.697 0 0 1-.906-.405c-1.4-3.662-4.588-6.01-8.403-6.01c-3.371 0-6.52 2.182-7.987 5.154l1.471-.01a.704.704 0 0 1 .705.704a.705.705 0 0 1-.695.714L.705 8A.704.704 0 0 1 0 7.291V4.087c0-.392.313-.709.7-.709s.7.317.7.709v1.125C3.221 2.156 6.601 0 10.243 0"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

AgentChatboxComponent.defaultProps = {
  text: undefined,
  text1: undefined,
  text2: undefined,
  text3: undefined,
  text4: undefined,
}

AgentChatboxComponent.propTypes = {
  text: PropTypes.element,
  text1: PropTypes.element,
  text2: PropTypes.element,
  text3: PropTypes.element,
  text4: PropTypes.element,
}

export default AgentChatboxComponent
