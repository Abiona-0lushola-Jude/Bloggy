const express = require('express')
const router = express.Router()
const Blog = require('../blogModel/modelBlog')
const Todo = require('../todoModel/modelTodo')
const axios = require('axios')
const cheerio = require('cheerio')

const todo = ([
    {
        title:"Visit Granny",
        createdAt:new Date(),
    },
    {
        title:"Start Driving",
        createdAt:new Date(),
    },
    {
        title:"Start Internship",
        createdAt:new Date(),
    },
    {
        title:"Book Flight",
        createdAt:new Date(),
    },
])




router.get('/get/todo', async(req,res)=>{
    try {
        const allTodo = await todo
        res.status(200).json(allTodo)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

const blog = [
    {
        title:'How i spend my day',
        desc:'A details of how i have spent my day as a student learing dev',
        markdown:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at reprehenderit veritatis temporibus reiciendis deserunt, sed porro dignissimos, consequatur in enim maiores. Consequatur odit pariatur harum facilis cum voluptas dicta, voluptatem dolorum facere accusamus quod! Quisquam, accusantium a delectus minus molestiae commodi exercitationem illo eligendi tenetur, excepturi doloremque sit numquam possimus soluta quibusdam? Libero enim consectetur minima, facere fuga non iste suscipit officiis, eos ea beatae! Tempora ab at eum?',
    },
    {
        title:'My first interview',
        desc:'Sharing how my interview went and question entry-level should look out for',
        markdown:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at reprehenderit veritatis temporibus reiciendis deserunt, sed porro dignissimos, consequatur in enim maiores. Consequatur odit pariatur harum facilis cum voluptas dicta, voluptatem dolorum facere accusamus quod! Quisquam, accusantium a delectus minus molestiae commodi exercitationem illo eligendi tenetur, excepturi doloremque sit numquam possimus soluta quibusdam? Libero enim consectetur minima, facere fuga non iste suscipit officiis, eos ea beatae! Tempora ab at eum?',
    },
    {
        title:'A day at Google',
        desc:'My experience at Google (Lorem ipsum dolo Quam at reprehenderit veritatis temporibus reiciendis deserunt,)',
        markdown:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at reprehenderit veritatis temporibus reiciendis deserunt, sed porro dignissimos, consequatur in enim maiores. Consequatur odit pariatur harum facilis cum voluptas dicta, voluptatem dolorum facere accusamus quod! Quisquam, accusantium a delectus minus molestiae commodi exercitationem illo eligendi tenetur, excepturi doloremque sit numquam possimus soluta quibusdam? Libero enim consectetur minima, facere fuga non iste suscipit officiis, eos ea beatae! Tempora ab at eum?',
    },
    {
        title:'Tips from senior dev to juniors',
        desc:'Tips shared by senior devs to junior dev that improve them over time',
        markdown:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at reprehenderit veritatis temporibus reiciendis deserunt, sed porro dignissimos, consequatur in enim maiores. Consequatur odit pariatur harum facilis cum voluptas dicta, voluptatem dolorum facere accusamus quod! Quisquam, accusantium a delectus minus molestiae commodi exercitationem illo eligendi tenetur, excepturi doloremque sit numquam possimus soluta quibusdam? Libero enim consectetur minima, facere fuga non iste suscipit officiis, eos ea beatae! Tempora ab at eum?',
    },
    {
        title:'Tips for interviews',
        desc:'Tips shared by senior devs to junior dev that improve them over time',
        markdown:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at reprehenderit veritatis temporibus reiciendis deserunt, sed porro dignissimos, consequatur in enim maiores. Consequatur odit pariatur harum facilis cum voluptas dicta, voluptatem dolorum facere accusamus quod! Quisquam, accusantium a delectus minus molestiae commodi exercitationem illo eligendi tenetur, excepturi doloremque sit numquam possimus soluta quibusdam? Libero enim consectetur minima, facere fuga non iste suscipit officiis, eos ea beatae! Tempora ab at eum?',
    },
]


router.get('/blog', async (req,res)=>{
    try {
        const allBlog = await blog
        res.status(200).json(allBlog)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.get('/oneBlog/:id', async (req,res)=>{
    const dataId = req.params.id
    const FilteredBlog = blog.filter(data => data.title === dataId)
    try {
        const realBlog = await FilteredBlog
        res.status(200).json(realBlog)
    } catch (err) {
        res.status(404).json({message: err.message})
    }
})
const articles = []
const address = "https://www.theguardian.com/uk/film"

router.get('/news',async (req,res)=>{
    try {
         await axios.get(address)
        .then(response => {
            const html = response.data

            const $ = cheerio.load(html)


            $('a:contains("film")', html).each(function () {
                const title= $(this).text()
                const url= $(this).attr('href')
                articles.push({
                    title,
                    url,
                })
            })
        }).catch(err => console.log(err))
        res.json(articles)
    } catch (err) {
        res.json({err: err.message})
    }
})
module.exports = router