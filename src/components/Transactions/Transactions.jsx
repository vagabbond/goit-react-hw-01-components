import {
  TransactionHistoryTable,
  TransactionHistoryThead,
  TransactionHistoryTbody,
  TransactionHistoryTr,
  TransactionHistoryTh,
  TransactionHistoryTd,
} from './Transactions.styled.jsx';
import PropTypes from 'prop-types';

const Transactions = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <TransactionHistoryThead>
        <TransactionHistoryTr>
          <TransactionHistoryTh>Type</TransactionHistoryTh>
          <TransactionHistoryTh>Amount</TransactionHistoryTh>
          <TransactionHistoryTh>Currency</TransactionHistoryTh>
        </TransactionHistoryTr>
      </TransactionHistoryThead>
      <TransactionHistoryTbody>
        {items.map(item => {
          return (
            <TransactionHistoryTr key={item.id}>
              <TransactionHistoryTd>{item.type}</TransactionHistoryTd>
              <TransactionHistoryTd>{item.amount}</TransactionHistoryTd>
              <TransactionHistoryTd>{item.currency}</TransactionHistoryTd>
            </TransactionHistoryTr>
          );
        })}
      </TransactionHistoryTbody>
    </TransactionHistoryTable>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Transactions;
