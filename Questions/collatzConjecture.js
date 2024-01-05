// A program that calculates the collatz conjecture

const fs = require('fs'); // File system module

var startNumber = 7; // Specify the number here
var collatz_conjecture = [];
var statistics = [];

if (startNumber > 0) {
  for (var i = 1; i <= startNumber; i++) {
    var n = i;
    var sequence = [n];
    var steps = 0;
    var oddCount = 0;
    var evenCount = 0;

    while (n != 1) {
      if (n % 2 == 0) {
        n = n / 2;
        evenCount++;
      } else {
        n = n * 3 + 1;
        oddCount++;
      }
      sequence.push(n);
      steps++;
    }

    collatz_conjecture.push(sequence);
    statistics.push({ start: i, steps: steps, odd: oddCount, even: evenCount });
  }

  console.log(collatz_conjecture);
  console.log(statistics);

  // Debugging: Check if statistics array is populated
  console.log("Statistics array length:", statistics.length);

  if (statistics.length > 0) {
    exportToCSV(statistics); // Call function to export data to CSV
  } else {
    console.log("No data in statistics array to export.");
  }
} else {
  console.log("Please enter a positive number");
}

function exportToCSV(data) {
    if (!data || data.length === 0) {
      console.log('No data available to export.');
      return;
    }
  
    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(',')); // Add column headers
  
    for (const row of data) {
      const values = headers.map(header => {
        const escaped = ('' + row[header]).replace(/"/g, '\\"');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(','));
    }
  
    const csvData = csvRows.join('\n');
    fs.writeFileSync('collatz_data.csv', csvData); // Write to CSV file
    console.log('Data exported to collatz_data.csv');
  }
