const express = require('express');
const path = require('path');
require('dotenv').config();
var axios = require('axios');

const app = express()
const PORT = process.env.PORT || 5000

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.resolve(__dirname, 'public')))

const AxiosInstance = axios.create({
    withCredentials: true,
    timeout: 10000
});

app.get('/', (req, res) => {
    res.render('index', { title: 'Игровые сервера Fame', active: 'main' })
})

app.get('/launcher', (req, res) => {
    res.render('launcher', { title: 'Загрузка лаунчера', active: 'none' })
})

// Донат
app.get('/donate', (req, res) => {
    res.render('donate', { title: 'Донат', active: 'donate' })
})

app.get('/donate/about-vip', (req, res) => {
    res.render('about-vip', { title: 'Подробнее о Вип', active: 'none' })
})

app.get('/donate/about-premium', (req, res) => {
    res.render('about-premium', { title: 'Подробнее о Премиум', active: 'none' })
})

app.get('/donate/about-deluxe', (req, res) => {
    res.render('about-deluxe', { title: 'Подробнее о Делюкс', active: 'none' })
})

app.get('/donate/about-moder', (req, res) => {
    res.render('about-moder', { title: 'Подробнее о Модере', active: 'none' })
})

app.get('/donate/about-admin', (req, res) => {
    res.render('about-admin', { title: 'Подробнее о Админе', active: 'none' })
})

app.get('/donate/about-gladmin', (req, res) => {
    res.render('about-gladmin', { title: 'Подробнее о Гл.Админе', active: 'none' })
})

app.get('/donate/about-roulette', (req, res) => {
    res.render('about-roulette', { title: 'Содержимое рулетки', active: 'none' })
})


// Пополнение
app.get('/refill-select', (req, res) => {
    res.render('refill-select', { title: 'Выбор метода пополнения', active: 'none' })
})

app.get('/refill-manual-enot', (req, res) => {
    res.render('refill-manual-enot', { title: 'Пополнение через платёжку Enot.io', active: 'none', key: process.env.secret_word })
})

app.get('/refill-manual', (req, res) => {
    res.render('refill-manual', { title: 'Пополнение прямым переводом', active: 'none' })
})

app.get('/refill/advcash', (req, res) => {
    res.render('advcash', { title: 'Пополнение через AdvCash', active: 'none' })
})
app.get('/refill/payeer', (req, res) => {
    res.render('payeer', { title: 'Пополнение через Payeer', active: 'none' })
})


// FAQ
app.get('/faq', (req, res) => {
    res.render('faq', { title: 'FAQ - Часто задаваемые вопросы', active: 'none' })
})

// Пользовательское соглашение
app.get('/user-agreement', (req, res) => {
    res.render('user-agreement', { title: 'Пользовательское соглашение', active: 'none' })
})

// Правила
app.get('/for-familiarization', (req, res) => {
    res.render('for-familiarization', { title: 'К ознакомлению', active: 'none' })
})

app.get('/rules-csgo-server', (req, res) => {
    res.render('rules-csgo-server', { title: 'Правила CS:GO сервера', active: 'none' })
})

app.get('/rules-minecraft-server', (req, res) => {
    res.render('rules-minecraft-server', { title: 'Правила Minecraft сервера', active: 'none' })
})

app.get('/rules-site', (req, res) => {
    res.render('rules-site', { title: 'Правила сайта', active: 'none' })
})

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Контакты', active: 'none' })
})

// Авторизация
app.get('/authorization', (req, res) => {
    res.render('authorization', { title: 'Авторизация', active: 'authorization' })
})


app.get('/registration', (req, res) => {
    res.render('registration', { title: 'Регистрация', active: 'registration' })
})

// Платежки успех / неудача
app.get('/refill-success', (req, res) => {
    res.render('success', { title: 'Оплата прошла', active: 'success' })
})

app.get('/refill-fail', (req, res) => {
    res.render('fail', { title: 'Оплата не прошла', active: 'fail' })
})


// 1 Year Promo
app.get('/1year/activate', (req, res) => {
    res.render('1year-activate', { title: 'Активация пин-кода — 1 год Fame', color: '', text: 'Промокод'})
})

app.post('/1year/activate', async (req, res) => {
    try {
        var promocode = req.body.promocode
        var steamUrl = req.body.steamUrl
        console.log(`Введён промокод: ${promocode}`)
        if (promocode === 'AC416432-D080-4977-B8FE-4F418A5B919A') {
            // request.post(`https://fame-community.ru/1year/activate/promocode?steam_url=${steamUrl}&promocode=${promocode}`)
            return await AxiosInstance.post(
                `https://fame-community.ru//autodonate/1year/activate?steam_url=${steamUrl}&promocode=${promocode}`
            ).then((response) => {
                console.log(response.data)
                return res.send(response.data)
            }).catch((err) => {
                console.log(err)
                return res.redirect('https://fame-community.ru/refill-fail')
            })
        }
        return res.render('1year-activate', { title: 'Активация пин-кода — 1 год Fame', color: 'text-rose-500', text: 'Неверно'})
    } catch (err) {
        res.status(500).json(err)
    }
})

// 1 Year
app.get('/1year/brute', (req, res) => {
    res.render('1year-brute', { title: 'Брут — 1 год Fame', color: '', text: 'Пароль'})
})

app.post('/1year/brute', (req, res) => {
    try {
        var password = req.body.password
        console.log(`Введён секрет. пароль: ${password}`)
        if (password === '57') {
            return res.render('1year-result', {title: 'Результаты брута — 1 год Fame', name: '<span class="text-green-600 font-bold">Успех!</span><br>Следующий этап: <a class="text-indigo-600 hover:text-indigo-400" href="https://pastebin.com/muUMxWuv">тык</a><br>Пароль к сайту: <span class="text-gray-400">Дата основания проекта Fame в формате DD/MM/YY. Например: 01/01/2022</span>'})
        }
        return res.render('1year-brute', { title: 'Брут — 1 год Fame', color: 'text-rose-500', text: 'Неверно'})
    } catch (err) {
        res.status(500).json(err)
    }
})

async function startApp() {
    try {
        app.listen(PORT, () => console.log(`Server has been started on port - ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

startApp()