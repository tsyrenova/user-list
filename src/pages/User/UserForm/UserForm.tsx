import { Button, Col, Form, Input, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const UserForm = () => {
    return (
        <Form layout="vertical">
            <Row justify="center" style={{ border: '2px solid #D8D8D8', borderRadius: '5px', paddingTop: '10px' }}>
                <Col span={20}>
                    <Form.Item label="Name" name="Name">
                        <Input placeholder="Please input" />
                    </Form.Item>
                    <Form.Item name="UserName" label="User name">
                        <Input placeholder="Username" />
                    </Form.Item>
                    <Form.Item name="Email" label="Email" rules={[{ required: true, message: 'Please input Email!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Street" name="Street">
                        <Input placeholder="Please input" />
                    </Form.Item>
                    <Form.Item label="City" name="City">
                        <Input placeholder="Please input" />
                    </Form.Item>
                    <Form.Item label="ZipCode" name="Zip code">
                        <Input placeholder="Please input" />
                    </Form.Item>
                    <Form.Item
                        name="Phone"
                        label="Phone"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="Website"
                        label="Website"
                        rules={[{ required: true, message: 'Please input website!' }]}
                    >
                        <Input placeholder="website" />
                    </Form.Item>
                    <Form.Item name="Comment" label="Comment">
                        <TextArea placeholder="website" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary">Отправить</Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export { UserForm };
