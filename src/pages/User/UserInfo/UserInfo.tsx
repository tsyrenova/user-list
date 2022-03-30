import { Button, Col, Row, Typography } from 'antd';
import { UserForm } from '../UserForm/UserForm';

const UserInfo = () => {
    return (
        <Col span={12} style={{ padding: '19px 34px' }}>
            <Row justify="space-between">
                <Col span={12}>
                    <Typography.Title level={2} style={{ margin: 0, marginBottom: '20px' }}>
                        Профиль пользователя
                    </Typography.Title>
                </Col>
                <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button type="primary" size="large" style={{ borderRadius: '5px' }}>
                        Редактировать
                    </Button>
                </Col>
                <Col span={24}>
                    <UserForm />
                </Col>
            </Row>
        </Col>
    );
};

export { UserInfo };
