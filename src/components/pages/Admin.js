import React from 'react';
import {Link, Outlet, useMatch, useResolvedPath} from "react-router-dom";
import {
    COLD_TRANSACTIONS_ROUTE,
    PULLS_MONEY_ROUTE,
    PUSHS_MONEY_ROUTE,
    SETTINGS_ROUTE, TRANSACTIONS_ROUTE,
    USERS_ROUTE,
    VERIFICATIONS_ROUTE
} from "../../utils/routes";
import {Container} from "reactstrap";
import ContentBlock from "../ContentBlock";

const Admin = () => {
    let resolvedPushMoneyRoute = useResolvedPath(USERS_ROUTE);
    let matchPushMoneyRoute = useMatch({ path: resolvedPushMoneyRoute.pathname, end: true});

    let resolvedPullMoneyRoute = useResolvedPath(PULLS_MONEY_ROUTE);
    let matchPullMoneyRoute = useMatch({ path: resolvedPullMoneyRoute.pathname, end: true});

    let transactionsRoute = useResolvedPath(TRANSACTIONS_ROUTE);
    let matchTransactionsRoute = useMatch({ path: transactionsRoute.pathname, end: true});

    let coldTransactionsRoute = useResolvedPath(COLD_TRANSACTIONS_ROUTE);
    let matchColdTransactionsRoute = useMatch({ path: coldTransactionsRoute.pathname, end: true});

    let resolvedPushsMoneyRoute = useResolvedPath(PUSHS_MONEY_ROUTE);
    let matchPushsMoneyRoute = useMatch({ path: resolvedPushsMoneyRoute.pathname, end: true});

    let resolvedVerificationsRoute = useResolvedPath(VERIFICATIONS_ROUTE);
    let matchVerificationsRoute = useMatch({ path: resolvedVerificationsRoute.pathname, end: true});

    let resolvedSettingsRoute = useResolvedPath(SETTINGS_ROUTE);
    let matchSettingsRoute = useMatch({ path: resolvedSettingsRoute.pathname, end: true});

    return (
        <Container>
            <div className="profile-menu">
                <Link className={matchPushMoneyRoute ? "profile-menu-item active" : "profile-menu-item"} to={USERS_ROUTE}>Пользователи</Link>
                <Link className={matchPullMoneyRoute ? "profile-menu-item active" : "profile-menu-item"} to={PULLS_MONEY_ROUTE}>Запросы на вывод</Link>
                <Link className={matchTransactionsRoute ? "profile-menu-item active" : "profile-menu-item"} to={TRANSACTIONS_ROUTE}>Транзакции</Link>
                <Link className={matchColdTransactionsRoute ? "profile-menu-item active" : "profile-menu-item"} to={COLD_TRANSACTIONS_ROUTE}>Пополнения хол. кошельком</Link>
                <Link className={matchPushsMoneyRoute ? "profile-menu-item active" : "profile-menu-item"} to={PUSHS_MONEY_ROUTE}>Пополнения</Link>
                {/*<Link className={matchVerificationsRoute ? "profile-menu-item active" : "profile-menu-item"} to={VERIFICATIONS_ROUTE}>Верификация</Link>*/}
                <Link className={matchSettingsRoute ? "profile-menu-item active" : "profile-menu-item"} to={SETTINGS_ROUTE}>Настройки</Link>
            </div>

            <ContentBlock>
                <Outlet />
            </ContentBlock>
        </Container>
    );
};

export default Admin;