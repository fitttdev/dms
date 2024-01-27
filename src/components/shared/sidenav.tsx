import './sidenav.css';
import logo from '../../assets/images/logo.png';

export const SideNav = () => {
  return (
    <div className="sidenav">
      <div className="user-profile">
        <div className="logo-header">
          <img src={logo} alt="logo" />
          <h3>Document Manager</h3>
        </div>
        <div className="user-detail">
          {/* <div className="profile-picture">
            <img src={profilePic} alt="profile" />
          </div> */}
          <div className="user-name">
            Nima Yonten
          </div>
          <div className="user-email">
            nima.yonten1729@gmail.com
          </div>
          <div className="hr-line"></div>
        </div>
      </div>
      <div className="menu-items">
        <div className="all-documents">
          <div className="left-col">
          </div>
          <div className="document-icon">
          </div>
          <div className="forward-arrow">
          </div>
        </div>
        <div className="shared-with-me">
          <div className="share-icon">

          </div>
          <div className="shared-with-me-text">
            Shared with me
          </div>
        </div>
        <div className="my-files">
          My Files
        </div>
        <div className="users">
          Users
        </div>
        <div className="create-templates">
          Create Templates
        </div>
        <div className="empty-space">
          Empty Space
        </div>
        <div className="view-profile">
          View Profile
        </div>
      </div>
    </div>
  )
}

export default SideNav;