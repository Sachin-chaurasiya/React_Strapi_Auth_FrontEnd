import React from "react";
import { Col, Layout, message, Row } from "antd";
import SocialCards from "./components/SocialCards/SocialCards";
import { API } from "./constant";
import { useState } from "react";
import { useEffect } from "react";
import AppHeader from "./components/Appheader/Appheader";
const { Header, Content } = Layout;

const App = () => {
  const [profiles, setProfiles] = useState([]);

  const fetchProfiles = async () => {
    try {
      const response = await fetch(`${API}/users`);
      const data = await response.json();
      setProfiles(data ?? []);
    } catch (error) {
      console.error(error);
      message.error("Error while fetching profiles!");
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <Layout>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <Header>
            <AppHeader />
          </Header>
        </Col>
        <Col span={22} offset={1}>
          <Content>
            <SocialCards profiles={profiles} />
          </Content>
        </Col>
      </Row>
    </Layout>
  );
};

export default App;
