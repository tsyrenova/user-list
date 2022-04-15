import { UserList } from '@components/UserList/UserList';
import { Col, Typography } from 'antd';

const Main = () => {
    return (
        <Col span={12} style={{ padding: '19px 34px' }}>
            <Typography.Title level={2} style={{ margin: 0, marginBottom: '20px' }}>
                Список пользователей
            </Typography.Title>
            <UserList />
        </Col>
    );
};

export { Main };
