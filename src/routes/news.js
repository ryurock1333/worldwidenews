const express = require('express')
const newsRouter = express.Router()
const axios = require('axios');
const { application } = require('express');
const option = {
    headers: {
        "x-api-key": "7CT_fUUnb9S-h4h1PLcycDtIA6I4C_Ee0bkJYTPuofw"
    }
}
let articlesList = [];

newsRouter.get('/FAQ', async (req, res) => {
    try {
        const newsAPI = await axios.get('https://api.newscatcherapi.com/v2/search?q=football&countries=EN,TH&page_size=15', option)
        articlesList = newsAPI.data.articles;
        res.render('FAQ', { articles: newsAPI.data.articles })
    } catch (err) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.requiest) {
            console.log(err.requiest)
        } else {
            console.error('Error', err.message)
        }
    }
})

newsRouter.get('/About', async (req, res) => {
    try {
        const newsAPI = await axios.get('https://api.newscatcherapi.com/v2/search?q=football&countries=EN,TH&page_size=15', option)
        articlesList = newsAPI.data.articles;
        res.render('About', { articles: newsAPI.data.articles })
    } catch (err) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.requiest) {
            console.log(err.requiest)
        } else {
            console.error('Error', err.message)
        }
    }
})
newsRouter.get('/Sport', async (req, res) => {
    try {
        const newsAPI = await axios.get('https://api.newscatcherapi.com/v2/search?q=Fifa&countries=EN,SG&page_size=15', option)
        articlesList = newsAPI.data.articles;
        res.render('news-sport', { articles: newsAPI.data.articles })
    } catch (err) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.requiest) {
            console.log(err.requiest)
        } else {
            console.error('Error', err.message)
        }
    }
})

newsRouter.get('/Enter', async (req, res) => {
    try {
        const newsAPI = await axios.get('https://api.newscatcherapi.com/v2/search?q=entertainment&countries=EN,VN&page_size=15', option)
        articlesList = newsAPI.data.articles;
        res.render('news-entertain', { articles: newsAPI.data.articles })
    } catch (err) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.requiest) {
            console.log(err.requiest)
        } else {
            console.error('Error', err.message)
        }
    }
})

newsRouter.get('', async (req, res) => {
    try {
        const newsAPI = await axios.get('https://api.newscatcherapi.com/v2/search?q=popular&countries=SG,HK,ID&page_size=6', option)
        articlesList = newsAPI.data.articles;
        res.render('news', { articles: newsAPI.data.articles })
    } catch (err) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.requiest) {
            console.log(err.requiest)
        } else {
            console.error('Error', err.message)
        }
    }
})

newsRouter.get('/Wor1', async (req, res) => {
    try {
        const newsAPI = await axios.get('https://api.newscatcherapi.com/v2/search?q=apple&countries=SG,HK,ID&page_size=6', option)
        articlesList = newsAPI.data.articles;
        res.render('newsSP', { articles: newsAPI.data.articles })
    } catch (err) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.requiest) {
            console.log(err.requiest)
        } else {
            console.error('Error', err.message)
        }
    }
})

newsRouter.get('/Asia', async (req, res) => {
    try {
        const newsAPI = await axios.get('https://api.newscatcherapi.com/v2/search?q=asia&countries=CA,SG&page_size=15', option)
        articlesList = newsAPI.data.articles;
        res.render('news1', { articles: newsAPI.data.articles })
    } catch (err) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.requiest) {
            console.log(err.requiest)
        } else {
            console.error('Error', err.message)
        }
    }
})

newsRouter.get('/Ant', async (req, res) => {
    try {
        const newsAPI = await axios.get('https://api.newscatcherapi.com/v2/search?q=Ukraine&countries=NZ,FR,IN&page_size=15', option)
        articlesList = newsAPI.data.articles;
        res.render('news5', { articles: newsAPI.data.articles })
    } catch (err) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.requiest) {
            console.log(err.requiest)
        } else {
            console.error('Error', err.message)
        }
    }
})

newsRouter.get('/articles/:id', async (req, res) => {
    try {
        const id = req.params.id;
        res.render('news-by-id', { article: articlesList[id] })
    } catch (err) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.requiest) {
            console.log(err.requiest)
        } else {
            console.error('Error', err.message)
        }
    }
})




newsRouter.get('/Africa', async (req, res) => {
    try {
        const newsAPI = await axios.get('https://api.newscatcherapi.com/v2/search?q=Ukraine&countries=SA,EG,AL&page_size=15', option)
        articlesList = newsAPI.data.articles;
        res.render('news2', { articles: newsAPI.data.articles })
        console.log(newsAPI.data)
    } catch (err) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.requiest) {
            console.log(err.requiest)
        } else {
            console.error('Error', err.message)
        }
    }
})


newsRouter.get('/Europe', async (req, res) => {
    try {
        const newsAPI = await axios.get('https://api.newscatcherapi.com/v2/search?q=Ukraine&countries=RU,UKNO&page_size=15', option)
        articlesList = newsAPI.data.articles;
        res.render('news3', { articles: newsAPI.data.articles })
        console.log(newsAPI.data)
    } catch (err) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.requiest) {
            console.log(err.requiest)
        } else {
            console.error('Error', err.message)
        }
    }
})

newsRouter.get('/NA', async (req, res) => {
    try {
        const newsAPI = await axios.get('https://api.newscatcherapi.com/v2/search?q=Ukraine&countries=SA&page_size=15', option)
        articlesList = newsAPI.data.articles;
        res.render('news4', { articles: newsAPI.data.articles })
        console.log(newsAPI.data)
    } catch (err) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.requiest) {
            console.log(err.requiest)
        } else {
            console.error('Error', err.message)
        }
    }
})


newsRouter.get('/SA', async (req, res) => {
    try {
        const newsAPI = await axios.get('https://api.newscatcherapi.com/v2/search?q=Car&countries=MZ,SA&page_size=15', option)
        articlesList = newsAPI.data.articles;
        res.render('news6', { articles: newsAPI.data.articles })
        console.log(newsAPI.data)
    } catch (err) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.requiest) {
            console.log(err.requiest)
        } else {
            console.error('Error', err.message)
        }
    }
})

newsRouter.get('/Aus', async (req, res) => {
    try {
        const newsAPI = await axios.get('https://api.newscatcherapi.com/v2/search?q=Car&countries=NZ,AUS&page_size=15', option)
        articlesList = newsAPI.data.articles;
        res.render('news7', { articles: newsAPI.data.articles })
        console.log(newsAPI.data)
    } catch (err) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.requiest) {
            console.log(err.requiest)
        } else {
            console.error('Error', err.message)
        }
    }
})

newsRouter.get('/Search', async (req, res) => {
    try {
        const query = req.query.q
        const newsAPI = await axios.get(`https://api.newscatcherapi.com/v2/search?q=${query}&countries=EN,SG&page_size=15`, option)
        articlesList = newsAPI.data.articles;
        res.render('Search', { articles: newsAPI.data.articles })
    } catch (err) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.requiest) {
            console.log(err.requiest)
        } else {
            console.error('Error', err.message)
        }
    }
})
module.exports = newsRouter