const db = require('../config/db')
exports.addData = (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .json({ message: "Cannot fill incomplete information" });
  }

  if (
    !req.params.Location ||
    !req.params.Instrument_Name ||
    !req.params.RefNo
  ) {
    return res.status(400).json({ error: "Incomplete parameters" });
  }

  const Location = req.params.Location;
  const Instrument_Name = req.params.Instrument_name;
  const RefNo = req.params.RefNo;

  // Check whether the table exists or not. If not, then create one
  const tableName = `${Location}_${Instrument_Name}_${RefNo}`; // Create a safe table name

  const q_tableExists = `
    CREATE TABLE IF NOT EXISTS \`${tableName}\` (
        date DATE,
        time TIME,
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
      const time = req.body.time;
      const value = req.body.value;
      const q_addData = `INSERT INTO \`${tableName}\` (date, time, Value) VALUES (?, ?, ?)`;
      const values = [date, time, value];

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

exports.fetchInfo = (req, res) => {
  if (
    !req.params.Location ||
    !req.params.Instrument_Name ||
    !req.params.RefNo
  ) {
    return res.status(400).json({ error: "Incomplete parameters" });
  }
  const Location = req.params.Location;
  const Instrument_Name = req.params.Instrument_Name;
  const RefNo = req.params.RefNo;

  // Form the table name
  const tableName = `${Location}_${Instrument_Name}_${RefNo}`; // Create a safe table name

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
};

exports.updateData = (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .json({ message: "Cannot update with incomplete information" });
  }
  if (
    !req.params.Location ||
    !req.params.Instrument_Name ||
    !req.params.RefNo
  ) {
    return res.status(400).json({ error: "Incomplete parameters" });
  }
  const Location = req.params.Location;
  const Instrument_Name = req.params.Instrument_Name;
  const RefNo = req.params.RefNo;
  const Date = req.params.Date;
  const Time = req.params.Time;

  // Your update query here
  const tableName = `${Location}_${Instrument_Name}_${RefNo}`;
  const q_updateData = `
      UPDATE \`${tableName}\`
      SET Value = ?
      WHERE date = ? AND time = ?;
    `;
  const value = req.body.value;

  db.query(q_updateData, [value, Date, Time], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Update failed" });
    } else {
      console.log("Data updated successfully");
      return res.status(200).json({ message: "Data updated successfully" });
    }
  });
};
