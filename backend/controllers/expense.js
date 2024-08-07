const ExpenseSchema = require("../models/ExpenseModal");

// AddingExpense
exports.addExpense = async (req, res) => {
  // console.log(req.body);
  const { title, amount, category, description, date } = req.body;

  const expense = ExpenseSchema({
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

    await expense.save();
    res.status(200).json({
      message: "Expense Data Added successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: `Server Error: Error Occured while adding Expense: ${err}`,
    });
  }
};

// Getting Expense
exports.getExpense = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({
      message: `Server Error: Error Occured while Fetching Expense: ${err}`,
    });
  }
};

// Delete Expense
exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  ExpenseSchema.findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({
        message: `Success: Expense Deleted Successfully`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: `Server Error: Error Occured while Deleting Expense: ${err}`,
      });
    });
};
