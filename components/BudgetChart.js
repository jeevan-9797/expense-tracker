import React from 'react';

/**
 * BudgetChart component – displays a simple budget progress bar based on the
 * expenses passed in via props. The component assumes a fixed budget of $1000.
 * It calculates the total amount spent and shows the percentage of the budget
 * that has been used.
 *
 * Props
 * -----
 * expenses: Array<{ amount: number }>
 *   An array of expense objects. Each object should contain an `amount`
 *   property (numeric). The component is tolerant of missing or malformed
 *   entries – they are ignored in the total calculation.
 */
export default function BudgetChart({ expenses }) {
  // Guard against undefined/null props
  const safeExpenses = Array.isArray(expenses) ? expenses : [];

  // Calculate total spent (ignore non‑numeric amounts)
  const totalSpent = safeExpenses.reduce((sum, exp) => {
    const amt = parseFloat(exp.amount);
    return !isNaN(amt) ? sum + amt : sum;
  }, 0);

  // Fixed budget – can be made configurable later
  const BUDGET = 1000;
  const percentUsed = Math.min((totalSpent / BUDGET) * 100, 100);

  return (
    <div className="my-8">
      <h2 className="text-xl font-semibold mb-2">Budget Overview</h2>
      <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
        <div
          className="bg-green-500 h-6"
          style={{ width: `${percentUsed}%` }}
        ></div>
      </div>
      <p className="mt-2 text-sm text-gray-700">
        {totalSpent.toFixed(2)} spent of {BUDGET.toLocaleString()}
      </p>
    </div>
  );
}
