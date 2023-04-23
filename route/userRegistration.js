const express = require('express');
const router = express.Router();

const { userRegister, addOrganiser, login, logout, updateOrganiser, deleteOrganiser, getOrganiser, getRegisteredUser, getRegisterUserCount,getUserProfile,getRegisteredUserCount} = require('../controllers/auth')

const { isAuthenticatedUser, roleValidation, allRoleValidation } = require('../middlewares/auth')

router.post('/user/registration', userRegister)
router.get('/user/event/:id', isAuthenticatedUser, allRoleValidation, getRegisteredUser)
router.get('/all/participants', isAuthenticatedUser, allRoleValidation, getRegisterUserCount)
router.post('/registration/organiser', isAuthenticatedUser, roleValidation, addOrganiser)
router.get('/registration/organiser', isAuthenticatedUser, roleValidation, getOrganiser)
router.put('/registration/organiser/:id', isAuthenticatedUser, roleValidation, updateOrganiser)
router.delete('/registration/organiser/:id', isAuthenticatedUser, roleValidation, deleteOrganiser)
router.get('/me', isAuthenticatedUser, getUserProfile)

router.post('/login', login)
router.get('/logout', logout)
router.get('/me', isAuthenticatedUser, getUserProfile)

module.exports = router;


// "name":"Vinayak Singh",
// "email": "vinayak.s@payzo.com",
// "password":"Admin@123",
// "phone":"7440547559",
// "branch":"BTECH CSE",
