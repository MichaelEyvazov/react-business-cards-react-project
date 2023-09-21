const chalk = require("chalk");
const data = require("./firstData.json");
const { registerUser } = require("../users/models/usersAccessDataService");
const { createCard } = require("../cards/models/cardsAccessDataService");
const confirUser = require("../users/helpers/confirUser");
const normalizeCard = require("../cards/helpers/normalizeCard");
const { generateUserPassword } = require("../users/helpers/bcrypt");

const generateFirstUsers = async () => {
  const { users } = data;
  users.forEach(async user => {
    try {
      user = await confirUser(user);
      user.password = generateUserPassword(user.password);
      await registerUser(user);
      return;
    } catch (error) {
      return console.log(chalk.redBright(error.message));
    }
  });
};
const generateFirstCards = async () => {
  const { cards } = data;
  cards.forEach(async card => {
    try {
      const userId = "6376274068d78742d84f31d2";
      card = await normalizeCard(card, userId);
      await createCard(card);
      return;
    } catch (error) {
      return console.log(chalk.redBright(error.message));
    }
  });
};


exports.generateFirstUsers = generateFirstUsers;
exports.generateFirstCards = generateFirstCards;