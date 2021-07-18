const express = require('express');
const path = require('path');

const app = express()
const PORT = 8080

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
app.get('/refill', (req, res) => {
    res.render('refill', { title: 'Пополнение', active: 'none' })
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
app.get('/rules', (req, res) => {
    res.render('rules', { title: 'К ознакомлению', active: 'none' })
})

app.get('/rules-server', (req, res) => {
    res.render('rules-server', { title: 'Правила сервера', active: 'none' })
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


async function startApp() {
    try {
        app.listen(PORT, () => console.log(`Server has been started on port - ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

startApp()