import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.mainTable}>
      <thead>
        <tr>
          <th className={css.tableTitles}>Type</th>
          <th className={css.tableTitles}>Amount</th>
          <th className={css.tableTitles}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id} className={css.rowOfData}>
              <td className={css.oneItem}>{item.type}</td>
              <td className={css.oneItem}>{item.amount}</td>
              <td className={css.oneItem}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
