import { Router } from "./router.js"

const router = new Router()
router.add("/","/pages/all.html")
router.add("/about-characters","/pages/about-characters.html")
router.add("/season1","/pages/season1.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()