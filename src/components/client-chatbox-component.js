import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './client-chatbox-component.css'

const ClientChatboxComponent = (props) => {
  return (
    <div className="client-chatbox-component-client-chatbox-component">
      <div className="client-chatbox-component-container">
        <span className="client-chatbox-component-text1">
          {props.text ?? (
            <Fragment>
              <span className="client-chatbox-component-text2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
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
  )
}

ClientChatboxComponent.defaultProps = {
  text: undefined,
}

ClientChatboxComponent.propTypes = {
  text: PropTypes.element,
}

export default ClientChatboxComponent
