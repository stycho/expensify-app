import React from 'react';
import { connect } from 'react-redux';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

const ExpensesSummery = ({ expenseTotal, expenseCount }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedPrice = numeral(expenseTotal / 100).format('$0,0.00');
  return (
    <div>
      <p>Viewing {expenseCount} {expenseWord} totalling {formattedPrice}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visableExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseTotal: expensesTotal(visableExpenses),
    expenseCount: visableExpenses.length
  }
}

export default connect(mapStateToProps)(ExpensesSummery);