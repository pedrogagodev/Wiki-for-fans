import { Router } from "./router.js"

const router = new Router()
router.add("/","/pages/all.html")
router.add("/season1","/pages/season1.html")
router.add("/season2","/pages/season2.html")
router.add("/season3","/pages/season3.html")
router.add("/season4","/pages/season4.html")
router.add("/season5","/pages/season5.html")
router.add("/season6","/pages/season6.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()