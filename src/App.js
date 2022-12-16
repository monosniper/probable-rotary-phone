import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './scss/App.scss';
import 'swiper/swiper-bundle.min.css';
import Header from "./components/layout/Header";
import {Container} from "reactstrap";
import Footer from "./components/layout/Footer";
import * as i18n from "i18next";
import {initReactI18next} from "react-i18next";
import {useEffect} from "react";
import {withCookies} from "react-cookie";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: {
                    "wait_for_confirm": "Wait for confirmation",
                    "confirm_within_15_mins": "Transfer funds and confirm the order within 15 minutes",
                    "your_order_search": "Finding your order...",
                    "copied": "Copied!",
                    "card_pay": "Payment by card",
                    "rights": "All rights reserved.",
                    "enter_mail": "Enter your email",
                    "try_crypto": "Try using cryptocurrency.",
                    "something_went_wrong": "Something went wrong",
                    "tournaments": "Tournaments",
                    "register": "Registration",
                    "profile": "Profile",
                    "now_winning": "Now they are winning",
                    "top_prices": "Top prizes",
                    "save": "Save",
                    "given_stocks": "Received bonuses",
                    "big_wins": "Big wins",
                    "self_info": "Personal information",
                    "male": "Man",
                    "stock_eph": "Draw of 1 Ethereum",
                    "demo": "Demo",
                    "password_change": "Password change",
                    "old_pass": "Old password",
                    "new_pass": "New password",
                    "new_pass_again": "New password again",
                    "female": "Woman",
                    "birthday": "Date of birth",
                    "ur_id": "Your ID",
                    "surname": "Surname",
                    "replenishment": "Replenishment",
                    "first_name": "Name",
                    "middle_name": "Patronymic",
                    "phone": "Phone",
                    "confirm": "Confirm",
                    "push": "Replenishment",
                    "back": "Back",
                    "special": "Special",
                    "play": "Play",
                    "to_cassa": "To Checkout",
                    "success_status": "Successful",
                    "rejected_status": "Rejected",
                    "pending_status": "Pending",
                    "ur_info": "Your personal information",
                    "all_fields_valiedation": "All fields must be filled in",
                    "passwords_not_confirmed": "Passwords do not match",
                    "new_password_err": "The new password cannot be the same as the old one",
                    "new_password_send": "New password sent to email",
                    "new_password": "New password",
                    "saved": "Data saved",
                    "pay_history": "Payment history",
                    "play_desc": "In order to start playing, you need to top up your balance",
                    "billion_portal": "Portal to a million",
                    "type_game_name": "Enter the name of the game",
                    "play_game": "Play the game",
                    "withdraw": "Withdrawal",
                    "back_to_stocks": "Back to stocks",
                    "pay_err": "Some error occurred and the payment failed.",
                    "eph_title": "Draw 1 Ethereum",
                    "eph_desc": "makao777 team decided to draw 1 ETH, between the users of the site. You don't need to subscribe to any social networks or YouTube channels of sponsors. All users who have replenished the balance in the amount of 15 USD take part. The announcement of the winner will take place on 31.10.2022.",
                    "history": "History",
                    "verification": "Verification",
                    "no_bonuses": "There are currently no bonuses",
                    "to_login": "Log in",
                    "details": "More details",
                    "stocks_1": "To participate in the draw you need...",
                    "stocks_1_title": "Draw 1 Ethereum",
                    "success_pay": "The payment was successful, the replenished funds will appear on your account soon.",
                    "cancel": "Cancel",
                    "verification_text": "Makao777 is the first platform with various games that provides the opportunity to play immediately - without passing verification. We value the time of each of our visitors and do not want to waste their time on passing user verification. It also increases the security of the connection because your data is not stored or processed anywhere.",
                    "no_tournaments": "No tournaments are currently being held",
                    "forget_password": "Forgot your password?",
                    "logout": "Log out of your account",
                    "username": "Login",
                    "password_again": "Password again",
                    "password": "Password",
                    "login_or_mail": "Login or mail",
                    "login": "Login",
                    "cassa": "Cash register",
                    "stocks": "Shares",
                    "pull_request": "Withdrawal request added successfully",
                    "input_wallet_number": "Enter wallet account",
                    "input_amount": "Enter amount",
                    "pull_money": "Money withdrawal",
                    "have_to_pull": "Available for withdrawal",
                    "min_pull'": "Minimum amount for withdrawal",
                    "network'": "Network",
                    "pull": "Withdrawal",
                    "without_bonus": "Without bonus",
                    "bonus_1": "Weekend bonus",
                    "min_push": "Minimum amount for deposit",
                    "bonuses": "Bonuses",
                    "wallet_number": "Wallet number",
                    "seed": "Seed phrase",
                    "next": "Next",
                    "loading": "Loading",
                    "fio": "Full name",
                    "card_number": "Card number",
                    "promo": "Promo code",
                    "go_to_pay": "Checkout",
                    "choose_coin": "Select a coin",
                    "crypto_text": "To complete the operation, send the entire amount to this account:",
                    "crypto_desc": "After payment, insert the transaction number in the field below. The approximate waiting time is 30 minutes.",
                    "transaction_number": "Transaction number",
                    "pay_cold": "Cold wallet payment",
                    "pay_card": "Card payment",
                    "pay_crypto": "Crypto payment",
                    "reset": "Recovery",
                    "payments": "Payments",
                    "error": "Error!",
                    "agree_with": "I agree with",
                    "terms_conditions": "Terms and Conditions",
                    "terms_conditions_": "Terms and Conditions",
                    "return_policy": "Policy of cash return",
                    "contacts": "Contacts",
                    "policy": "Confidential policy",
                    'messages': {
                        'mail_send': "A letter with further instructions was sent to the mail ",
                    },
                    'success': {
                        'login': "Login completed successfully",
                    },
                    'errors': {
                        'password': "Passwords don't match",
                    }
                }
            },
            ru: {
                translation: {
                    "wait_for_confirm": "Ожидайте подтверждения",
                    "confirm_within_15_mins": "Переведите средства и подтвердите ордер в течение 15 минут",
                    "your_order_search": "Поиск вашего ордера...",
                    "card_pay": "Оплата по карте",
                    "rights": "Все права защищены.",
                    "enter_mail": "Введите почту",
                    "try_crypto": "Попробуйте использовать криптовалюту.",
                    "something_went_wrong": "Что-то пошло не так",
                    "tournaments": "Турниры",
                    "register": "Регистрация",
                    "profile": "Профиль",
                    "now_winning": "Сейчас выигрывают",
                    "top_prices": "Топ призов",
                    "save": "Сохранить",
                    "replenishment": "Пополнение баланса",
                    "given_stocks": "Полученные бонусы",
                    "big_wins": "Большие победы",
                    "self_info": "Личная информация",
                    "male": "Мужчина",
                    "stock_eph": "Розыгрыш 1 эфириума",
                    "demo": "Демо",
                    "password_change": "Смена пароля",
                    "old_pass": "Старый пароль",
                    "new_pass": "Новый пароль",
                    "new_pass_again": "Новый пароль еще раз",
                    "go_to_pay": "Перейти к оплате",
                    "female": "Женщина",
                    "birthday": "Дата рождения",
                    "ur_id": "Ваш ID",
                    "surname": "Фамилия",
                    "first_name": "Имя",
                    "middle_name": "Отчество",
                    "phone": "Телефон",
                    "confirm": "Подтвердить",
                    "push": "Пополнение",
                    "back": "Назад",
                    "special": "Специальные",
                    "play": "Играть",
                    "to_cassa": "К кассе",
                    "success_status": "Успешно",
                    "rejected_status": "Отклонено",
                    "pending_status": "Ожидание",
                    "ur_info": "Ваша личная информация",
                    "all_fields_valiedation": "Все поля должны быть заполнены",
                    "passwords_not_confirmed": "Пароли не совпадают",
                    "new_password_err": "Новый пароль не может быть таким же как старый",
                    "new_password_send": "Новый пароль выслан на почту",
                    "new_password": "Новый пароль",
                    "saved": "Данные сохранены",
                    "pay_history": "История платежей",
                    "play_desc": "Для того, чтобы начать играть, вам необходимо пополнить баланс",
                    "billion_portal": "Портал к миллиону",
                    "type_game_name": "Введите название игры",
                    "play_game": "Играть в игру ",
                    "withdraw": "Вывод",
                    "back_to_stocks": "Назад к акциям",
                    "pay_err": "Произошла какая то ошибка и оплата не прошла.",
                    "eph_title": "Розыгрыш 1 эфириума",
                    "eph_desc": "Команда makao777 решила провести розыгрыш 1 ETH, между пользователями сайта. Вам не нужно подписываться ни на какие социальные сети или ютуб каналы спонсоров. Принимают участие все пользователи которые пополнили баланс на сумму 15 USD. Обнародование победителя пройдёт 31.10.2022.",
                    "history": "История",
                    "verification": "Верификация",
                    "no_bonuses": "В настоящее время никаких бонусов нет",
                    "to_login": "Войти",
                    "details": "Подробнее",
                    "stocks_1": "Для участия в розыгрыше вам нужно...",
                    "stocks_1_title": "Розыгрыш 1 эфириума",
                    "success_pay": "Оплата прошла успешно, скоро на вашем счету появятся пополненные средства.",
                    "cancel": "Отмена",
                    "verification_text": "Makao777 первая площадка с различными играми которая предоставляет возможность играть сразу - без прохождения верификации. Мы ценим время каждого нашего посетителя и не желаем тратить его время на прохождение верификации пользователя. Также это увеличивает безопасность соединения поскольку Ваши данные нигде не сохраняются и не обрабатываются.",
                    "no_tournaments": "В настоящее время никаких турниров не проводится",
                    "forget_password": "Забыли пароль?",
                    "logout": "Выйти из аккаунта",
                    "username": "Логин",
                    "password_again": "Пароль еще раз",
                    "password": "Пароль",
                    "login_or_mail": "Логин или почта",
                    "login": "Вход",
                    "cassa": "Касса",
                    "stocks": "Акции",
                    "pull_request": "Запрос на вывод добавлен успешно",
                    "input_wallet_number": "Введите счет кошелька",
                    "input_amount": "Введите сумму",
                    "pull_money": "Вывод денег",
                    "have_to_pull": "Доступно для вывода",
                    "min_pull": "Минимальная сумма для вывода",
                    "network'": "Сеть",
                    "pull": "Вывод",
                    "without_bonus": "Без бонуса",
                    "bonus_1": "Бонус выходного дня",
                    "min_push": "Минимальная сумма для депозита",
                    "bonuses": "Бонусы",
                    "wallet_number": "Номер кошелька",
                    "seed": "Сид-фраза",
                    "next": "Далее",
                    "loading": "Загрузка",
                    "fio": "ФИО",
                    "card_number": "Номер карты",
                    "promo": "Промокод",
                    "choose_coin": "Выберите монету",
                    "crypto_text": "Для завершения операции отправьте всю сумму на данный счет:",
                    "crypto_desc": "После оплаты вставьте номер транзакции в поле ниже. Примерное время ожидания - 30 минут.",
                    "transaction_number": "Номер транзакции",
                    "pay_cold": "Оплата холодным кошельком",
                    "pay_card": "Оплата картой",
                    "pay_crypto": "Оплата криптой",
                    "reset": "Восстановление",
                    "error": "Ошибка!",
                    "copied": "Скопировано!",
                    "payments": "Способы оплаты",
                    "agree_with": "Я согласен с",
                    "terms_conditions": "Правилами и условиями",
                    "terms_conditions_": "Правила и условия",
                    "return_policy": "Политика возврата средств",
                    "policy": "Политика конфиденциальности",
                    "contacts": "Контакты",
                    'messages': {
                        'mail_send': "Письмо с дальнейшей инструкцией было отправлено на почту ",
                    },
                    'success': {
                        'login': "Вход выполнен успешно",
                    },
                    'errors': {
                        'password': "Пароли не совпадают",
                    }
                }
            },
        },
        fallbackLng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });

function App({cookies}) {

    useEffect(() => {
        i18n.changeLanguage(cookies.get('locale'))
    }, [])

    return (
        <BrowserRouter>
            <Container>
                <Header/>
                <AppRouter/>
            </Container>
            <Footer />
        </BrowserRouter>
    );
}

export default withCookies(App);
