// Miltiline template literal to wrap the CSV data

var csvData = `0134138,Alan Smith,333-580-2254,70 inches
0134139   ,    Christina    Lee    ,  123            4126347 ,        130 cm
0134140,       Doug         Thomas       , 532           4126347, 158cm`;

/*
Required output after cleaning:
 
0134138,Alan Smith,333-580-2254,70 inches
0134139,Christina Lee,123-412-6347,51 inches
0134140,Doug Thomas,532-412-6347,62 inches

*/

/* 
STEPS TO SOLVE IT:
1. Split the raw CSV string into an array of rows (one row per employee).
Hint: The data might include Unix (\n) or Windows (\r\n) line endings.

2. For each row, split it into individual fields (ID, Name, Phone Number, Height).
Note: You must handle cases where there is extra or missing whitespace around fields.


3.Remove any unnecessary spaces around the Name field to make it consistent.

4.Using a regular expression, extract the Area Code from the Phone Number field. The phone numbers are stored in two formats:
o	"555-555-5555"
o	"5555555555"


5. o	If the Height is in centimeters (cm), convert it to inches.
Conversion: 1 cm = 0.393701 inches
o	Round the result to the nearest whole number and format it as: "xx inches"
o	If the height is already in inches, leave it as is.
if height is already in inches.. return it... and if not do the above stepsl..


6. Create a new record for each employee with the following fields, separated by commas:
o	ID
o	Name
o	Area Code
o	Height in Inches


7. Combine all the processed records into a new CSV string, with rows separated by \n.
*/

function splitIntoRows(s) {
  return s.split(/\r?\n/);
}

function removeExtraWhiteSpace(s) {
  return s.replace(/\s+/, " ");
}

function extractAreaCode(phoneNumber) {
  let matches = phoneNumber.match(/(\(?\d{3}\)?)?[\s\-]*\d{3}[\s\-]*\d{4}/);
  if (matches) {
    return `${matches[1]}ABC`;
  }
  return phoneNumber;
}

function normalizeHeight(height) {
  // height is already in inches...
  if (height.endsWith("inches")) {
    return height;
  }
  // Get the height in cm as a Number...
  let cm = parseFloat(height);
  // I get the number attached to the height...
  let inches = cm * 0.39;

  return `${Math.round(inches)} inches`;
}

function rowToFields(row) {
  //split on with our without space on either side..

  let fields = row.split(/\s*,\s*/);

  //   Remove extra spaces from name field
  //   fields[0] ID, fields[1] Name, fields[2] phone , fields[3] height
  // fields[1] = fields[1].replace(/\s+/, " ");//replace this line with function call

  fields[1] = removeExtraWhiteSpace(fields[1]);

  //   Extract area code from phone number!
  // let phoneNumber = fields[2];
  // let matches = phoneNumber.match(/(\(?\d{3}\)?)?[\s\-]*\d{3}[\s\-]*\d{4}/);
  // if (matches) {
  //   // fields[2] = matches[1] + "1234456";

  //   fields[2] = matches[1];

  //   fields[2] = fields[2].trim();
  //   fields[2] = `${fields[2]}- ${fields[2]} - ${fields[2]}`;
  //   // Now you need to make this phone consistant for all records??
  // }
  // return fields;

  fields[2] = extractAreaCode(fields[2]);

  fields[3] = normalizeHeight(fields[3]);

  // to make these fields into rows...
  return fields.join(",");
}

function processCSV(csv) {
  // do all the required steps

  //   Step1: break the CSV into rows

  let rows = splitIntoRows(csv);

  //   Step 2: split all rows into array of fields..

  //   let data = [];
  //   for (let i = 0; i < rows.length; i++) {
  //     let row = rows[i];
  //     let fields = rowToFields(row);
  //     console.log(fields);
  //     data.push(fields);
  //   }

  //   for (let row of rows) {
  //     let fields = rowToFields(row);
  //     data.push(fields);
  //   }

  let data = rows.map((row) => rowToFields(row));

  // console.log(data.join("\n"));
  //   console.log(rows);
  return data.join("\n");
}

//Log output of processing
console.log(csvData);
console.log("-----------------------");
var processed = processCSV(csvData);
console.log(processed);

// Please practice this question, and the practice questions of Monday, because QAP2 is going to be hard, if YOU DONT DO IT...
// Comments: We were not ready for this type of QAP2?
// Comments: Class material did not cover a lot of what is give QAP2...
