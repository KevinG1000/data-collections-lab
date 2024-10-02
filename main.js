// Part 1: Refactoring Old Code
let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let rows = csv.split("\n");

// Part 2: Expanding Functionality
let headers = rows[0].split(",");
let data = rows.slice(1).map(row => row.split(","));

// Part 3: Transforming Data
let formattedData = data.map(row => {
  let obj = {};
  headers.forEach((header, index) => {
    obj[header.toLowerCase()] = row[index];
  });
  return obj;
});

// Part 4: Sorting and Manipulating Data
formattedData.pop();
formattedData.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
formattedData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

let totalAge = 0;
formattedData.forEach(person => totalAge += parseInt(person.age));
let averageAge = totalAge / formattedData.length;

// Part 5: Full Circle - Converting back to CSV
let csvData = headers.join(",") + "\n" +
  formattedData.map(person => Object.values(person).join(",")).join("\n");

console.log(csvData);
console.log(`Average Age: ${averageAge}`);
