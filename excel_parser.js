const XLSX = require("xlsx");

const parse = (file) => {
  const workbook = XLSX.readFile(file);
  const sheet_name_list = workbook.SheetNames;
  const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], {
    header: 1,
  });
  return data;
};

console.log(parse("./example.xlsx"));
