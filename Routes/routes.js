const router = require('express').Router();
const {addSchool, listSchools} = require('../Controllers/controllers.js');
const {addSchoolValidation, listSchoolsValidation} = require('../Middlewares/middleware.js');

router.post("/addSchool", addSchoolValidation, addSchool);
router.post("/listSchools", listSchoolsValidation, listSchools);



module.exports = router;