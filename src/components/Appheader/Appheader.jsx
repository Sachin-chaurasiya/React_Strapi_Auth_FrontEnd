import { Button, Space } from "antd";
import React from "react";
import { CgWebsite } from "react-icons/cg";
import { useAuthContext } from "../../context/AuthContext";

const AppHeader = () => {
  const { user } = useAuthContext();

  return (
    <Space className="header_space">
      <Button className="header_space_brand" href="/" type="link">
        <CgWebsite size={64} />
      </Button>
      <Space className="auth_buttons">
        {user ? (
          <>
            <Button className="auth_button_login" href="/" type="link">
              {user.username}
            </Button>
            <Button className="auth_button_signUp" href="/" type="primary">
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button className="auth_button_login" href="/" type="link">
              Login
            </Button>
            <Button className="auth_button_signUp" href="/" type="primary">
              SignUp
            </Button>
          </>
        )}
      </Space>
    </Space>
  );
};

export default AppHeader;
