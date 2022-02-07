import { Card, Typography, Space, Image } from 'antd';
import { EditOutlined, MailOutlined, PhoneOutlined, GlobalOutlined, HeartOutlined, DeleteFilled } from '@ant-design/icons';
const { Text, Title } = Typography;

function MyCard({ user }) {
  return (
    <Card
      style={{ width: 320, margin: "20px auto" }}
      cover={
        <Image
          src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
        />
      }
      actions={[
        <HeartOutlined style={{ color: "red" }} />,
        <EditOutlined key="edit" />,
        <DeleteFilled />,
      ]}
    >
      <Title level={4}>{user.name}</Title>
      <Space>
        <MailOutlined style={{ color: "rgba(0, 0, 0, 0.45)", marginRight: "10px" }} /><Text type="secondary">{user.email}</Text>
      </Space>
      <Space>
        <PhoneOutlined style={{ color: "rgba(0, 0, 0, 0.45)", marginRight: "10px" }} /><Text type="secondary">{user.phone}</Text>
      </Space>
      <Space>
        <GlobalOutlined style={{ color: "rgba(0, 0, 0, 0.45)", marginRight: "10px" }} /><Text type="secondary">{user.website}</Text>
      </Space>
    </Card>
  );
}

export default MyCard;
