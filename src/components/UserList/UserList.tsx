import { UserItem } from '@components/UserItem/UserItem';
import { users } from './../../mocks/User';

const UserList = () => {
    return (
        <div>
            {users.map((user) => (
                <UserItem
                    key={user.id}
                    name={user.name}
                    id={String(user.id)}
                    userCity={user.address.city}
                    userCompany={user.company.name}
                />
            ))}
            <div>
                <p>Найдено {users.length} пользователей</p>
            </div>
        </div>
    );
};

export { UserList };
