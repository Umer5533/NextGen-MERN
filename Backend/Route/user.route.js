import express from "express"
import { login, signup, adminlogin } from "../Controller/user.controller.js"

const router = express.Router()

router.post("/signup",  signup)
router.post("/login", login)
router.post("/adminlogin", adminlogin)

export default router
