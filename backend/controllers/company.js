const Company = require("../models/company");
const { Op } = require("sequelize");
const axios = require("axios");
var HTMLParser = require("node-html-parser");

exports.getCompanyList = async (req, res) => {
  const list = await Company.findAll({});

  if (!list) {
    const error = new Error("No Data Found!!");
    error.statusCode = 402;
    throw error;
  } else {
    res.status(200).json({
      list: list,
    });
  }
};

exports.createCompany = async (req, res) => {
  const { name, address, cinNumber } = req.body;

  const company = await Company.findOne({ where: { cinNumber: cinNumber } });

  if (company) {
    return res.status(402).json({
      message: "Company with same CIN number already existed",
    });
  }

  const item = await Company.create({
    name,
    cinNumber,
    address,
  });

  res.status(201).json({
    message: "Company created successfully",
    company: item,
  });
};

exports.searchCompany = async (req, res) => {
  const { search } = req.body;

  const val = {
    search: search,
    filter: "company",
  };

  const { data } = await axios.post(
    "https://www.zaubacorp.com/custom-search",
    val
  );

  const root = HTMLParser.parse(data);

  var arr = [];

  root.getElementsByTagName("div").forEach((el) => {
    var str = el.id;

    arr.push({ name: str.split("/")[1], cin: str.split("/")[2] });
  });

  res.status(200).json({
    list: arr,
  });
};
