import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// import amazonLogo from '../public/images/amazon.png';
import amazonLogo from '../images/amazon.png';

const OrderDetails = () => {
  const generatePdf = () => {
    const doc = new jsPDF();

    // Add Amazon logo
    const logoWidth = 50;
    const logoHeight = 20;
    doc.addImage(amazonLogo, 'PNG', 10, 10, logoWidth, logoHeight);

    // Add header text
    doc.setFontSize(18);
    doc.setTextColor(40);
    doc.text('Tax Invoice/Bill of Supply/Cash Memo', 10, 35);

    // Add order details
    doc.setFontSize(12);
    doc.text('Order Number: 171-8690573-9149961', 10, 45);
    doc.text('Invoice Number: NAG1-477501', 10, 50);
    doc.text('Order Date: 13.01.2024', 10, 55);
    doc.text('Invoice Date: 13.01.2024', 10, 60);

    // Add table headers
    const tableHeaders = [
      [
        'Sl. No',
        'Description',
        'Unit',
        'Price',
        'Qty',
        'Net Amount',
        'Tax Rate',
        'Tax Type',
        'Tax Amount',
        'Total Amount',
      ],
    ];

    // Add table data
    const tableData = [
      [
        '1',
        'Amazon Basics 4-in-1 USB Hub with Type C Multiport Adapter, up to 5 Gbps Data Transfer Speed for PC, Laptops, MacBooks | B0C9DSCGJL ( B0C9DSCGJL )',
        '',
        '₹338.14',
        '',
        '₹338.14',
        '9%',
        'CGST',
        '₹30.43',
        '₹399.00',
      ],
      [
        '',
        'Shipping Charges',
        '',
        '₹33.90',
        '',
        '₹33.90',
        '9%',
        'CGST',
        '₹3.05',
        '₹40.00',
      ],
    ];

    // Add table to PDF
    doc.autoTable({
      head: tableHeaders,
      body: tableData,
      startY: 70,
      margin: { top: 10, bottom: 10 },
      bodyStyles: { fontSize: 10, textColor: 40 },
      headStyles: { fontSize: 10, textColor: 40, fillColor: [255, 255, 255] },
    });

    // Add footer text
    doc.setFontSize(12);
    doc.text('Amount in Words: Four Hundred Thirty-nine only', 10, 250);
    doc.text('Whether tax is payable under reverse charge - No', 10, 255);

    // Save PDF
    doc.save('table.pdf');
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-md rounded-md">
      <div className="border-b pb-4 mb-4">
        <h2 className="text-xl font-bold">Order Details</h2>
        <p className="text-gray-600">
          Ordered on 13 January 2024 | Order# 171-8690573-9149961{' '}
          <a href="">
            <span className="text-xl ml-72 text-blue-500" onClick={generatePdf}>
              Invoice
            </span>
          </a>
        </p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Shipping Address</h3>
        <p>Monish Khambalkar</p>
        <p>Talganj Bahuli Vihar</p>
        <p>Khambalkar Mohalla, Itwari Nagpur</p>
        <p>Nagpur, MAHARASHTRA 440002</p>
        <p>India</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Payment Methods</h3>
        <p>Pay on Delivery</p>
      </div>
      <div className="border-t pt-4">
        <div className="flex justify-between">
          <p>Item(s) Subtotal:</p>
          <p>₹399.00</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping:</p>
          <p>₹40.00</p>
        </div>
        <div className="flex justify-between">
          <p>Cash/Pay on Delivery Fee:</p>
          <p>₹0.00</p>
        </div>
        <div className="flex justify-between font-bold">
          <p>Total:</p>
          <p>₹439.00</p>
        </div>
      </div>
      <div className="border-t pt-4 mt-4">
        <p>Delivered 16-Jan-2024</p>
        <p>Package was handed to resident</p>
      </div>
      <div className="flex items-center mt-4">
        <img
          src="https://m.media-amazon.com/images/I/71D9ImsvEtL._AC_UL320_.jpg"
          alt="Product"
          className="w-16 h-16 object-cover rounded"
        />
        <div className="ml-4">
          <p className="font-semibold">Amazon Basics 4-in-1 USB Hub...</p>
          <p className="text-gray-600">₹399.00</p>
        </div>
        <button className="ml-auto bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Buy it again
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
