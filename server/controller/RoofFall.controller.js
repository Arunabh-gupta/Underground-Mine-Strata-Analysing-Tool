const db = require("../config/db");

exports.addData = (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .json({ message: "Cannot fill incomplete information" });
  }

  const tableName = "Roof_Fall_Info";
  const q_tableExists = `
    CREATE TABLE IF NOT EXISTS \`${tableName}\` (
        date DATE,
        time TIME,
        Area INT,
        Roof_Fall_Type VARCHAR(50),
        Roof_Fall_No INT 
    );
    `;

  db.query(q_tableExists, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Table creation failed" });
    } else {
      console.log("Table created or already exists");
    }
    // Continue to insert data into the table
    const date = req.body.date;
    const time = req.body.time;
    const Area = req.body.Area;
    const Roof_Fall_Type = req.body.Roof_Fall_Type;
    const Roof_Fall_No = req.body.Roof_Fall_No;

    const q_addData = `INSERT INTO \`${tableName}\` (date, time, Area, Roof_Fall_Type, Roof_Fall_No) VALUES (?, ?, ?, ?, ?)`;
    const values = [date, time, Area, Roof_Fall_Type, Roof_Fall_No];

    db.query(q_addData, values, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Data insertion failed" });
      }

      console.log("Data inserted successfully");
      return res.status(200).json({ message: "Data inserted successfully" });
    });
  });
};

exports.get = (req, res) => {
  if (!req.params.RoofFallNo) {
    return res.status(400).json({ error: "Incomplete parameters" });
  }
  const tableName = "Roof_Fall_Info";
  const q_tableExists = `
    CREATE TABLE IF NOT EXISTS \`${tableName}\` (
        date DATE,
        time TIME,
        Area INT,
        Roof_Fall_Type VARCHAR(50),
        Roof_Fall_No INT 
    );
    `;
  db.query(q_tableExists, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Table creation failed" });
    } else {
      console.log("Table created or already exists");
    }
    // Your SQL query to fetch data from the specified table
    const q_fetchData = `SELECT * FROM \`${tableName}\`;`;

    db.query(q_fetchData, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Data retrieval failed" });
      } else {
        console.log("Data retrieved successfully");
        return res.status(200).json(data);
      }
    });
  });
};

// exports.updateData = (req, res) =>{
//     if (!req.body) {
//         return res
//           .status(400)
//           .json({ message: "Cannot update with incomplete information" });
//       }

    
// }