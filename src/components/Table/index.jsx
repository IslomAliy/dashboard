import React from "react";
import Layout from "../Layout";
import styles from "./table.module.scss";

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
                  <tr>
                    <td  className={styles.checkBox}>
                      <input type="checkbox"/>
                    </td>
                    <td>Алиса Морозова</td>
                    <td>$106.58</td>
                    <td>PL12334439893</td>
                    <td>
                      <span className={styles.unpaid}>Unpaid</span>
                    </td>
                    <td>8/30/14</td>
                    <td>8/30/14</td>
                  </tr>
                  <tr>
                    <td  className={styles.checkBox}>
                      <input type="checkbox"/>
                    </td>
                    <td>Алиса Морозова</td>
                    <td>$106.58</td>
                    <td>PL12334439893</td>
                    <td>
                      <span className={styles.overdue}>Overdue</span>
                    </td>
                    <td>8/30/14</td>
                    <td>8/30/14</td>
                  </tr>
                  <tr>
                    <td  className={styles.checkBox}>
                      <input type="checkbox"/>
                    </td>
                    <td>Алиса Морозова</td>
                    <td>$106.58</td>
                    <td>PL12334439893</td>
                    <td>
                      <span className={styles.unpaid}>Unpaid</span>
                    </td>
                    <td>8/30/14</td>
                    <td>8/30/14</td>
                  </tr>
                  <tr>
                    <td  className={styles.checkBox}>
                      <input type="checkbox"/>
                    </td>
                    <td>Алиса Морозова</td>
                    <td>$106.58</td>
                    <td>PL12334439893</td>
                    <td>
                      <span className={styles.unpaid}>Unpaid</span>
                    </td>
                    <td>8/30/14</td>
                    <td>8/30/14</td>
                  </tr>
                  <tr>
                    <td  className={styles.checkBox}>
                      <input type="checkbox"/>
                    </td>
                    <td>Алиса Морозова</td>
                    <td>$106.58</td>
                    <td>PL12334439893</td>
                    <td>
                      <span className={styles.unpaid}>Unpaid</span>
                    </td>
                    <td>8/30/14</td>
                    <td>8/30/14</td>
                  </tr>
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
