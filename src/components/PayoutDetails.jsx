import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable"; // For creating tables in PDF
import Papa from "papaparse";

const PayoutDetails = () => {
  // Sample payout data
  const [payouts, setPayouts] = useState([
    { author: "Alice", articles: 5, payout: 100 },
    { author: "Bob", articles: 3, payout: 75 },
    { author: "Charlie", articles: 8, payout: 160 },
  ]);

  // Function to export as PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Payout Details", 14, 10);
    doc.autoTable({
      head: [["Author", "Articles", "Payout"]],
      body: payouts.map((item) => [item.author, item.articles, `$${item.payout}`]),
    });
    doc.save("payout-details.pdf");
  };

  // Function to export as CSV
  const exportToCSV = () => {
    const csvData = payouts.map((item) => ({
      Author: item.author,
      Articles: item.articles,
      Payout: `$${item.payout}`,
    }));

    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "payout-details.csv";
    link.click();
  };

  return (
    <div className="payout-details">
      <h2>Payout Details</h2>
      <table border="1" style={{ width: "100%", marginBottom: "1rem" }}>
        <thead>
          <tr>
            <th>Author</th>
            <th>Articles</th>
            <th>Payout</th>
          </tr>
        </thead>
        <tbody>
          {payouts.map((item, index) => (
            <tr key={index}>
              <td>{item.author}</td>
              <td>{item.articles}</td>
              <td>${item.payout}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={exportToPDF} style={{ marginRight: "1rem" }}>
        Export to PDF
      </button>
      <button onClick={exportToCSV}>Export to CSV</button>
    </div>
  );
};

export default PayoutDetails;
