import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
import { Row } from 'antd';
import { SortUser } from './components/sortUser/SortUser';
import { Main } from './pages/UserList/Main/Main';
import { AppRoute } from './types/const';
import { UserInfo } from './pages/User/UserInfo/UserInfo';

const App = () => {
    return (
        <Row style={{ height: '100vh' }}>
            <SortUser />
            <Routes>
                <Route path={AppRoute.Main} element={<Main />} />
                <Route path={AppRoute.User} element={<UserInfo />} />
            </Routes>
        </Row>
    );
};

export { App };
