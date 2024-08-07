const IncomeSchema = require("../models/incomeModal");

// AddingIncome
exports.addIncome = async (req, res) => {
  // console.log(req.body);
  const { title, amount, category, description, date } = req.body;

  const income = IncomeSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    // backend validation.
    if (!title || !amount || !category || !description || !date) {
      return res
        .status(400)
        .json({ message: "Please send all the required Information" });
    }

    if (amount <= 0 || !amount === "number") {
      return res.status(400).json({ message: "Amount must be a Number" });
    }

    await income.save();
    res.status(200).json({
      message: "Income Data Added successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: `Server Error: Error Occured while adding Income: ${err}`,
    });
  }
};

// Getting Income
exports.getIncome = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (err) {
    res.status(500).json({
      message: `Server Error: Error Occured while Fetching Income: ${err}`,
    });
  }
};

// Delete Income
exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  IncomeSchema.findByIdAndDelete(id)
  .then((income) => {
    res.status(200).json({
      message: `Success: Income Deleted Successfully`,
    });
  })
  .catch(err => {
    res.status(500).json({
        message: `Server Error: Error Occured while Deleting Income: ${err}`,
      });
  });
};
