import React from "react";
import { Layout, Row, Col } from "antd";
import { withRouter } from "next/router";
import useSWR from "swr";

import { NavBar } from "../components/NavBar";
import FacilityCard from "../components/FacilityCard";

const { Header, Content } = Layout;

const HomePage = ({ router }) => {

  console.log(process.env.API_BASEURL)

  const { data: facilities, mutate } = useSWR(
    `http://localhost:1337/facilities${router.query.slug ? `?category.slug=${router.query.slug}` : ""}`
  );

  return (
    <Layout className="layout">
      <Header style={{ overflow: "hidden" }}>
        <div className="logo" />
        <NavBar />
      </Header>
      <Content className="content">
        <div className="innercontent">
          <Row gutter={[16, 16]}>
            {(facilities || []).map((facility) => (
              <FacilityCard {...facility} />
            ))}
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default withRouter(HomePage);
