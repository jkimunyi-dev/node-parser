const csv = require("csv-parser");
const fs = require("fs");

const parse = (file) => {
  const results = [];
  fs.createReadStream(file)
    .pipe(csv({}))
    .on("data", (data) => results.push(data))
    .on("end", () => {
      console.log(results);
    });
};

parse("./MOCK_DATA.csv");
