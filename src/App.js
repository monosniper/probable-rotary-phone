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
                    "eph_desc": "makao777 team decided to draw 1 ETH, between the users of the site. You don't need to subscribe to any social networks or YouTube channels of sponsors. All users who have replenished the balance in the amount of 15 USD take part. The announcement of the winner will take place on 31.10.2023.",
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
                    "pay_card": "Interac",
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
                        '1': 'Every guest is always precious and welcome on Makao, that\'s why we decided to create a special Loyalty program for you. Every deposit ever made on Makao is calculated and grants you loyalty level that unlocks certain benefits, such as higher cashback and various bonuses from you personal manager.',
                        '2': 'How to activate bonus:\n' +
                            '\n' +
                            '1. Login to your Makao account\n' +
                            '2. Make a deposit in Cryptocurrency\n' +
                            '3. Contact Makao chat support or your personal manager to activate bonus\n' +
                            '4. Receive 7% bonus on your deposit without any wager',
                        '3': 'Discover a brand-new offer that can\'t be found anywhere else! Become a part of sports betting competition with a prize pool of 500,000 INR exclusively on makao777.com!\n' +
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
                            'Login to your Makao account \n' +
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
                    },
                    'terms_and_conditions': 'Welcome to makao777.com.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        'To use our services, you must create an account and accept the terms and conditions below.\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        '1.1. These Terms and Conditions (hereinafter “T&C”) constitute the agreement between Win Sector N.V., ID: 156833, Address: Kaya Seru Cueba 16, Curaçao (hereinafter “We” or “Us”) operating the website makao777.com (hereinafter “Site”) and you (hereinafter “You” or “Gambler”).\n' +
                        '\n' +
                        '1.2. The deposits/withdrawals on Site are either processed by Us or our subsidiary established under the laws of Cyprus – WIN SECTOR LTD, ID HE422614, registered address at Stratigou Timagia, 26, SIANTONA BUILDING, Office 102 6047, Larnaca, Cyprus.\n' +
                        '\n' +
                        '1.3. These T&C entered into force on the 16th of December 2021.\n' +
                        '\n' +
                        '1.4. You are required to read the T&C before You start using the services of the Site. If you do not agree to these T&C, you are not allowed to use the services of the Site.\n' +
                        '\n' +
                        '1.5. Registration at and visits to the Site are confirmation of your agreement with the T&C.\n' +
                        '\n' +
                        '1.6. The Site reserves the right to amend the T&C at any time.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        '2.1 To the extent permitted by applicable law, we will not compensate you and will not be liable for any direct damage nor for any indirect, special or consequential damage loss of any kind or any loss of opportunities, income, actual or anticipated profits, business, contracts, goodwill or reputation, anticipated savings, damage to or corruption of data, whether or not we were advised in advance of the possibility of any such loss/damage), which you may suffer while playing or using on the site.\n' +
                        '\n' +
                        '2.2 In the event that we are held liable for any event under the t&c, our total aggregate liability to you under or in connection with the t&c shall not exceed (a) the value of bets and or wagers you placed via your account, or (b) 45000 INR in aggregate, whichever is lower.\n' +
                        '\n' +
                        '2.3 We strongly recommend that you (i) take care to verify the suitability and compability of the service with your own computer equipment prior to use; and (ii) take reasonable precautions to protect yourself against harmful programs or devices including through installation of anti-virus software.\n' +
                        '\n' +
                        '2.4 We shall not be held responsible for any functional issues of the site caused by force majeure events, such as social insurrection, interruptions in network services, industrial troubles and ddos attacks, and other compelling reasons. During the course of these compelling reasons, our services will be deemed suspended and our serving time will be extended for the duration of the compelling reasons. Our site will make every effort to reach a settlement to terminate these compelling reasons or to fulfill their obligations as far as possible, despite compelling reasons.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        '3.1 We reserve the right to revise or amend the T&C at any time. You should visit our website periodically to review the T&C. Amendments are deemed effective immediately upon posting on our website. Using the services of the Site after the publication of the amendments is confirmation of your acceptance of these amendments.\n' +
                        '\n' +
                        '3.2 Without limiting our other remedies, we may suspend or terminate your account and refuse to continue to provide you with the service on our Website, in either case without giving you prior notice, if, in our reasonable opinion you breach any material term of the T&C. Notice of any such action taken will, however, be promptly provided to you.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        '​You declare and warrant that at all times when accessing the Site and using the service: \n' +
                        '\n' +
                        '4.1 You are over 18 years old, or the legal age at which gambling or gaming activities are allowed under the law or jurisdiction that applies to you. We reserve the right to request proof of age document from you at any time.\n' +
                        '\n' +
                        '4.2 You are of legal capacity and can enter into a binding legal agreement with us. You must not access the website or utilize the service if you are not of legal capacity.\n' +
                        '\n' +
                        '4.3 You will not use a VPN, proxy or similar services or devices that mask or manipulate the identification of your real location.\n' +
                        '\n' +
                        '4.4 You are authorized user of the payment method you use.\n' +
                        '\n' +
                        '4.5 You will make all payments to us in good faith and not attempt to reverse a payment or take any action which will cause such payment to be reversed by a third party\n' +
                        '\n' +
                        '4.6 You acknowledge that when placing bets you may lose some or all of your money deposited on the website in accordance with the T&C and you shall be fully responsible for that loss. Therefore you agree that you may earn and lose money using the website services.\n' +
                        '\n' +
                        '4.7 You are not acting on behalf of another party or for any commercial purposes, but solely on your own behalf as a private individual in a personal capacity.\n' +
                        '\n' +
                        '4.8 You will not either attempt to manipulate any element within the Site in bad faith nor in a manner that may adversely affect the integrity of the Site.\n' +
                        '\n' +
                        '4.9 You must generally act in good faith in relation to use of the Site at all times and for all bets made using the service.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        'You must not use the Site if:\n' +
                        '\n' +
                        '5.1 You are under the age of 18 years (or below the age of majority as stipulated in the laws of the jurisdictions applicable to you).\n' +
                        '\n' +
                        '5.2 You are not legally able to enter into a binding legal agreement with Us or you acting as an agent for, or otherwise on behalf, of a person under 18 years.\n' +
                        '\n' +
                        '5.3 You reside in a country in which access to online gambling to its residents or to any person within such country is prohibited.\n' +
                        '\n' +
                        '5.4 You reside in any of the following countries, or if You are accessing the Site from any of the following countries:\n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '5.5 You plan to perform any unlawful activity whatsoever.\n' +
                        '\n' +
                        '5.6 You plan to scrape our odds or violate any of our intellectual property rights.\n' +
                        '\n' +
                        '5.7 You plan to sell or transfer your account to any third parties. \n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        '6.1 You must create an account in order to bet and play any games through our Site.\n' +
                        '\n' +
                        '6.2 For legal and commercial reasons, it is not allowed to create an account in the above-mentioned countries and to use our Site from these countries. It is not allowed to open accounts in these areas and you should not use the Site.\n' +
                        '\n' +
                        '6.3 When you create an account, you will be asked for your contact information, which includes your name, address, date of birth, as well as phone and e-mail.\n' +
                        '\n' +
                        '6.4 Your account must be created with your own name and correct information. You can only have one account. Any other account you create on our Site will be considered as multiple records. Your multiple accounts can be instantly closed and:\n' +
                        '\n' +
                        '6.5 All transactions made by more than one account are considered invalid;\n' +
                        '\n' +
                        '6.6 All deposits made and bets won\'t be returned back to you; and\n' +
                        '\n' +
                        '6.7 If you have more than one account active, all accrued benefits, bonuses may be lost and received from you, you may be asked to return your withdrawals as well.\n' +
                        '\n' +
                        '6.8 If you want to create another account, you should contact us via email on support@makao777.com. The old account will be closed when a new account is created.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        '7.1 You should keep your account information protected and up-to-date.\n' +
                        '\n' +
                        '7.2 We may close or suspend an account if We reasonably believe that You are not complying with the T&C, or to ensure the integrity or fairness of the service or if We have other reasonable grounds to do so. We may not always be able to give You prior notice. If we close or suspend your account due to You not complying with the T&C, we may cancel and/or void any of your bets and withhold any money in your account (including the deposit).\n' +
                        '\n' +
                        '7.3 We reserve the right to refuse, restrict, cancel or limit any wager at any time for whatever reason, including any bet perceived to be placed in a fraudulent manner in order to circumvent our betting limits and/or our system regulations.\n' +
                        '\n' +
                        '7.4 If any amount is mistakenly credited to your account, it remains our property and when we become aware of any such mistake, We shall notify You and the amount will be withdrawn from your account.\n' +
                        '\n' +
                        '7.5 You must inform Us as soon as You become aware of any errors with respect to your account.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        '8.1 All processing continues in the language in which the operation is started.\n' +
                        '\n' +
                        '8.2 It is your responsibility to ensure that the transaction details are correct.\n' +
                        '\n' +
                        '8.3 You can access your transaction history via the Site.\n' +
                        '\n' +
                        '8.4 We reserve the right, at any time, to terminate the proceedings in whole or in part at our discretion. Transactions are not valid unless they are approved by Us. If You have not received a confirmation email confirming the transaction has been approved, contact our support.\n' +
                        '\n' +
                        '8.5 Once a bet is confirmed, the transaction cannot be canceled without our written consent.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        '10.1 An inactive account is an account of the Gambler to which the Gambler has not logged into or logged out of for 12 (twelve) consecutive months (“Inactive Player Account”). We reserve the right to charge a monthly administrative fee of EUR 10 or the equivalent in another currency (or the current balance of Inactive Player Account, if less) as long as the balance of such Inactive Player Account remains positive.\n' +
                        '\n' +
                        '10.2 You authorize Us to debit this fee from your Inactive Player Account on the beginning of the month following the day on which your Inactive Player Account is deemed inactive, and on the beginning of every subsequent month that your Inactive Player Account remains inactive. We will stop deducting the fee if the account balance is zero or if the account is re-activated.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        '11.1 Withdrawal from the account can be made in any way available at the Site at the time of replenishment.\n' +
                        '\n' +
                        '11.2 We reserve the right to transfer funds in a way different from the payment method specified by You.\n' +
                        '\n' +
                        '11.3 Requests for withdrawals are usually processed within 24 hours.\n' +
                        '\n' +
                        '11.4 Date of receipt of money on your account depends exclusively on banks and payment systems, to accounts of which the funds are withdrawn.\n' +
                        '\n' +
                        '11.5 In case that verification of your identity is necessary, the duration of processing of your request for withdrawal will be calculated from the date of verification of the requested documents.\n' +
                        '\n' +
                        '11.6 The maximum deposit amount to the account per transaction is 200 000  INR.\n' +
                        ' \n' +
                        '11.7 The minimum withdrawal amount from the account per transaction is 1000 INR.\n' +
                        ' \n' +
                        '11.8 The maximum withdrawal amount from the account per transaction is 200 000 INR.\n' +
                        ' \n' +
                        '11.9 The daily limit for funds withdrawal is 200 000 INR.\n' +
                        ' \n' +
                        '11.10 The weekly limit for funds withdrawal is 1 400 000 INR \n' +
                        ' \n' +
                        '11.11 The monthly limit for funds withdrawal is 6 000 000 INR\n' +
                        '\n' +
                        '11.12 Deposits and withdrawals can be made through various payment systems. Procedures, rules and conditions vary depending on the payment system. Cash payments are not accepted by Us.\n' +
                        '\n' +
                        '11.13 Your account is not a bank account and does not have guarantees, insurance or sponsorships, it is not included in any banking insurance system and it is not possible to earn interest from the deposits.\n' +
                        '\n' +
                        '11.14 We reserve the right to recalculate your account and the amount of bets made, regardless of the amount gained, for more than one account, in case that fraud, illegal activity or any other mistake(s) occurred.\n' +
                        '\n' +
                        '11.15  It is your responsibility to inform your local tax authorities and competent authorities of your earnings and losses.\n' +
                        '\n' +
                        '11.16 You can withdraw funds from your account at any time, provided that the following conditions are met:\n' +
                        '\n' +
                        'all deposits made to your account must be clean and there should be no refund request or objection (otherwise the payment request will be cancelled);\n' +
                        '\n' +
                        'all controls specified in the T&C should be completed.\n' +
                        '\n' +
                        '11.17 Once your withdrawal request is approved by Us, you must provide all necessary information regarding the transfer of funds. We will make all efforts to process the withdrawal via the payment system and currency chosen by You, but that may not be always possible (and we reserve the right to use a different payment system or currency to process your withdrawal).\n' +
                        '\n' +
                        '11.18 We reserve the right to charge You a fee amounting to costs incurred by us in connection with processing of your deposits and/or withdrawals to/from your account at the Site (bank fees etc.).\n' +
                        '\n' +
                        '11.19 You must deposit funds into your account using your own money.\n' +
                        '\n' +
                        '11.20 Payments made on your behalf by a third party (a friend, relative, spouse or family member etc.) are not accepted.\n' +
                        '\n' +
                        '11.21 If it is noticed during routine security checks that 11.19/11.20. is not complied with, all deposited funds will be returned to the account/credit card holder that deposited the funds.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '12.1 Money deposited in the Casino must be used for gaming activity. Due to this, all deposits will have a wager attached to them. A wager defines the multiplier in which the sum of your deposit will need to be turned over.\n' +
                        '\n' +
                        '12.2 The wager for all casino games in the Casino is set to x3 for every deposit, meanwhile, the wager for betting on sports is set to x1 for every deposit.\n' +
                        '\n' +
                        '12.3 While having a wager incomplete, your withdrawal request will be denied until you meet the requirement set.\n' +
                        '\n' +
                        '12.4 When the wager is met, the withdrawal request will be approved. There are no restrictions towards which games and products you play on to complete the requirement of the wager.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '13.1 In the event of an error or malfunction of our systems or processes, all bets are rendered void. We are not responsible for any errors in hardware or software You use or access or for any errors caused by your internet service provider. \n' +
                        '\n' +
                        '13.2 Please keep in mind, that we have the right to recover from you any amount overpaid and adjust your account to rectify any mistake. An example of such a mistake might be where a price is incorrect or where we enter a result of an event incorrectly. If there are insufficient funds in your account, we may demand that You pay us the relevant outstanding amount relating to any erroneous bets of wagers. Accordingly, we reserve the right to cancel, reduce or delete any pending plays, whether placed with funds resulting from the error or not.\n' +
                        '\n' +
                        '13.3 We may briefly suspend the availability of the Site (or of its part) if is necessary for maintenance or for fixing of any software or hardware failure or malfunction in the system providing the Site.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '14.1 All communications and notices to be given under the T&C either by You or by Us shall be in writing in the English language and must be given to and from the registered email address in your account.\n' +
                        '\n' +
                        '14.2 From time to time, you may be contacted by Us by email for the purpose of offering You information about betting, unique promotional offerings, and other information regarding the Site. You agree to receive such emails when You agree to the T&C when registering your account on our Site. You may contact our support to opt out of receiving such emails at any time.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '15.1 We cannot be held liable for any failure or delay in providing the service on our Site due to an event of Force Majeure which could reasonably be considered to be outside our control despite our execution of reasonable preventative measures. Such Force Majeure events may include particularly (but not exclusively): an act of God, trade or labor dispute, power cut, failure or omission of any government authority, obstruction or failure of telecommunication services; or any other delay or failure caused by a third party. We will not be liable for any loss or damage that you may suffer due to such Force Majeure event. In case of such events, we reserve the right to cancel or suspend the services offered through our Site without incurring any liability from our side.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '16.1 We reserve the right to immediately close your account in case we suspect that you are currently under 18 years (or below the age of majority is stipulated in the laws of the jurisdiction applicable to you) or that you were below that age when you placed any bets through the service on our Site. We will investigate the matter, including whether you have been betting as an agent for, or otherwise on behalf of, a person under 18 years old. If this is to be proven, we will perform the following:\n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        '17.1 We will seek criminal and contractual sanctions against any of our customers (Gambler) involved in fraud, dishonesty or criminal acts. We will withhold payments to any of our customers (Gambler) where any of the aforementioned acts is suspected. The customer (Gambler) shall indemnify Us and shall be liable to pay Us on demand all costs, charges or losses sustained or incurred by Us (including any direct, indirect or consequential losses, loss of profit, loss of business and loss of reputation) arising directly or indirectly from such customer’s (Gambler’s) fraud, dishonesty or criminal act.\n' +
                        '\n' +
                        '17.2 All necessary steps will be taken by Us to prevent such acts and to detect and determine any persons related to them. We are not responsible for any damage or loss that You or any other gambler may suffer from undercover agreements, fraud or from other illegal activities.\n' +
                        '\n' +
                        '17.3 As a result of any suspicious illegal or inappropriate activity, We reserve the right to share your credentials with authorities, other gaming and betting sites and operators, online service providers and banks, credit card companies, electronic payment system providers and other financial institutions, and we reserve the right to cooperate with them in the investigation of such activities.\n' +
                        '\n' +
                        '17.4 If You have reason to suspect that someone has done fraud or any other illegal activity in connection with our Site, You should let Us know by e-mail.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        '18.1 You should not use the Site’s services and chat functionality in any way or for any purpose that may be considered as insulting, obscene, racist, discriminatory or offensive. You should not use an offensive or offensive language or image and should not be disruptive to other users or Site’s employees.\n' +
                        '\n' +
                        '18.2 You must ensure that no viruses, worms or other negative elements are introduced from your side into the Site. It is strictly forbidden to send bulk mails or spam. You should not attempt to change or interfere with the Site (or any information contained in the Site) in any way.\n' +
                        '\n' +
                        '18.3 The Site must be used for entertainment purposes only. You must not copy any part of the Site.\n' +
                        '\n' +
                        '18.4 You must not conduct (or attempt to conduct) any DDOS attacks (denial of service) or any other similar negative acts. In case You are involved in such acts, relevant authorities will be contacted and your identity information will be shared. Your right to use the Site will be immediately terminated in such case.\n' +
                        '\n' +
                        '18.5 It is forbidden to sell, share or transfer player accounts to other persons.\n' +
                        '\n' +
                        '18.6 You cannot transfer, sell, or pledge your account to another person. This prohibition includes the transfer of any assets of value of any kind, including but not limited to ownership of accounts, winnings, deposits, bets, rights and/or claims in connection with these assets, legal, commercial or otherwise. The prohibition on said transfers also includes however is not limited to the encumbrance, pledging, assigning, usufruct, trading, brokering, hypothecation and/or gifting in cooperation with a fiduciary or any other third party, company, natural or legal individual, foundation and/or association in any way shape or form.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '19.1 All website design, text, graphics, music, sound, photographs, video, selection and editing thereof, software compilations, source code, software, and all materials are subject to our copyright and/or other proprietary rights (or subject to copyright and/or other proprietary rights of our third-party suppliers). Materials located on our Site may be downloaded solely for personal use on a single personal computer and may not be used for commercial purposes.\n' +
                        '\n' +
                        '19.2 None of our (or our third-party suppliers’) rights shall be under any circumstance transferred, assigned or licensed to any user of the Site.\n' +
                        '\n' +
                        '19.3 You must not reproduce or otherwise use any trademark, trade name and/or logo appearing on the Site in any way, unless such use is permitted by law.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        '20.1 In order to make any comments about the Site, You should first go through the basics with the customer service unit.\n' +
                        '\n' +
                        '20.2 In the event of any dispute, You agree that server records will be recognized as the decisive source in determining the outcome of any claim.\n' +
                        '\n' +
                        '20.3 If there is any difference between the result on the user screen and the result on the game server, the data on the game server shall be valid and should prevail. You acknowledge that we are the ultimate authority to set the rules and conditions during your participation in any online games on our Site.\n' +
                        '\n' +
                        '20.4 In case of any conflict, your registered email within your account with Us will be used to communicate with You.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        '21.1 If any of the rules within these T&C are found to be invalid, illegal or unenforceable, such rule(s) will be removed from the rest of these T&C which will remain in effect to the extent permitted by law. In such cases, invalid or unenforceable parts shall be amended as appropriate and in accordance with the intended meaning and purpose of the original text.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        '22.1 The T&C are subject to and construed in accordance with the laws of the Curacao, and you irrevocably submit to the exclusive (single) law of the courts of the jurisdiction of the Curacao for the settlement of any disputes (including claims for compensation and counterclaims) which may arise in connection with creation, legitimacy, effect, interpretation or action, or the legal relationship established by the T&C or in any way arising from them.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        '23.1 For Gamblers who want to restrict themselves, there is a voluntary self-restriction policy that allows you to close your account or limit your betting on our website. Please contact our support to learn about the service and visit our Self-Exclusion Policy to learn more.\n' +
                        '\n' +
                        '23.2 You will be assisted in using the self-restraint service. However, any responsibility will not be accepted by Us if we are unable to identify or notice your usage of the Site.\n' +
                        '\n' +
                        '23.3 We are committed to support responsible gambling, and we encourage you to visit the visit the following sites to learn about the problem with gambling:\n' +
                        '\n' +
                        'Gambling Therapy - www.gamblingtherapy.org \n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '      24. Bonus\n' +
                        ' \n' +
                        '\n' +
                        '24.1.     Bonuses are promotions for our members. Our bonuses are only available to members with unique IP. For this reason, do not get a bonus if you are accessing the website from shared networks like internet cafe, lodging, cafe, workplace, dormitory. Otherwise, no liability will be accepted.\n' +
                        '\n' +
                        '24.2.     If you have more than one membership from the same IP address, all your bonuses and winnings will be CANCELLED.\n' +
                        '\n' +
                        '24.3.     Only one bonus can be used from the depositing money. \n' +
                        '\n' +
                        '24.4      Each player can activate only one type of cashback (casino cashback or sports cashback) during the week \n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '    25. Bonus money summary\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        'You may be awarded bonuses or bonus money when You register to join our casino or during your time as a member of our casino. You are able to opt-out of receiving all bonuses from Us or any specific one at any time by contacting Our Customer Services department at support@makao777.com or through our live chat or through user interface in My Profile page. It is important that You fully understand the terms of each bonus offer that you participate in. This section contains the general terms and conditions associated with all bonuses within our casino. In addition, each bonus offer may also have supplementary terms and conditions that will be provided when You are invited to participate in the offer.\n' +
                        '\n' +
                        '25.1.     Bonuses – the details\n' +
                        'All bonuses are based on the following rules. When you have a bonus on your account:\n' +
                        'For the first deposit bonus maximum bet is equal for 500 INR.\n' +
                        'The bonus amount will be placed into a bonus balance and will be kept separate from your cash balance.\n' +
                        'When you place a bet, the bet will be deducted from your cash balance. If there are no funds remaining in your cash balance, then bets will be deducted from your bonus balance.\n' +
                        'Any winnings that you receive will be placed on to your bonus balance and cannot be withdrawn until you have met the wagering requirements for that bonus.\n' +
                        'The bonus amount itself may also not be withdrawn until you have met the wagering requirements. In some cases the bonus is non-redeemable, in which case the bonus amount can never be withdrawn.\n' +
                        'When you have met the wagering requirements, the sum in your bonus balance that is linked to the active bonus will be transferred into your cash balance and may then be withdrawn at any time.\n' +
                        'Not all bets will count towards wagering requirements, for example low risk roulette bets. See below for more details.\n' +
                        'Please ensure you read all other terms below that relate to bonuses.\n' +
                        'Only one bonus can be awarded for any specific event unless We state otherwise, and only one bonus can be active on your account at any time.\n' +
                        '\n' +
                        '25.2.     Your cash balance and your bonus balance\n' +
                        'A bonus is considered as a \'free bet\' and it does not have an equivalent cash value. No cash alternative, substitution, transfer or assignment of any bonus will be allowed at any time other than as set out in these terms.\n' +
                        'When you are awarded a bonus, it will be added to the "Bonus Balance" in your account.\n' +
                        'You cannot withdraw any sums in your Bonus Balance. When You deposit your own cash, this will be added to your account\'s "Cash Balance". You may withdraw any sums in your Account\'s Cash Balance, but You will forfeit any sums remaining on your Bonus Balance if you do so. Important notice, by creating a payout request you automatically forfeit any sums on bonus balance. Even if payout request is cancelled by our finance department due to one reason or another (e.g., fraud check etc.), bonus money will not be added back to your Bonus Balance.\n' +
                        '\n' +
                        '25.3.     Types of bonuses\n' +
                        'The terms of the specific bonus will indicate whether that bonus is withdrawable or non-redeemable. Withdrawable bonuses are those where the bonus amount together with any accrued winnings will be transferred into Your Cash Balance once the wagering requirements have been met. Non-redeemable bonuses are those where the original bonus amount will never be transferred to your Cash Balance (but any accrued winnings will be transferred once the Wagering Requirements have been met).\n' +
                        '\n' +
                        '25.4.     Wagering requirements\n' +
                        'The Wagering Requirements of a bonus means the total amount of bets you must stake before the bonus and any accrued winnings are transferred into your Cash Balance and can be withdrawn. The Wagering Requirements for each bonus are set out in the specific terms for the bonus and will be expressed as a multiple of the bonus amount, or of the bonus plus the deposit amount. The Wagering Requirement for bonuses will be set out in the terms specific to that bonus. Not all bets will count towards the Wagering Requirements. Bets on Blackjack, Roulettes, Arcade games (Heads or Better, Dice Twister, etc) Video poker games (Jacks or Better, Aces and Faces, etc), Baccarat, Casino Hold\'em, 2 Ways Royal, Craps and Sic Bo games contribute 10% of actual wagering on these games towards Your Wagering Requirements. Most of slot games contribute 100%. These percentages can be changed from time to time so please make sure to contact our support team each time to find out a certain game’s wagering contribution.\n' +
                        'The percentage of bets that contribute towards wagering requirements may differ for other bonus offers, but this will be made clear within the terms for those specific offers. Please read the wagering requirements carefully for each bonus offer you may receive.\n' +
                        'Partial or complete cashback of funds used to make bets on sports is not fully taken into account when the bonus is wagered. If the bet has been made on sports or another event which ends after the bonus expires, as a result the winning on this bet:\n' +
                        'a) will be credited on your cash balance, if the bonus used to make this bet has been already wagered;\n' +
                        'b) won\'t be credited on cash and/or bonus balance if the bonus used to make this bet has been cancelled for any reason.\n' +
                        'The  wagering rule does not apply to sports betting. \n' +
                        'If a bet made on sports is bigger than the player’s account balance, including any bonus which is currently being wagered, then this bet will not be taken into account.\n' +
                        '\n' +
                        '25.5.     Multiple bonuses on a single account\n' +
                        'Bonuses are handled one after the other. When the earliest bonus is \'Fulfilled\' or \'Revoked\' (see the Clause below for the meaning of these terms), the next Bonus in line will become \'Active\'.\n' +
                        'There are four different stages to a bonus, and these are as follows:\n' +
                        'Active – A bonus that you have started to play through, but in respect of which you have not yet completed the Wagering Requirements. While you have an active bonus on your account, you cannot withdraw any bonus amount and/or any winnings.\n' +
                        'Pending – A second or subsequent bonus on your account which you have not yet started to play through. A Pending bonus cannot be withdrawn.\n' +
                        'Fulfilled – A bonus where the wagering requirements have been met. The bonus amount and any winnings accrued will be automatically transferred into Your Cash Balance and can be withdrawn.\n' +
                        'Revoked – An Active or Pending bonus can be revoked and removed from your Bonus Balance if either: (a) You have not met the Wagering Requirements within the defined period; or, (b) you decide to withdraw any cash amount from your account before the Wagering Requirements have been met; or (c) you are in breach of this Agreement or the promotion terms and conditions.\n' +
                        'When a bonus is revoked then your Bonus Balance will be set to 0 and there will be no future liability on your part in respect of the revoked Bonus.\n' +
                        '\n' +
                        '25.6.     Promotion abuse\n' +
                        'Our casino reserves the right to review transaction records and logs from time to time, for any reason whatsoever. If, upon such a review, it appears that player is participating in strategies that our casino in its sole discretion deems to be abusive, we reserve the right to revoke the entitlement of such a player to the promotion.\n' +
                        'Should the Casino become aware of any user who has accepted the bonus or a promotion with sole purpose of creating a positive expected value on bonus return by using known practices aimed at securing a cash out of said bonus, then we will enforce the below mentioned actions and will enforce immediate exclusion from this and future promotions.\n' +
                        'For sake of absolute clarity, we have individually identified named practices that we find abusive in relation to awarded bonuses:\n' +
                        'User staking bets that have no or very minimal ability of return, with sole purpose of increasing their wagering volume with minimal loss/win expectancy, will be deemed advantage play and will result in immediate forfeit of the bonus, any bonus winnings and retaining of any real monies lost to the Casino in the process. A clear-cut example of such type of play would be a simultaneous wager on both black and red in roulette, or covering of the vast majority of the table. This condition is not limited to this example alone: any wager placed with obvious intent to achieve high bet volume with minimal win expectancy will be deemed abusive toward the offer.\n' +
                        'A user who wagers high value hands (greater than $5) with the sole purpose of rapidly increasing bonus bankroll, then proceeds to drastically decrease their bet value(less than half) without having reasonably decreased their bankroll will be deemed to employing unnatural and advantageous betting patterns. Such cases may enforce below mentioned actions, but each case will be investigated and acted upon accordingly. We strongly discourage this type of play.\n' +
                        'Combinations of above: ANY user which is found employing a strategy by which they are placing high value bets while playing on any game with specific bonus weight decreased to or less than 30% and then proceed to place bets in value of less than their current average bet while changing game to higher weighted games; such user will be immediately disqualified from a bonus and will face full enforcement of below mentioned actions.\n' +
                        'Important notice, in order to protect from high-risk bonus wagering each bet should be less or equal to 20% of original amount of active bonus, if during wagering the bonus a players stakes a bet higher than 20% of original amount of active bonus then such bet will contribute only 20% of original amount of active bonus to wagering requirements.\n' +
                        'We reserve the right to revoke and/or cancel any bonuses and winnings that We regard may have been redeemed by misuse of the system. Abusing player accounts may be terminated immediately.\n' +
                        'Players found to be abusing Bonus offers may be barred from receiving further Bonuses.\n' +
                        'Please be aware that a valid telephone contact number MUST be provided on registration as We may make a confirmation call to You as part of confirming Your identity. If you cannot be contacted on the number provided any winnings accrued from use of any bonus offer may be forfeited and Your account terminated.\n' +
                        'We reserve the right to change the terms and conditions of any Bonus promotional offer at any time and it is the responsibility of the player to periodically check for changes and updates.\n' +
                        '\n' +
                        '25.7. List of excluded games for wagering  bonus:\n' +
                        '\n' +
                        'Belatra\n' +
                        '\n' +
                        'Caterpillars, The Wildlife 2, The Wildlife\n' +
                        '\n' +
                        'Betsoft\n' +
                        '\n' +
                        '2 Million B.C., Take The Bank, Take Santa\'s Shop\n' +
                        '\n' +
                        'Evoplay\n' +
                        '\n' +
                        'Rocket Stars\n' +
                        '\n' +
                        'Bgaming\n' +
                        '\n' +
                        'Rocket Dice XY, Rocket Dice, Plinko, Minesweeper, Heads and Tails, WBC Ring of Riches, Space XY, Plinko XY, Minesweeper XY, Heads and Tails XY\n' +
                        '\n' +
                        'Blueprint\n' +
                        '\n' +
                        'King Kong Cash, The G.O.A.T, Magic Mirror Delux II, \n' +
                        '\n' +
                        'Booongo\n' +
                        '\n' +
                        '15 Golden Eggs, Sun of Egypt, Sun of Egypt 2, 777 Gems: Respin, God\'s Temple Deluxe\n' +
                        '\n' +
                        'Endorphina\n' +
                        '\n' +
                        'Dia De Los Muertos, Slotomoji\n' +
                        '\n' +
                        'EGT\n' +
                        '\n' +
                        'Grace of Cleopatra\n' +
                        '\n' +
                        'Novomatic\n' +
                        '\n' +
                        'Indian Spirit\n' +
                        '\n' +
                        'Kalamba\n' +
                        '\n' +
                        'Crystal Cavern, Bangkok Dreams\n' +
                        '\n' +
                        'Microgaming\n' +
                        '\n' +
                        'Le Kaffee Bar, Cool Buck -5 Reel, Beautiful Bones, Wild Orient, Untamed - Giant Panda, Football Star, Dragon Dance, Bikini Party, Reel Gems V94, Reel Gems V92\n' +
                        '\n' +
                        'NoLimitCity\n' +
                        '\n' +
                        'The Creepy Carnival, Gaelic Gold, Deadwood xNudge, Tombstone R.I.P, San Quentin xWays, Book of Shadows\n' +
                        '\n' +
                        'NetEnt\n' +
                        '\n' +
                        'Sweety Honey Fruity, Blood Suckers 2, Wild Wild West, Dead or Alive 2, Steam Tower, Reel Rush, Fruit Shop\n' +
                        '\n' +
                        'Red Tiger\n' +
                        '\n' +
                        'Diamond Blitz\n' +
                        '\n' +
                        'Platipus\n' +
                        '\n' +
                        'Un Dia De Muertos\n' +
                        '\n' +
                        'Playson\n' +
                        '\n' +
                        'Claws vs Paws, Book of Gold: Symbol Choice, Solar Queen, Viking Gods: Thor and Loki, Zeus: Thunder Reels, Solar King, Solar Temple, Rome: Caesar’s Glory, Solar Queen Megaways\n' +
                        '\n' +
                        'Quickspin\n' +
                        '\n' +
                        'Crown of Valor, Crystal Prince, Titan Thunder: Wrath of Hades, Hammer of Vulcan\n' +
                        '\n' +
                        'Spinomenal\n' +
                        '\n' +
                        'Lemur Does Vegas, Fruits Deluxe - Easter Edition, Lemur Does Vegas - Easter Edition\n' +
                        '\n' +
                        'Yggdrasil\n' +
                        '\n' +
                        'Vikings Go To Hell, Wicked Circus, Johnan Legendarian, Hades, All Star Knockout Ultra Gamble, Tuts Twister, Wolf Hunters, Dark Vortex, Cazino Cosmos, Dwarf Mine, Vikings go Berzerk,  Alchymedes,  All Star Knockout, Double Dragons, Jokerizer, Spina Colada, El Dorado Infinity Reels, The Royal Family, Pirates 2: Mutiny, Cauldron, Robin Sherwood Marauders,  Football Glory, Legion Hot 1, Towering Pays Valhalla, \n' +
                        '\n' +
                        'RevolverGaming\n' +
                        '\n' +
                        'Irish Coins, Thor of Asgard\n' +
                        '\n' +
                        'Spinmatic\n' +
                        '\n' +
                        'Helio Lina Revenge, Boat Trip Mississippi, Balloon Run, Meteroid\n' +
                        '\n' +
                        '26.1 Delivery of a prize may take from 14 to 21 business days from the date of the draw\n' +
                        '\n' +
                        '\n' +
                        '26.2 Makao is responsible for ordering the prize. The prize will be ordered exclusively on the official website\n' +
                        '\n' +
                        '\n' +
                        '26.3 The company from which the product was purchased is responsible for the delivery of the prize\n' +
                        '\n' +
                        '\n' +
                        '26.4 After the lottery, Makao will contact the winner. The winner must provide all the necessary information for the delivery of the prize, as well as a photo with the delivered prize.\n' +
                        '\n' +
                        '27. Responsibilities \n' +
                        '\n' +
                        '27.1 Accessing our Site and using the services on it is entirely your choice and discretion and all risks are yours.',
                    'privacy': 'This privacy policy (hereinafter referred to as the Policy) was developed in accordance with the Federal Law No. 152-Fl dated July 27, 2006 “On Personal Data” and establishes the rules for using the Makao website (hereinafter referred to as the Website), personal information received from users of the Website who are the citizens of  India (hereinafter referred to as Users).\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        'The text of the Policy is available for Users on the Internet directly on the Website.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        'Use of the Website means that User’s unconditional acceptance of the Policy and the specified conditions for processing received information.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1. Information received by the website\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.1. The website collects, accesses and uses personal data of the User, technical and other information related to the User for the Policy purposes.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.2. Technical information refers to information that is automatically sended to the Company while using the Website using software installed on the User’s device. Technical information is not considered as a personal data. The Website uses cookies and similar technologies to identify the User’s device. Cookies are text files available for the Website to process information about the activity of User’s device. The User can disable the use of cookies in the browser settings.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.3. Under the User’s personal data is considered the information that the User provides to the Company through the Website and in following interaction with the Company, including:\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.3.1. Name, surname, middle name;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.3.2. Date of Birth;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.3.3. E-mail address;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.3.4. Country and city of residence;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.3.5. Telephone number;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.3.6. User\'s electronic wallet number in payment systems;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.3.7. when withdrawing the documents, confirming the Player’s identity and the User’s electronic wallet number in the payment systems.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.4. The Company processes personal data, technical information and other information of the User during the entire period of validity of the agreement concluded with the User, in case of absence of such agreement - within 10 (ten) years from the date of submission of the specified information.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.5. The website is not a publicly available source of personal data. In this case, if the User performs certain actions, his personal data may become available to an indefinite group of people, about which the User hereby gives his consent.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '2. Purpose of the use of information provided by the User\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '2.1. The information provided by the User is used by the Company solely for the purpose of:\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '2.1.1. the conclusion of the agreement between the Company and the User, as well as the execution by the Company of such an agreement;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '2.1.2. providing the User with technical support;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '2.1.3. consideration of appeals and claims of the User;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '2.1.4. sending advertising and / or information materials to the User;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '2.1.5. improving the work and upgrading the Website;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '2.1.6. counter money-laundering.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '3. Processing methods\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '3.1. Processing User\'s personal data means recording, organizing, accumulating, storing, specifying (updating, modifying), retrieving, using, transmitting (distributing, providing, accessing), depersonalizing, blocking, deleting, destruction User’s personal data not falling under special categories, the processing of which by the Company, in accordance with the current legislation of India, requires the written consent of the User.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '3.2. The User agrees with the Company to process the User’s personal data provided when filling out any form on the Website and in the course of further interaction with the Website, including the transfer of such personal data to third parties in pursuance of an agreement between the Company and the User, even when such transfer is carried out on the territory of other states (cross-border transfer).\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '3.3. The processing of the User’s personal data is carried out by the Company using databases located in India.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '4. Measures taken to protect the information provided by the User, and the guarantee of the Company\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '4.1. The Company takes necessary and sufficient legal, organizational and technical measures to protect the information provided by the Users from unauthorized or accidental access, destruction, alteration, blocking, copying, distribution, as well as from other illegal actions of third parties with it, by restricting access to such information of other Users of the Website, the Company, employees and partners of the Company, third parties (except for the provision by the Company of the information necessary for the performance of its obligations rights to the User and the requirements of the Indian legislation), as well as the imposition of sanctions on such persons for violating the rules of the Policy in relation to such data.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '4.2. The Company guarantees that the information provided by the Users is not combined with statistical data, is not provided to third parties and is not disclosed, except in cases provided in the Policy.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '5. Company Rights\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '5.1. The company has the right to carry out statistical and other research based on impersonal information provided by the User. The company has the right to provide access to such research to third parties for the implementation of advertising targeting. The User can also independently (if there is a technical possibility on the User’s device or in the software on the User’s device) prohibits the device or software from transmitting through the Website the information necessary for implementing target advertising.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '5.2. The Company has the right to send to the User email- and sms-mailing advertising and marketing materials, voice and / or sms-messages, and / or other information by e-mail and / or by phone specified when registering an account on the Company\'s website or provided by the Company’s Client and / or to the person authorized by him, in another way, about services and other services, payments, data on payment arrears, withdrawal of funds, changes in the rules and procedures for the provision of services and other changes in the Company\'s activities, or in the participation of shares held by the Company, sent by the Company or on its behalf by third parties.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '5.3. The Company is entitled to provide information about Users to third parties in order to identify and prevent fraudulent activities, to resolve technical or security problems, as well as in other cases provided by the legislation of the Russian Federation.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '5.4. The Company has the right to provide access to information about the User to third parties, if such transfer is necessary for the Company to fulfill the agreement concluded with the User.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '5.5. In case the User withdraws consent to the processing personal data, the Company has the right to restrict the User’s access to some or all of the functions of the Website.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '6. User rights\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '6.1. The user may withdraw consent to the processing of personal data at any time by sending a written notice to the Company. At the same time, the User understands that the Company has the right to continue processing such information in cases permitted by applicable law.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '7. New editions\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '7.1. The company reserves the right to make changes to the Policy. User responsible for getting acquainted with the text of the Policy whenever accessing the Website.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '7.2. The new version of the Policy comes into force after 5 days from the date of its placement. Continue using the website after the new version of the Policy comes into force means that the User has accepted the Policy and its conditions.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '7.3. The user should not use the website if he does not agree with the terms of the Policy.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '8. Elimination of contradictions\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '8.1. In case when agreement between the Company and the User contains provisions on the use of personal information and / or personal data of the User, the provisions of the Policy and such agreement shall apply to the extent not inconsistent with the Policy.',
                    'return_rules': 'We offer a 30-day money-back guarantee for a subscription to Makao777. Within 30 days from the moment you pay for the Service, you have the right to request from Makao777 a refund of the balance of your funds that you have not spent during this period of using the service. In case of purchase of annual tariffs, we undertake to return to you a part of the amount you paid as payment of the tariff, in proportion to the unused time remaining after contacting us for a refund. At the same time, you must specify the reason for the refund in the request.\n' +
                        '\n' +
                        'After 30 days after payment, as well as in the case of blocking your Personal Account due to your violation of the Anti-Spam Policy or the Rules for using the service, the refund of the cost of paid but not provided services is made at the sole discretion of Makao777.\n' +
                        '\n' +
                        'The refund is made only if the client has not violated any of the Anti-Spam policy or Rules of Use of the service during the period of use.\n' +
                        '\n' +
                        'The application review period is 7-10 days from the date of sending the request.\n' +
                        '\n' +
                        'Bonus funds accrued on shares are non-refundable.'
                }
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
                    "eph_desc": "Команда makao777 решила провести розыгрыш 1 ETH, между пользователями сайта. Вам не нужно подписываться ни на какие социальные сети или ютуб каналы спонсоров. Принимают участие все пользователи которые пополнили баланс на сумму 15 USD. Обнародование победителя пройдёт 31.10.2023.",
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
                        '1': 'Каждый гость всегда ценен и желанен на Makao, именно поэтому мы решили создать для вас специальную программу лояльности. Каждый депозит, когда-либо внесенный на Makao, рассчитывается и обеспечивает ваш уровень лояльности, который открывает определенные преимущества, такие как более высокий кэшбэк и различные бонусы от вашего личного менеджера.',
                        '2': 'Как активировать бонус:\n' +
                            '\n' +
                            '1. Войдите в свой аккаунт Makao\n' +
                            '2. Внесите депозит в криптовалюте\n' +
                            '3. Обратитесь в службу поддержки Makao в чате или к своему персональному менеджеру, чтобы активировать бонус\n' +
                            '4. Получите 7% бонус на свой депозит без какой-либо ставки',
                        '3': 'Откройте для себя совершенно новое предложение, которое нельзя найти больше нигде! Станьте участником соревнования по ставкам на спорт с призовым фондом в 500 000 индийских рупий исключительно на makao777.com !\n' +
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
                            "Войдите в свой аккаунт Makao \n" +
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
                    },
                    'terms_and_conditions': 'Добро пожаловать на makao777.com.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        'Чтобы воспользоваться нашими услугами, вы должны создать учетную запись и принять приведенные ниже правила и условия.\n' +
                    ' \n' +
                            '\n' +
                        '\n' +
                        '1.1. Настоящие Правила и условия (далее “T&C”) представляют собой соглашение между Win Sector N.V., ID: 156833, Адрес: Kaya Seru Cueba 16, Кюрасао (далее “Мы” или “Нас”), управляющими веб-сайтом makao777.com (далее “Сайт”) и вы (далее ”Ты" или “Игрок”).\n' +
                        '\n' +
                        '1.2. Депозиты/снятие средств на Сайте обрабатываются либо нами, либо нашей дочерней компанией, созданной в соответствии с законодательством Кипра – WIN SECTOR LTD, ID HE422614, юридический адрес: Stratigou Timagia, 26, SIANTONA BUILDING, офис 102 6047, Ларнака, Кипр.\n' +
                        '\n' +
                        '1.3. Эти условия вступили в силу 16 декабря 2021 года.\n' +
                        '\n' +
                        '1.4. Вы обязаны ознакомиться с Условиями, прежде чем начнете пользоваться услугами Сайта. Если вы не согласны с этими условиями, вам не разрешается пользоваться услугами Сайта.\n' +
                        '\n' +
                        "1.5. Регистрация на Сайте и посещения Сайта являются подтверждением вашего согласия с T&C.\n" +
                        '\n' +
                        '1.6. Сайт оставляет за собой право вносить изменения в условия в любое время.\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '\n' +
                        '2.1 В пределах, разрешенных применимым законодательством, мы не компенсируем вам и не будем нести ответственность ни за какой прямой ущерб, ни за любой косвенный, специальный или вытекающий из него ущерб, потерю любого рода или любую потерю возможностей, дохода, фактической или ожидаемой прибыли, бизнеса, контрактов, деловой репутации, ожидаемых сбережений, повреждение или искажение данных, независимо от того, были ли мы заранее уведомлены о возможности любой такой потери / повреждения), которые вы можете понести во время игры или использования на сайте.\n' +
                    '\n' +
                            '2.2 В случае, если мы несем ответственность за какое-либо событие в соответствии с условиями, наша общая совокупная ответственность перед вами в соответствии с условиями или в связи с ними не должна превышать (а) сумму ставок и/или отыгрышей, которые вы разместили через свой аккаунт, или (б) 45000 индийских рупий в совокупный, в зависимости от того, что меньше.\n' +
                        '\n' +
                        '2.3 Мы настоятельно рекомендуем вам (i) убедиться в пригодности и совместимости сервиса с вашим собственным компьютерным оборудованием перед использованием; и (ii) принять разумные меры предосторожности для защиты себя от вредоносных программ или устройств, в том числе путем установки антивирусного программного обеспечения.\n' +
                    '\n' +
                        '2.4 Мы не несем ответственности за любые функциональные проблемы сайта, вызванные форс-мажорными обстоятельствами, такими как социальное восстание, перебои в предоставлении сетевых услуг, производственные неполадки и ddos-атаки, а также по другим веским причинам. В течение действия этих веских причин наши услуги будут считаться приостановленными, а срок нашего обслуживания будет продлен на время действия веских причин. Наш сайт приложит все усилия для достижения соглашения о прекращении действия этих веских причин или для выполнения своих обязательств, насколько это возможно, несмотря на веские причины.\n' +
                    '\n' +
                            ' \n' +
                        '\n' +
                        '\n' +
                        '3.1 Мы оставляем за собой право пересматривать или дополнять условия в любое время. Вам следует периодически посещать наш веб-сайт, чтобы ознакомиться с T&C. Поправки вступают в силу немедленно после размещения на нашем веб-сайте. Использование услуг Сайта после публикации поправок является подтверждением вашего согласия с этими поправками.\n' +
                        '\n' +
                        '3.2 Не ограничивая наши другие средства правовой защиты, мы можем приостановить или прекратить действие вашей учетной записи и отказаться продолжать предоставлять вам услуги на нашем веб-сайте, в любом случае без предварительного уведомления, если, по нашему разумному мнению, вы нарушаете какие-либо существенные условия T & C. Однако уведомление о любых таких предпринятых действиях будет незамедлительно предоставлено вам.\n' +
'\n' +
' \n' +
'\n' +
' \n' +
'\n' +
'\n' +
'Вы заявляете и гарантируете, что в любое время при доступе к Сайту и использовании сервиса: \n' +
'\n' +
'4.1 Вам больше 18 лет, или законного возраста, с которого азартные игры или игровая деятельность разрешены в соответствии с законом или юрисдикцией, которая применяется к вам. Мы оставляем за собой право запросить у вас документ, подтверждающий возраст, в любое время.\n' +
'\n' +
'4.2 Вы дееспособны и можете заключить с нами юридически обязательное соглашение. Вы не должны заходить на веб-сайт или пользоваться сервисом, если вы не обладаете дееспособностью.\n' +
'\n' +
'4.3 Вы не будете использовать VPN, прокси-сервер или аналогичные сервисы или устройства, которые маскируют или манипулируют идентификацией вашего реального местоположения.\n' +
'\n' +
'4.4 Вы являетесь авторизованным пользователем используемого вами способа оплаты.\n' +
'\n' +
'4.5 Вы будете производить все платежи нам добросовестно и не будете пытаться отменить платеж или предпринимать какие-либо действия, которые приведут к отмене такого платежа третьей стороной \ n' +
'\n' +
'4.6 Вы признаете, что при размещении ставок вы можете потерять часть или все свои деньги, внесенные на веб-сайт в соответствии с условиями, и вы несете полную ответственность за эту потерю. Следовательно, вы соглашаетесь с тем, что можете зарабатывать и терять деньги, используя услуги веб-сайта.\n' +
'\n' +
'4.7 Вы действуете не от имени другой стороны или в каких-либо коммерческих целях, а исключительно от своего имени как частное лицо в личном качестве.\n' +
'\n' +
'4.8 Вы не будете пытаться манипулировать каким-либо элементом Сайта недобросовестно или таким образом, который может отрицательно повлиять на целостность Сайта.\n' +
'\n' +
'4.9 Вы должны, как правило, действовать добросовестно в отношении использования Сайта в любое время и для всех ставок, сделанных с использованием сервиса.\n' +
'\n' +
' \n' +
'\n' +
'\n' +
'Вы не должны использовать Сайт, если:\n' +
'\n' +
'5.1 Вам не исполнилось 18 лет (или вы не достигли совершеннолетия, как это предусмотрено законами применимых к вам юрисдикций).\n' +
'\n' +
'5.2 Вы юридически не можете заключить с нами обязательное юридическое соглашение или действовать в качестве агента или иным образом от имени лица младше 18 лет.\n' +
'\n' +
'5.3 Вы проживаете в стране, в которой доступ к азартным играм онлайн для ее жителей или любого лица в пределах такой страны запрещен.\n' +
'\n' +
'5.4 Вы проживаете в любой из следующих стран, или если Вы заходите на Сайт из любой из следующих стран:\n' +
'\n' +
'\n' +
'\n' +
'\n' +
'\n' +
'\n' +
'\n' +
'\n' +
'\n' +
'\n' +
'\n' +
'\n' +
'\n' +
'5.5 Вы планируете осуществлять какую-либо незаконную деятельность вообще.\n' +
'\n' +
'5.6 Вы планируете снизить наши шансы или нарушить какие-либо из наших прав на интеллектуальную собственность.\n' +
'\n' +
'5.7 Вы планируете продать или передать свою учетную запись любым третьим лицам. \n' +
'\n' +
' \n' +
'\n' +
'\n' +
'6.1 Вы должны создать учетную запись, чтобы делать ставки и играть в любые игры через наш сайт.\n' +
'\n' +
'6.2 По юридическим и коммерческим причинам не разрешается создавать учетную запись в вышеупомянутых странах и использовать наш сайт из этих стран. Не разрешается открывать учетные записи в этих областях, и вы не должны использовать Сайт.\n' +
'\n' +
'6.3 Когда вы создадите учетную запись, вам будет предложено ввести вашу контактную информацию, которая включает ваше имя, адрес, дату рождения, а также телефон и электронную почту. \n' +
'\n' +
'6.4 Ваша учетная запись должна быть создана с вашим собственным именем и правильной информацией. У вас может быть только одна учетная запись. Любая другая учетная запись, которую вы создадите на нашем сайте, будет рассматриваться как несколько записей. Ваши несколько учетных записей могут быть мгновенно закрыты и:\n' +
'\n' +
'6.5 Все транзакции, совершенные более чем с одного счета, считаются недействительными;\n' +
'\n' +
'6.6 Все внесенные депозиты и ставки не будут возвращены вам обратно; и \n',
'privacy': 'Настоящая политика конфиденциальности (далее - Политика) разработана в соответствии с Федеральным законом от 27 июля 2006 года № 152-ФЗ “О персональных данных” и устанавливает правила использования сайта Makao (далее - Сайт), персональной информации, полученной от пользователей Сайта которые являются гражданами Индии (далее именуемыми Пользователями).\n' +
                    '\n' +
                            '\n' +
                        ' \n' +
                        '\n' +
                        'Текст Политики доступен для пользователей в Интернете непосредственно на Веб-сайте.\n' +
                    '\n' +
                            '\n' +
                        ' \n' +
                        '\n' +
                        'Использование Веб-сайта означает безоговорочное принятие Пользователем Политики и указанных условий обработки полученной информации.\n' +
                    '\n' +
                            '\n' +
                        ' \n' +
                        '\n' +
                        '1. Информация, полученная с помощью веб-сайта\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.1. Веб-сайт собирает, получает доступ и использует персональные данные Пользователя, техническую и иную информацию, относящуюся к Пользователю, в целях Политики.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.2. Техническая информация относится к информации, которая автоматически отправляется Компании при использовании Веб-сайта с использованием программного обеспечения, установленного на устройстве Пользователя. Техническая информация не рассматривается как персональные данные. Веб-сайт использует файлы cookie и аналогичные технологии для идентификации устройства Пользователя. Файлы cookie - это текстовые файлы, доступные веб-сайту для обработки информации об активности устройства пользователя. Пользователь может отключить использование файлов cookie в настройках браузера.\n' +
                    '\n' +
                            '\n' +
                        ' \n' +
                        '\n' +
                        '1.3. Под персональными данными Пользователя понимается информация, которую Пользователь предоставляет Компании через Веб-сайт и при последующем взаимодействии с Компанией, в том числе:\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.3.1. Имя, фамилия, отчество;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.3.2. Дата рождения;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.3.3. Адрес электронной почты;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.3.4. Страна и город проживания;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.3.5. Номер телефона;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.3.6. Номер электронного кошелька пользователя в платежных системах;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.3.7. при выводе документов, подтверждающих личность Игрока и номер электронного кошелька Пользователя в платежных системах.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.4. Компания обрабатывает персональные данные, техническую информацию и иную информацию Пользователя в течение всего срока действия соглашения, заключенного с Пользователем, в случае отсутствия такого соглашения - в течение 10 (десяти) лет с даты предоставления указанной информации.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '1.5. Веб-сайт не является общедоступным источником персональных данных. В этом случае, если Пользователь совершает определенные действия, его персональные данные могут стать доступными неопределенному кругу лиц, на что Пользователь настоящим дает свое согласие.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '2. Цель использования информации, предоставленной Пользователем\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '2.1. Информация, предоставленная Пользователем, используется Компанией исключительно в целях:\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '2.1.1. заключение соглашения между Компанией и Пользователем, а также исполнение Компанией такого соглашения;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '2.1.2. предоставление Пользователю технической поддержки;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '2.1.3. рассмотрение обращений и претензий Пользователя;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '2.1.4. отправка рекламных и/или информационных материалов Пользователю;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '2.1.5. улучшение работы и модернизация Веб-сайта;\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '2.1.6. противодействие отмыванию денег.\n' +
                    '\n' +
                            '\n' +
                        ' \n' +
                        '\n' +
                        '3. Методы обработки\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '3.1. Обработка персональных данных Пользователя означает запись, организацию, накопление, хранение, уточнение (обновление, модификация), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных Пользователя, не подпадающих под специальные категории, обработка которых Компанией, в соответствии с действующим законодательством Индии, требуется письменное согласие Пользователя.\n' +
                    '\n' +
                            '\n' +
                        ' \n' +
                        '\n' +
                        '3.2. Пользователь соглашается с Компанией обрабатывать персональные данные Пользователя, предоставленные при заполнении любой формы на Веб-сайте и в ходе дальнейшего взаимодействия с Веб-сайтом, включая передачу таких персональных данных третьим лицам во исполнение соглашения между Компанией и Пользователем, даже если такая передача является осуществляется на территории других государств (трансграничная передача).\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '3.3. Обработка персональных данных Пользователя осуществляется Компанией с использованием баз данных, расположенных в Индии.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '4. Меры, принятые для защиты информации, предоставленной Пользователем, и гарантии Компании\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '4.1. Компания принимает необходимые и достаточные правовые, организационные и технические меры для защиты информации, предоставляемой Пользователями, от несанкционированного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от других незаконных действий третьих лиц с ней, путем ограничения доступа к такой информации других Пользователей Сайта. Веб-сайт, Компания, сотрудники и партнеры Компании, третьим лицам (за исключением предоставления Компанией информации, необходимой для выполнения своих обязательств перед Пользователем и требований законодательства Индии), а также наложения санкций на таких лиц за нарушение правил Политики в отношении таких данных.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '4.2. Компания гарантирует, что информация, предоставляемая Пользователями, не объединяется со статистическими данными, не предоставляется третьим лицам и не разглашается, за исключением случаев, предусмотренных Политикой.\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n' +
                        '5. Права компании\n' +
                        '\n' +
                        '\n' +
                        ' \n' +
                        '\n',
                    'return_rules': 'Мы предлагаем 30-дневную гарантию возврата средств за подписку на Makao777. В течение 30 дней с момента оплаты вами Сервиса, вы вправе запросить у Makao777 возврат остатка ваших денежных средств, неизрасходованных вами за данный период использования сервиса. В случае приобретения годовых тарифов, мы обязуемся вернуть вам часть суммы, внесенной вами в качестве оплаты тарифа, пропорционально неиспользованному времени, оставшемуся после обращения к нам за возвратом средств. При этом вы должны указать в запросе причину для возврата денег.\n' +
                        '\n' +
                        'По истечении 30 дней после оплаты, а также в случае блокирования Вашего Личного кабинета в связи с нарушением вами Антиспам политики или Правил пользования сервисом, возврат стоимости оплаченных, но не предоставленных услуг производится по собственному усмотрению Makao777.\n' +
                        '\n' +
                        'Возврат средств происходит только в том случае, если клиент в период использования пользователь не нарушил ни один из пунктов Антиспам политики или Правил пользования сервисом.\n' +
                        '\n' +
                        'Период рассмотрения заявки – 7-10 дней с даты отправки запроса.\n' +
                        '\n' +
                        'Бонусные средства, начисленные по акциям, возврату не подлежат.'
                },
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
