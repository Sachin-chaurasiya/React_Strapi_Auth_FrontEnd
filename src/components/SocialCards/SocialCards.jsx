import {
  Button,
  Card,
  Col,
  Image,
  message,
  Row,
  Space,
  Spin,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import { CgWebsite } from "react-icons/cg";
import { SiGmail } from "react-icons/si";
import { API, AVATAR_API } from "../../constant";

const SocialCards = () => {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProfiles = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/users`);
      const data = await response.json();
      setProfiles(data ?? []);
    } catch (error) {
      console.error(error);
      message.error("Error while fetching profiles!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  if (isLoading) {
    return <Spin size="large" />;
  }

  return (
    <Row gutter={[32, 32]}>
      {profiles.map((profile, index) => (
        <Col md={8} lg={8} sm={24} xs={24} key={`${profile.id}_${index}`}>
          <Card className="social_card">
            <Space
              className="social_card_space"
              direction="vertical"
              align="center"
            >
              <Image
                className="social_image"
                preview={false}
                src={
                  profile.avatar_url ??
                  `${AVATAR_API}?name=${profile.username}&background=1890ff&color=fff`
                }
              />
              <Typography.Title level={5}>{profile.username}</Typography.Title>
              <Typography.Paragraph>{profile.about}</Typography.Paragraph>
              <Space size={16} wrap>
                {profile.twitter_username && (
                  <Button
                    className="social_button twitter"
                    href={`https://twitter.com/${profile.twitter_username}`}
                    type="link"
                    target="_blank"
                  >
                    <AiFillTwitterCircle size={24} />
                  </Button>
                )}
                {profile.linkedin_username && (
                  <Button
                    className="social_button linkedin"
                    href={`https://www.linkedin.com/in/${profile.linkedin_username}`}
                    type="link"
                    target="_blank"
                  >
                    <AiFillLinkedin size={24} />
                  </Button>
                )}
                {profile.github_username && (
                  <Button
                    className="social_button github"
                    href={`https://github.com/${profile.github_username}`}
                    type="link"
                    target="_blank"
                  >
                    <AiFillGithub size={24} />
                  </Button>
                )}
                {profile.website_url && (
                  <Button
                    className="social_button website"
                    href={profile.website_url}
                    type="link"
                    target="_blank"
                  >
                    <CgWebsite size={24} />
                  </Button>
                )}
                {profile.email && (
                  <Button
                    className="social_button gmail"
                    href={`mailto:${profile.email}`}
                    type="link"
                    target="_blank"
                  >
                    <SiGmail size={24} />
                  </Button>
                )}
              </Space>
            </Space>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default SocialCards;
