import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
import { Row } from 'antd';
import { SortUser } from './components/sortUser/SortUser';
import { AppRoute } from './types/const';
import { UserInfo } from './components/UserInfo/UserInfo';
import { Main } from '@components/Main/Main';

const App = () => {
    return (
        <Row style={{ height: '100vh' }}>
            <SortUser />
            <Routes>
                <Route path={AppRoute.Main} element={<Main />} />
                <Route path={`${AppRoute.User}/:id`} element={<UserInfo />} />
            </Routes>
        </Row>
    );
};

export { App };
