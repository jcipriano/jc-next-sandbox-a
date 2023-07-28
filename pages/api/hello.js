export default function handler(req, res) {
  res.status(200).json({
    FETCH_WITH: process.env.FETCH_WITH
  });
}
