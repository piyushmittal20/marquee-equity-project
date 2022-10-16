const express = require("express");
const {
  getCompanyList,
  createCompany,
  searchCompany,
} = require("../controllers/company");

const router = express.Router();

router.get("/company-list", getCompanyList);
router.post("/add-company", createCompany);
router.post("/search-company", searchCompany);

module.exports = router;
