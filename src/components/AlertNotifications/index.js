// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderSuccessContainer = () => (
    <Notification>
      <AiFillCheckCircle className="icon-container  success" />
      <div className="success-container">
        <h1 className="heading success">Success</h1>
        <p>You can access all the files in the folder</p>
      </div>
    </Notification>
  )

  const renderErrorContainer = () => (
    <Notification>
      <RiErrorWarningFill className="icon-container error" />
      <div className="success-container">
        <h1 className="heading error">Error</h1>
        <p>sorry, you are not authorized to have access to delete the file</p>
      </div>
    </Notification>
  )

  const renderWarningContainer = () => (
    <Notification>
      <MdWarning className="icon-container warning" />
      <div className="success-container">
        <h1 className="heading warning">Warning</h1>
        <p>Viewers of this file can see comments and suggestions</p>
      </div>
    </Notification>
  )

  const renderInfoContainer = () => (
    <Notification>
      <MdInfo className="icon-container info" />
      <div className="success-container">
        <h1 className="heading info">info</h1>
        <p>Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )

  return (
    <div className="main-container">
      <div className="sub-container">
        <h1>Alert Notifications</h1>
        {renderSuccessContainer()}
        {renderErrorContainer()}
        {renderWarningContainer()}
        {renderInfoContainer()}
      </div>
    </div>
  )
}

export default AlertNotifications
