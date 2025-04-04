import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import SidebarLeftComponent from '../components/sidebar-left-component'
import AgentChatboxComponent from '../components/agent-chatbox-component'
import ClientChatboxComponent from '../components/client-chatbox-component'
import TextInputComponent from '../components/text-input-component'
import SidebarRightComponent from '../components/sidebar-right-component'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Traffls-Agent-Manager</title>
        <meta property="og:title" content="Traffls-Agent-Manager" />
      </Helmet>
      <div className="home-main-container">
        <SidebarLeftComponent
          text={
            <Fragment>
              <span className="home-text10">Traffls</span>
            </Fragment>
          }
          count={
            <Fragment>
              <span className="home-text11">3</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text12">Beta</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text13">Files</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text14">Apps</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text15">Documentation</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text16">New chat</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-text17">Your Account</span>
            </Fragment>
          }
          count1={
            <Fragment>
              <span className="home-text18">3</span>
            </Fragment>
          }
          count2={
            <Fragment>
              <span className="home-text19">3</span>
            </Fragment>
          }
          count3={
            <Fragment>
              <span className="home-text20">3</span>
            </Fragment>
          }
          btnLable={
            <Fragment>
              <span className="home-text21">Conversations</span>
            </Fragment>
          }
          rootClassName="sidebar-left-componentroot-class-name"
        ></SidebarLeftComponent>
        <div className="home-conversation-container">
          <div className="home-chat">
            <div className="home-chat-content">
              <AgentChatboxComponent
                text={
                  <Fragment>
                    <span className="home-text22">What are you Building?</span>
                  </Fragment>
                }
                text1={
                  <Fragment>
                    <span className="home-text23">
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
                }
                text2={
                  <Fragment>
                    <span className="home-text24">
                      Hier Kommt der Titel hin.
                    </span>
                  </Fragment>
                }
                text3={
                  <Fragment>
                    <span className="home-text25">
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
                }
                text4={
                  <Fragment>
                    <span className="home-text26">
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
                }
              ></AgentChatboxComponent>
              <ClientChatboxComponent
                text={
                  <Fragment>
                    <span className="home-text27">
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
                }
              ></ClientChatboxComponent>
            </div>
          </div>
          <TextInputComponent
            text={
              <Fragment>
                <span className="home-text28">Type something here...</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home-text29">0 / 9000</span>
              </Fragment>
            }
            text11={
              <Fragment>
                <span className="home-text30">Upload Files</span>
              </Fragment>
            }
            text21={
              <Fragment>
                <span className="home-text31">Help</span>
              </Fragment>
            }
            text22={
              <Fragment>
                <span className="home-text32">Help</span>
              </Fragment>
            }
          ></TextInputComponent>
        </div>
        <SidebarRightComponent
          text={
            <Fragment>
              <span className="home-text33"> Setup</span>
            </Fragment>
          }
        ></SidebarRightComponent>
      </div>
    </div>
  )
}

export default Home
