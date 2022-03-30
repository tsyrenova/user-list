import { Button, Col, Space, Typography } from 'antd';

const SortUser = () => {
    return (
        <Col span={4} style={{ backgroundColor: '#BDBDBD', padding: '35px 20px' }}>
            <Typography.Title level={2}>Сортировка</Typography.Title>
            <Space direction="vertical" size={14}>
                <Button type="primary" style={{ borderRadius: '5px' }}>
                    по городу
                </Button>
                <Button type="primary" style={{ borderRadius: '5px' }}>
                    по компании
                </Button>
            </Space>
        </Col>
    );
};

export { SortUser };
