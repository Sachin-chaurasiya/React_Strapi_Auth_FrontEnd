import React from "react";
import { Button, Card, Col, Form, Input, Row, Spin } from "antd";
import { useAuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { user, isLoading } = useAuthContext();

  if (isLoading) {
    return <Spin size="large" />;
  }

  return (
    <Card className="profile_page_card">
      <Form
        layout="vertical"
        initialValues={{
          username: user?.username,
          email: user?.email,
          twitter_username: user?.twitter_username,
          linkedin_username: user?.linkedin_username,
          github_username: user?.github_username,
          avatar_url: user?.avatar_url,
          website_url: user?.website_url,
          about: user?.about,
        }}
      >
        <Row gutter={[16, 16]}>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Username is required!",
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email is required!",
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Avatar Url"
              name="avatar_url"
              rules={[
                {
                  type: "url",
                },
              ]}
            >
              <Input placeholder="Avatar Url" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="About"
              name="about"
              rules={[
                {
                  required: true,
                  type: "string",
                  max: 120,
                },
              ]}
            >
              <Input.TextArea placeholder="About" rows={6} />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Twitter Username"
              name="twitter_username"
              rules={[
                {
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Twitter Username" />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="LinkedIn Username"
              name="linkedin_username"
              rules={[
                {
                  type: "string",
                },
              ]}
            >
              <Input placeholder="LinkedIn Username" />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Github Username"
              name="github_username"
              rules={[
                {
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Github Username" />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Website Url"
              name="website_url"
              rules={[
                {
                  type: "url",
                },
              ]}
            >
              <Input placeholder="Website Url" />
            </Form.Item>
          </Col>
        </Row>
        <Button
          className="profile_save_btn"
          htmlType="submit"
          type="primary"
          size="large"
        >
          Save
        </Button>
      </Form>
    </Card>
  );
};

export default Profile;
