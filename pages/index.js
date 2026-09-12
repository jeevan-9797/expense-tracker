import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import BudgetChart from '../components/BudgetChart';

// Key used for persisting expenses in localStorage
const STORAGE_KEY = 'expenses';

export default function Home() {
  const [expenses, setExpenses] = useState([]);

  // Load expenses from localStorage when the component mounts
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (stored) {
      try {
        setExpenses(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse stored expenses:', e);
        setExpenses([]);
      }
    }
  }, []);

  // Save the current expenses array to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
    }
  }, [expenses]);

  // Handler passed to ExpenseForm for adding a new expense
  const handleAddExpense = (newExpense) => {
    // Ensure the expense has a unique id (timestamp based)
    const expenseWithId = { id: Date.now(), ...newExpense };
    setExpenses((prev) => [expenseWithId, ...prev]);
  };

  // Optional: handler for deleting an expense (useful for the list component)
  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Expense Tracker</title>
        <meta name="description" content="Track your daily expenses and view budget charts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <h1 className="text-3xl font-bold text-center mb-8">Expense Tracker</h1>
        {/* Form for adding new expenses */}
        <ExpenseForm onAddExpense={handleAddExpense} />

        {/* List of all recorded expenses */}
        <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />

        {/* Visual budget chart */}
        <BudgetChart expenses={expenses} />
      </main>
    </div>
  );
}
