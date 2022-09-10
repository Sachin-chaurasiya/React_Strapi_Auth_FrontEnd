import { Button, Space } from "antd";
import React from "react";
import { CgWebsite } from "react-icons/cg";

const AppHeader = () => {
  return (
    <Space className="header_space">
      <Button className="header_space_brand" href="/" type="link">
        <CgWebsite size={64} />
      </Button>
      <Space className="auth_buttons">
        <Button className="auth_button_login" href="/" type="link">
          Login
        </Button>
        <Button className="auth_button_signUp" href="/" type="primary">
          SignUp
        </Button>
      </Space>
    </Space>
  );
};

export default AppHeader;
