// Simple income tax calculator

function calculateIncomeTax(income, deduction = 0, taxCredits = 0) {
    const taxBrackets = [
      { threshold: 50000, rate: 0.1 },
      { threshold: 100000, rate: 0.15 },
      { threshold: 200000, rate: 0.2 }
    ];
  
    let taxableIncome = Math.max(0, income - deduction);
    let totalTax = 0;
    let previousThreshold = 0;
    let taxBreakdown = [];

    for (const { threshold, rate } of taxBrackets) {
      if (taxableIncome > threshold) {
        const taxAtThisBracket = (threshold - previousThreshold) * rate;
        taxBreakdown.push({ bracket: `${previousThreshold}-${threshold}`, tax: taxAtThisBracket.toFixed(2) });
        totalTax += taxAtThisBracket;
      } else {
        const taxAtThisBracket = (taxableIncome - previousThreshold) * rate;
        taxBreakdown.push({ bracket: `${previousThreshold}-${taxableIncome}`, tax: taxAtThisBracket.toFixed(2) });
        totalTax += taxAtThisBracket;
        break; // Break here instead of return to continue with the tax credit deduction
      }
      previousThreshold = threshold;
    }
  
    if (taxableIncome > taxBrackets[taxBrackets.length - 1].threshold) {
      const rate = taxBrackets[taxBrackets.length - 1].rate;
      const taxAtThisBracket = (taxableIncome - previousThreshold) * rate;
      taxBreakdown.push({ bracket: `${previousThreshold}+`, tax: taxAtThisBracket.toFixed(2) });
      totalTax += taxAtThisBracket;
    }
  
    // Apply tax credits after the total tax has been calculated
    totalTax = Math.max(0, totalTax - taxCredits); // Ensures that total tax is not negative

    return { totalTax: totalTax.toFixed(2), taxBreakdown };
}

// Example usage:
const userIncome = 125000;
const userDeduction = 1500;
const userTaxCredits = 700; // Example tax credit
const result = calculateIncomeTax(userIncome, userDeduction, userTaxCredits);
console.log(`Your income is ${userIncome} and after a deduction of ${userDeduction}, the taxable income is ${userIncome - userDeduction}. After applying tax credits of ${userTaxCredits}, the tax owed is: ${result.totalTax}`);
console.log('Tax breakdown by bracket:', result.taxBreakdown);
