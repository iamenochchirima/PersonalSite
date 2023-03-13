const handler = (req, res) => {
  if (req.method === "POST") {
    try {
      const body = req.body;
      console.log(body);
      return res.status(200).json({ status: "Ok" });
    } catch (err) {
      console.log(err)
    }
  }

  return res.status(400).json({ message: "Bad request" });
};

export default handler;