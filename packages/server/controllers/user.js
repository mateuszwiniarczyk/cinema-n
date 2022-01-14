const users = [];

export const signin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  return res.status(200).send(email);
};

export const signup = async (req, res) => {
  const { email, password } = req.body;
  users.push({ email, password });
  return res.status(200).send(email);
};
