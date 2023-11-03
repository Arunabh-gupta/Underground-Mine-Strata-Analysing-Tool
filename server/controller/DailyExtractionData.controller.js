const db = require("../config/db");

exports.addData = (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .json({ message: "Cannot fill incomplete information" });
  }
  if (!req.params.Date) {
    return res.status(400).json({ error: "Incomplete parameters" });
  }

  const tableName = "Daily_Extraction_Data";
  const q_tableExists = `
    CREATE TABLE IF NOT EXISTS \`${tableName}\` (
        date DATE,
        Value INT
    );
    `;
    db.query(q_tableExists, (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: "Table creation failed" });
        } else {
          console.log("Table created or already exists");
          // Continue to insert data into the table
          const date = req.body.date;
          const value = req.body.value;
          const q_addData = `INSERT INTO \`${tableName}\` (date, Value) VALUES (?, ?)`;
          const values = [date, value];
    
          db.query(q_addData, values, (err, data) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ error: "Data insertion failed" });
            }
    
            console.log("Data inserted successfully");
            return res.status(200).json({ message: "Data inserted successfully" });
          });
        }
      });
};
