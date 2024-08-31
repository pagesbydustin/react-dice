const { Pool } = require("@vercel/postgres");
console.log(Pool);
async function handler(req, res) {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  switch (req.method) {
    case "POST":
      // Create a new game setting
      const { gamerTag, timer, persistentScore, round } = req.body;
      try {
        const client = await pool.connect();
        const result = await client.query(
          "INSERT INTO game_settings (gamerTag, timer, persistentScore, round) VALUES ($1, $2, $3, $4) RETURNING *",
          [gamerTag, timer, persistentScore, round]
        );
        res.json(result.rows[0]);
        client.release();
      } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
      }
      break;
    case "GET":
      // Retrieve game settings for a specific gamerTag
      const gamerTag = req.query.gamerTag;
      try {
        const client = await pool.connect();
        const result = await client.query(
          "SELECT * FROM game_settings WHERE gamerTag = $1",
          [gamerTag]
        );
        res.json(result.rows);
        client.release();
      } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
      }
      break;
    case "PUT":
      // Update game settings for a specific gamerTag
      const { gamerTag, timer, persistentScore, round } = req.body;
      try {
        const client = await pool.connect();
        const result = await client.query(
          "UPDATE game_settings SET timer = $2, persistentScore = $3, round = $4 WHERE gamerTag = $1 RETURNING *",
          [gamerTag, timer, persistentScore, round]
        );
        res.json(result.rows[0]);
        client.release();
      } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
      }
      break;
    case "DELETE":
      // Delete game settings for a specific gamerTag
      const gamerTag = req.query.gamerTag;
      try {
        const client = await pool.connect();
        const result = await client.query(
          "DELETE FROM game_settings WHERE gamerTag = $1 RETURNING *",
          [gamerTag]
        );
        res.json(result.rows[0]);
        client.release();
      } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
      }
      break;
    default:
      res.status(405).send("Method Not Allowed");
  }
}

module.exports = handler;
