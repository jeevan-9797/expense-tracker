import React, { useState } from 'react';

/**
 * ExpenseForm component – collects expense data and passes it to the parent.
 * The parent component is responsible for persisting the data (e.g., localStorage).
 */
export default function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim() || !amount) return;

    const expense = {
      id: Date.now(), // simple unique identifier
      description: description.trim(),
      amount: parseFloat(amount),
      date: date ? new Date(date).toISOString() : new Date().toISOString(),
    };

    // Notify parent to handle state update and persistence
    if (typeof onAddExpense === 'function') {
      onAddExpense(expense);
    }

    // Reset form fields
    setDescription('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        step="0.01"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition-colors"
      >
        Add Expense
      </button>
    </form>
  );
}
