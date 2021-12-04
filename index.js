const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 5000

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index', { title: 'Fame | Сервера CS:GO', active: 'main' })
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

app.get('/refill-auto', (req, res) => {
    res.render('refill-auto', { title: 'Пополнение через автодонат', active: 'none', key: process.env.secret_word })
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

async function startApp() {
    try {
        app.listen(PORT, () => console.log(`Server has been started on port - ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

startApp()