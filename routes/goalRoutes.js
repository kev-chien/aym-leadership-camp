const mongoose = require("mongoose");
const Goal = mongoose.model("goals");

module.exports = (app) => {
  //generic get all goals route (caution - big)
  app.get("/api/goals", async (req, res) => {
    const allGoals = await Goal.find();

    res.send(allGoals);
  });

  //create new goal
  app.post("/api/goals", async (req, res) => {
    const { note, name } = req.body;
    console.log(
      'BODY', req.body
    );

    const newGoal = await Goal.create({
      name,
      note,
    });

    const allGoals = await Goal.find();
    res.send(allGoals);
  });

  //allow edit of note or highlight by admin
  app.put("/api/goals/:_id", async (req, res) => {
    const { _id } = req.params;
    const { note, name, initials, highlighted } = req.body;

    const goal = await Goal.findOneAndUpdate({ _id }, { note, highlighted, name, initials });

    const allGoals = await Goal.find();
    res.send(allGoals);
  });

  //generic delete route
  app.delete("/api/goals/:_id", async (req, res) => {
    const { _id } = req.params;
    const goal = await Goal.findByIdAndRemove({ _id });

    const allGoals = await Goal.find();
    res.send(allGoals);
  });
};
