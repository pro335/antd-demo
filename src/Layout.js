import { Row, Col } from "antd";
import Card from "./Card.js";

function Layout({ users }) {
  return (
    <Row>
      {users.map((user) => {
        return (
          <Col key={user.id} lg={6} md={8} sm={12} xs={24} >
            <Card user={user} />
          </Col>
        );
      })}
    </Row >
  );
}

export default Layout;
