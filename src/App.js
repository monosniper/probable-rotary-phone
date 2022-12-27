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
                    },
                    'categories': {
                        'slots': "Slots",
                        'all_casino': "All casino",
                        'virtual_sport': "Virtual sport",
                        'drawings': "Drawings",
                        'sport': "Sport",
                        'live_casino': "Live casino",
                    },
                    'drawings': {
                        '1': 'Every guest is always precious and welcome on Rajbet, that\'s why we decided to create a special Loyalty program for you. Every deposit ever made on Rajbet is calculated and grants you loyalty level that unlocks certain benefits, such as higher cashback and various bonuses from you personal manager.',
                        '2': 'How to activate bonus:\n' +
                            '\n' +
                            '1. Login to your RajBet account\n' +
                            '2. Make a deposit in Cryptocurrency\n' +
                            '3. Contact RajBet chat support or your personal manager to activate bonus\n' +
                            '4. Receive 7% bonus on your deposit without any wager',
                        '3': 'Discover a brand-new offer that can\'t be found anywhere else! Become a part of sports betting competition with a prize pool of 500,000 INR exclusively on Rajbet.com!\n' +
                            '\n' +
                            'The tournament\'s goal is to score the most points on the leaderboard. During the promotion time, points are rewarded for all calculated bets placed by players, and the points received are proportional to the amount of the bets placed.\n' +
                            '\n' +
                            'All kinds and types of bets participate in the tournament.\n' +
                            '\n' +
                            'Example: a player made 5 bets of ₹1000 per game day. If a player wins or loses a bet, he or she will get 5000 points at the end of the game day.\n' +
                            '\n' +
                            'You can track your progress and the progress of other players on the leaderboard on the sports betting page.',
                        '4': '1. Click the "Subscribe" button;\n' +
                            '\n' +
                            '2. Earn tournament points awarded for win multiplier. The multiplier is calculated as follows: Win / Bet x1 = 100 points;\n' +
                            '\n' +
                            '3. Points are awarded automatically in any casino game\n' +
                            '\n' +
                            '4. Prizes will be credited within 2 hours after the end of the tournament without wager;\n' +
                            '\n' +
                            'Prize pool:\n' +
                            '\n' +
                            '1st place - ₹1000\n' +
                            '\n' +
                            '2nd place - ₹1000\n' +
                            '\n' +
                            '3rd place - ₹1000',
                        '5': 'How to activate bonus:\n' +
                            'Login to your RajBet account \n' +
                            'Press "Subscribe" button under this bonus \n' +
                            'Make a deposit from 1000 INR \n' +
                            'Receive 100% bonus on your deposit amount\n' +
                            '\n' +
                            'Terms and Conditions\n' +
                            '\n' +
                            'This bonus is available once per player only on first deposit.\n' +
                            '\n' +
                            'With an active bonus, bets are debited from the real balance.\n' +
                            '\n' +
                            'The bonus amount of 100% of your first deposit will be credited to your Bonus Account. \n' +
                            '\n' +
                            'Max. bonus amount is ₹10,000  The minimum deposit for this bonus is ₹1000. \n' +
                            '\n' +
                            'Time to use the bonus - 10 days.  In case a Bonus is being cancelled - bonus balance burns out.\n' +
                            '\n' +
                            'To withdraw funds, the bonus amount must be rolled over 10 (ten) times. \n' +
                            '\n' +
                            'Wagering possible only with bets on sport, bet odds must be from 1.75 to 3.5. \n' +
                            '\n' +
                            'For wagering, you can use bets of all types (single, combo, system) for events in pre-match and live.\n' +
                            '\n' +
                            'The bonus will be credited to the Real Account only after the wager is completed.',
                    }
                },
            },
            ru: {
                translation: {
                    'categories': {
                        'slots': "Слоты",
                        'all_casino': "Все казино",
                        'virtual_sport': "Виртуальный спорт",
                        'drawings': "Акции",
                        'sport': "Спорт",
                        'live_casino': "Live казино",
                    },
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
                    },
                    'drawings': {
                        '1': 'Каждый гость всегда ценен и желанен на Rajbet, именно поэтому мы решили создать для вас специальную программу лояльности. Каждый депозит, когда-либо внесенный на Rajbet, рассчитывается и обеспечивает ваш уровень лояльности, который открывает определенные преимущества, такие как более высокий кэшбэк и различные бонусы от вашего личного менеджера.',
                        '2': 'Как активировать бонус:\n' +
                            '\n' +
                            '1. Войдите в свой аккаунт RajBet\n' +
                            '2. Внесите депозит в криптовалюте\n' +
                            '3. Обратитесь в службу поддержки RajBet в чате или к своему персональному менеджеру, чтобы активировать бонус\n' +
                            '4. Получите 7% бонус на свой депозит без какой-либо ставки',
                        '3': 'Откройте для себя совершенно новое предложение, которое нельзя найти больше нигде! Станьте участником соревнования по ставкам на спорт с призовым фондом в 500 000 индийских рупий исключительно на Rajbet.com !\n' +
                        '\n' +
                            'Цель турнира - набрать наибольшее количество очков в таблице лидеров. Во время проведения акции баллы начисляются за все рассчитанные ставки, сделанные игроками, и полученные баллы пропорциональны сумме сделанных ставок.\n' +
                        '\n' +
                            'В турнире участвуют все виды ставок.\n' +
                        '\n' +
                                'Пример: игрок сделал 5 ставок по 1000 йен за игровой день. Если игрок выиграет или проиграет ставку, он или она получит 5000 очков в конце игрового дня.\n' +
                            '\n' +
                            "Вы можете отслеживать свой прогресс и прогресс других игроков в таблице лидеров на странице ставок на спорт.",
                        '4': '1. Нажмите кнопку "Подписаться";\n' +
                            '\n' +
                            '2. Зарабатывайте турнирные очки, начисляемые за множитель выигрыша. Множитель рассчитывается следующим образом: Выигрыш/ставка х1 = 100 очков;\n' +
                            '\n' +
                            '3. Баллы начисляются автоматически в любой игре казино\n' +
                            '\n' +
                            '4. Призы будут зачислены в течение 2 часов после окончания турнира без отыгрыша;\n' +
                            '\n' +
                            'Призовой фонд:\n' +
                            '\n' +
                            '1-е место - 1000 ₹\n' +
                            '\n' +
                            '2-е место - 1000 ₹\n' +
                            '\n' +
                            '3-е место - 1000 йен',
                        '5': 'Как активировать бонус:\n' +
                            "Войдите в свой аккаунт RajBet \n" +
                            'Нажмите кнопку "Подписаться" под этим бонусом \n' +
                            "Внесите депозит от 1000 индийских рупий \n" +
                            "Получите 100% бонус на сумму вашего депозита\n" +
                            '\n' +
                            "Правила и условия\n" +
                            '\n' +
                            'Этот бонус доступен один раз для каждого игрока только при первом депозите.\n' +
                        '\n' +
                            'При активном бонусе ставки списываются с реального баланса.\n' +
                        '\n' +
                            'Сумма бонуса в размере 100% от вашего первого депозита будет зачислена на ваш бонусный счет. \n' +
                        '\n' +
                                'Максимальная сумма бонуса составляет 10 000 йен. Минимальный депозит для этого бонуса составляет 1000 йен. \n' +
                            '\n' +
                            'Время использования бонуса - 10 дней.  В случае отмены бонуса - бонусный баланс сгорает.\n' +
                        '\n' +
                            'Чтобы вывести средства, сумма бонуса должна быть увеличена более 10 (десяти) раз. \n' +
                        '\n' +'Отыгрыш возможен только со ставками на спорт, коэффициенты ставок должны быть от 1,75 до 3,5. \n' +
                        '\n' +
                            'Для отыгрыша вы можете использовать ставки всех типов (одиночные, комбинированные, системные) на события в предматчевом режиме и в режиме реального времени.\n' +
                        '\n' +
                            'Бонус будет зачислен на реальный счет только после завершения отыгрыша.',
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
