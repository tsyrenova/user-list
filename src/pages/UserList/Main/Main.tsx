import { Col, Typography } from 'antd';
import { UserItem } from '../UserItem/UserItem';

const Main = () => {
    return (
        <Col span={12} style={{ padding: '19px 34px' }}>
            <Typography.Title level={2} style={{ margin: 0, marginBottom: '20px' }}>
                Список пользователей
            </Typography.Title>
            <UserItem />
            <div>
                <p>Найдено 10 пользователей</p>
            </div>
        </Col>
    );
};

export { Main };
