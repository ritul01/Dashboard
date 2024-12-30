import React, { useState } from "react";

const PayoutDetails = () => {
  const [payouts] = useState([
    { id: 1, amount: 1200, date: "2024-12-28", status: "Completed" },
    { id: 2, amount: 1500, date: "2024-12-25", status: "Pending" },
    { id: 3, amount: 800, date: "2024-12-20", status: "Completed" },
    { id: 4, amount: 2000, date: "2024-12-15", status: "Failed" },
  ]);

  return (
    <div>
        <h2>Payout Details</h2>
      <table className="payout-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payouts.map((payout) => (
            <tr key={payout.id}>
              <td>{payout.id}</td>
              <td>${payout.amount}</td>
              <td>{payout.date}</td>
              <td>
                <span className={`status ${payout.status.toLowerCase()}`}>
                  {payout.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayoutDetails;
