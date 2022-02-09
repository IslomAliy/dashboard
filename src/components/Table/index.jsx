import React from "react";
import Layout from "../Layout";
import styles from "./table.module.scss";

const data = [
  {
    id:1,
    name: 'Алиса Морозова',
    amount: '$106.58',
    inv: 'PL12334439893',
    status: true,
    statusData: 'Unpaid',
    invDate: '8/30/14',
    discDate: '8/30/14'
  },

  {
    id:2,
    name: 'Артём Соколов',
    amount: '$202.87',
    inv: 'PL12334439893',
    status: false,
    statusData: 'Overdue',
    invDate: '9/23/16',
    discDate: '9/23/16'
  },

  {
    id:3,
    name: 'Иван Семёнов',
    amount: '$943.65',
    inv: 'PL12334439893',
    status: true,
    statusData: 'Unpaid',
    invDate: '5/27/15',
    discDate: '5/27/15'
  },

  {
    id:4,
    name: 'Кристина Тарасова',
    amount: '$601.13',
    inv: 'PL12334439893',
    status: true,
    statusData: 'Unpaid',
    invDate: '9/4/12',
    discDate: '9/4/12'
  },

  {
    id:5,
    name: 'Ольга Ильина',
    amount: '$739.65',
    inv: 'PL12334439893',
    status: true,
    statusData: 'Unpaid',
    invDate: '6/19/14',
    discDate: '6/19/14'
  }
]

const Table = () => {
  return (
    <>
      <Layout>
        <div className={styles.tableWrapper}>
          <h1 className={styles.tableHeading}>Upcoming payments</h1>

          <div className={styles.tableBg}>
            <div className={styles.tableContainer}>
              <div className={styles.headSection}>
                <input type="text" className={styles.tableSearch} placeholder="Поиск..." />
                <ul className={styles.tableMenu}>
                  <li>
                    <a href="/" className={styles.tableActive}>Unpaid</a>
                  </li>
                  <li>
                    <a href="/">Overdue</a>
                  </li>
                  <li>
                    <a href="/">All</a>
                  </li>
                </ul>
              </div>

              <table className={styles.table}>
                <thead>
                  <tr>
                    <th  className={styles.checkBox}>
                      <input type="checkbox"/>
                    </th>
                    <th className={styles.name}>Name</th>
                    <th className={styles.amount}>Amount</th>
                    <th className={styles.inv}>Inv</th>
                    <th className={styles.status}>Status</th>
                    <th className={styles.dates}>Inv Date</th>
                    <th className={styles.dates}>Disc Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((datas) => (
                     <tr key={datas.id}>
                      <td  className={styles.checkBox}>
                        <input type="checkbox"/>
                      </td>
                      <td>{datas.name}</td>
                      <td>{datas.amount}</td>
                      <td>{datas.inv}</td>
                      <td>
                        <span className={`${datas.status ? styles.unpaid : styles.overdue}`}>{datas.statusData}</span>
                      </td>
                      <td>{datas.invDate}</td>
                      <td>{datas.discDate}</td>
                   </tr>
                  ))}  
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Table;
