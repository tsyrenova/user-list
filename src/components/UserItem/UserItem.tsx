import React from 'react';
import style from './UserItem.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../types/const';

type Props = {
    id: string;
    name: string;
    userCity: string;
    userCompany: string;
};

const UserItem = ({ id, name, userCity, userCompany }: Props) => {
    return (
        <article className={style.usersCard}>
            <div className={style.fieldInfo}>
                <p className={style.field}>
                    <span className={style.label}>ФИО:</span>
                    <span className={style.input}>{name}</span>
                </p>
                <p className={style.field}>
                    <span className={style.label}>город:</span>
                    <span className={style.input}>{userCity}</span>
                </p>
                <p className={style.field}>
                    <span className={style.label}>компания:</span>
                    <span className={style.input}>{userCompany}</span>
                </p>
            </div>
            <Link to={`${AppRoute.User}/${id}`}>
                <Button type="link" style={{ fontSize: '14px' }}>
                    Подробнее
                </Button>
            </Link>
        </article>
    );
};

export { UserItem };
