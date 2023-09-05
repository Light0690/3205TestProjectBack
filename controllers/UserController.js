import * as users from "../users.json" assert { type: "json" };

export const login = (req, res) => {
  try {
    let data = users.default.filter((obj) => {
      return req.body.number
        ? obj.email === req.body.email && obj.number === req.body.number
        : obj.email === req.body.email;
    });

    if (!data.length) {
      return res.status(404).json({
        message: "Пользователь не найден",
      });
    }

    setTimeout(() => {
      res.json({data});
    }, 5000);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось авторизоваться",
    });
  }
};
