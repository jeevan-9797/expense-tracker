import React from 'react';

export default function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses recorded.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left border-b">Description</th>
              <th className="px-4 py-2 text-left border-b">Amount</th>
              <th className="px-4 py-2 text-left border-b">Date</th>
              <th className="px-4 py-2 text-left border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{expense.description}</td>
                <td className="px-4 py-2">${expense.amount.toFixed(2)}</td>
                <td className="px-4 py-2">{new Date(expense.date).toLocaleDateString()}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => onDeleteExpense(expense.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
