import { Button } from 'antd';
import { users } from '../../../mocks/User';
import { useParams } from 'react-router-dom';
import style from './UserItem.css';

const UserItem = () => {
    const { id } = useParams();
    const user = users.find((currentUser) => currentUser.id === Number(id)) || users[0];

    return (
        <article className={style.usersCard}>
            <div className={style.fieldInfo}>
                <p className={style.field}>
                    <span className={style.label}>ФИО:</span>
                    <span className={style.input}>{user.name}</span>
                </p>
                <p className={style.field}>
                    <span className={style.label}>город:</span>
                    <span className={style.input}>{user.address.city}</span>
                </p>
                <p className={style.field}>
                    <span className={style.label}>компания:</span>
                    <span className={style.input}>{user.company.name}</span>
                </p>
            </div>
            <Button type="link" style={{ fontSize: '14px' }}>
                Подробнее
            </Button>
        </article>
    );
};

export { UserItem };
