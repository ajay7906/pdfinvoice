// import React from "react";
// import {
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet,
//   PDFDownloadLink,
// } from "@react-pdf/renderer";


// // Define styles
// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     fontFamily: "Helvetica",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   logo: {
//     fontSize: 25,
//     fontWeight: "bold",
//     marginTop: "-20px"
//   },
//   invoiceDetailsContainer: {
//     flexDirection: "row",
//     justifyContent: "flex-start",
//     alignItems: "flex-start",
//     flexWrap: "wrap",
//     marginBottom: 30,
//     marginLeft: "7cm",
//     gap: 5,
//   },
//   invoiceCard: {
//     backgroundColor: "black",
//     color: "white",
//     padding: "12px 15px",
//     borderRadius: 3,
//     fontSize: 10,
//     textAlign: "left",
//     width: "30%",
//     height: "80%",
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
//     lineHeight: 1.5,
//   },
//   title: {
//     textAlign: "center",
//     fontSize: 28,
//     fontWeight: "bold",
//     marginRight: "28px",
//   },
//   clientInfo: {
//     fontSize: 10,
//     lineHeight: 1.5,
//     marginBottom: "0.5cm",
//     marginLeft: "7cm",
//   },
//   table: {
//     display: "table",
//     width: "100%",
//     marginBottom: 20,
//     borderCollapse: "collapse",
//     marginVertical: 10,
//   },
//   tableHeader: {
//     flexDirection: "row",
//     borderBottomWidth: 1,
//     borderBottomColor: "#d1d5db",
//   },
//   tableRow: {
//     flexDirection: "row",
//     borderBottomWidth: 1,
//     borderBottomColor: "#d1d5db",
//     borderBottomStyle: "solid",
//   },
//   tableCell: {
//     flex: 1,
//     padding: 8,
//     fontSize: 10,
//     textAlign: "center",
//   },
//   line: {
//     marginVertical: 22,
//   },
//   tableCellLeft: {
//     flex: 2,
//     padding: 8,
//     fontSize: 10,
//     textAlign: "left",
//   },
//   summary: {
//     fontSize: 10,
//     marginTop: 20,
//     lineHeight: 1.5,
//     marginLeft: "12cm",
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "flex-start",
//     marginBottom: 5,
//   },
//   label: {
//     fontSize: 10,
//     marginRight: 80,
//   },
//   value: {
//     fontSize: 10,
//   },
//   divider: {
//     height: 1,
//     backgroundColor: "#000",
//     marginTop: 10,
//     marginBottom: 10,
//     width: "100%",
//   },
//   divide: {
//     height: 2,
//     backgroundColor: "#000",
//     marginTop: 10,
//     width: "100%",
//     marginTop: "30px",
//   },
//   dividefooter: {
//     height: 1,
//     backgroundColor: "#000",
//     width: "100%",
//   },
//   Number: {
//     marginTop: "55px",
//     marginLeft: "350px",
//     fontSize: "15px",
//   },
//   container: {
//     padding: 20,
//     marginVertical: -40,
//     marginBottom: 50,
//   },
//   heading: {
//     fontSize: 10,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   text: {
//     fontSize: 8,
//     marginVertical: 5,
//   },
//   bold: {
//     fontWeight: "bold",
//   },
//   normal: {
//     fontWeight: "normal",
//     color: "#333",
//   },
//   footer: {
//     paddingTop: 20,
//     borderTop: "1px solid #e0e0e0",
//     fontSize: 10,
//     textAlign: "center",
//     color: "#333",
//   },
//   footerContact: {
//     lineHeight: 1.5,
//   },
//   footerThankYou: {},
//   thankYouText: {
//     fontSize: 12,
//     fontWeight: "bold",
//     textTransform: "uppercase",
//   },
//   termsText: {
//     fontSize: 10,
//     color: "#555",
//     lineHeight: 1.5,
//   },
// });

// // Create the PDF document structure
// const InvoicePDF = ({ data, summary }) => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.logo}>MONO PVT .</Text>
//       </View>

//       <View>
//         <Text style={styles.Number}>Invoice No: 12345678</Text>
//       </View>

//       {/* Title */}
//       <Text style={styles.title}>INVOICE</Text>

//       {/* Invoice Details */}
//       <View style={styles.invoiceDetailsContainer}>
//         <View style={styles.invoiceCard}>
//           <Text>Date:</Text>
//           <Text>15 March 2020</Text>
//         </View>
//         <View style={styles.invoiceCard}>
//           <Text>Total Due: $1500.00</Text>
//         </View>
//         <View style={styles.invoiceCard}>
//           <Text>Account No: 5544526</Text>
//         </View>
//       </View>

//       {/* Client Information */}
//       <View style={styles.clientInfo}>
//         <Text>Invoice To:</Text>
//         <Text>Vision Tech LTD</Text>
//         <Text>123 Street, Town/City, State, County 556</Text>
//         <Text>Mobile: 55 456 789-888</Text>
//         <Text>Email: info@companyname.com</Text>
//       </View>
//       <View style={styles.divide} />

//       {/* Table */}
//       <View style={styles.table}>
//         {/* Table Header */}
//         <View style={styles.tableHeader}>
//           <Text style={styles.tableCellLeft}>ITEM DESCRIPTION</Text>
//           <Text style={styles.tableCell}>UNIT PRICE</Text>
//           <Text style={styles.tableCell}>QTY</Text>
//           <Text style={styles.tableCell}>TOTAL</Text>
//         </View>
//         {/* Table Rows */}
//         {data.map((item, index) => (
//           <View
//             key={index}
//             style={[
//               styles.tableRow,
//               index % 2 === 0 && { backgroundColor: "#f9fafb" },
//             ]}
//           >
//             <Text style={styles.tableCellLeft}>{item.description}</Text>
//             <Text style={styles.tableCell}>{item.unitPrice}</Text>
//             <Text style={styles.tableCell}>{item.qty}</Text>
//             <Text style={styles.tableCell}>{item.total}</Text>
//           </View>
//         ))}
//       </View>

//       {/* Summary */}
//       <View style={styles.summary}>
//         <View style={styles.row}>
//           <Text style={styles.label}>Sub Total:</Text>
//           <Text style={styles.value}>${summary.subTotal}</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.label}>Tax (10%):</Text>
//           <Text style={styles.value}>${summary.tax}</Text>
//         </View>
//         <View style={styles.divider} />
//         <View style={styles.row}>
//           <Text style={styles.label}>Grand Total:</Text>
//           <Text style={styles.value}>${summary.grandTotal}</Text>
//         </View>
//       </View>

//       <View style={styles.container}>
//         <Text style={styles.heading}>PAYMENT METHODS</Text>

//         <Text style={styles.text}>
//           <Text style={styles.bold}>Paypal: </Text>
//           <Text style={styles.normal}>paypal@company.com Card</Text>
//         </Text>

//         <Text style={styles.text}>
//           <Text style={styles.bold}>Card Payment: </Text>
//           <Text style={styles.normal}>Visa, Master Card</Text>
//         </Text>

//         <Text style={styles.text}>
//           <Text style={styles.normal}>We accept Cheque</Text>
//         </Text>
//       </View>

//       <View style={styles.dividefooter} />

//       {/* Footer */}
//       <View style={styles.footerThankYou}>
//         <Text style={styles.thankYouText}>THANK YOU FOR YOUR BUSINESS</Text>
//         <Text style={styles.termsText}>
//           TERMS: Contrary to popular belief, Lorem Ipsum is not simply random text.
//         </Text>
//       </View>
//     </Page>
//   </Document>
// );

// // React Component to Render and Download PDF
// const InvoiceGenerator = () => {
//   const data = [
//     { description: "Web Design", unitPrice: "$250.00", qty: 2, total: "$500.00" },
//     { description: "Branding Design", unitPrice: "$1300.00", qty: 1, total: "$1300.00" },
//     { description: "V-Card Design", unitPrice: "$40.00", qty: 3, total: "$120.00" },
//     { description: "Brochure Design", unitPrice: "$1200.00", qty: 2, total: "$2400.00" },
//     { description: "E-Book Design", unitPrice: "$350.00", qty: 3, total: "$1050.00" },
 
//   ];

//   const summary = {
//     subTotal: 5370.0,
//     tax: 537.0,
//     grandTotal: 8530.0,
//   };

//   return (
//     <div className="flex flex-col items-center gap-4">
//       <h1 className="text-lg font-semibold text-gray-800">Generate Invoice</h1>
//       <PDFDownloadLink
//         document={<InvoicePDF data={data} summary={summary} />}
//         fileName="invoice.pdf"
//         className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//       >
//         {({ loading }) => (loading ? "Loading..." : "Download Invoice")}
//       </PDFDownloadLink>
//     </div>
//   );
// };

// export default InvoiceGenerator;
















import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: "-20px"
  },
  invoiceDetailsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginBottom: 30,
    marginLeft: "7cm",
    gap: 5,
  },
  invoiceCard: {
    backgroundColor: "black",
    color: "white",
    padding: "12px 15px",
    borderRadius: 3,
    fontSize: 10,
    textAlign: "left",
    width: "30%",
    height: "80%",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    lineHeight: 1.5,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginRight: "28px",
  },
  clientInfo: {
    fontSize: 10,
    lineHeight: 1.5,
    marginBottom: "0.5cm",
    marginLeft: "7cm",
  },
  table: {
    display: "table",
    width: "100%",
    borderCollapse: "collapse",
    marginVertical: 10,
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#d1d5db",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#d1d5db",
    borderBottomStyle: "solid",
  },
  tableCell: {
    flex: 1,
    padding: 8,
    fontSize: 10,
    textAlign: "center",
  },
  tableCellLeft: {
    flex: 2,
    padding: 8,
    fontSize: 10,
    textAlign: "left",
  },
  summary: {
    fontSize: 10,
    marginTop: 20,
    lineHeight: 1.5,
    marginLeft: "12cm",
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5,
  },
  label: {
    fontSize: 10,
    marginRight: 80,
  },
  value: {
    fontSize: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#000",
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
  divide: {
    height: 2,
    backgroundColor: "#000",
    marginTop: 10,
    width: "100%",
    marginTop: "30px",
  },
  dividefooter: {
    height: 1,
    backgroundColor: "#000",
    width: "100%",
  },
  Number: {
    marginTop: "55px",
    marginLeft: "350px",
    fontSize: "15px",
  },
  container: {
    padding: 20,
    marginVertical: -40,
    marginBottom: 50,
  },
  heading: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 8,
    marginVertical: 5,
  },
  bold: {
    fontWeight: "bold",
  },
  normal: {
    fontWeight: "normal",
    color: "#333",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 30,
    right: 30,
    paddingTop: 20,
    borderTop: "1px solid #e0e0e0",
    fontSize: 10,
    textAlign: "center",
    color: "#333",
  },
  pageNumber: {
    position: "absolute",
    bottom: 30,
    right: 30,
    fontSize: 10,
  },
});

// Function to split items into pages
const splitItemsIntoPages = (items, itemsPerPage) => {
  const pages = [];
  for (let i = 0; i < items.length; i += itemsPerPage) {
    pages.push(items.slice(i, i + itemsPerPage));
  }
  return pages;
};

// Create the PDF document structure
const InvoicePDF = ({ data, summary }) => {
  // Calculate how many items can fit on one page (considering header and footer space)
  const ITEMS_PER_PAGE = 8;
  const pages = splitItemsIntoPages(data, ITEMS_PER_PAGE);

  return (
    <Document>
      {pages.map((pageItems, pageIndex) => (
        <Page key={pageIndex} size="A4" style={styles.page}>
          {/* Header (only on first page) */}
          {pageIndex === 0 && (
            <>
              <View style={styles.header}>
                <Text style={styles.logo}>MONO PVT .</Text>
              </View>

              <View>
                <Text style={styles.Number}>Invoice No: 12345678</Text>
              </View>

              <Text style={styles.title}>INVOICE</Text>

              <View style={styles.invoiceDetailsContainer}>
                <View style={styles.invoiceCard}>
                  <Text>Date:</Text>
                  <Text>15 March 2020</Text>
                </View>
                <View style={styles.invoiceCard}>
                  <Text>Total Due: $1500.00</Text>
                </View>
                <View style={styles.invoiceCard}>
                  <Text>Account No: 5544526</Text>
                </View>
              </View>

              <View style={styles.clientInfo}>
                <Text>Invoice To:</Text>
                <Text>Vision Tech LTD</Text>
                <Text>123 Street, Town/City, State, County 556</Text>
                <Text>Mobile: 55 456 789-888</Text>
                <Text>Email: info@companyname.com</Text>
              </View>
              <View style={styles.divide} />
            </>
          )}

          {/* Table Header */}
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableCellLeft}>ITEM DESCRIPTION</Text>
              <Text style={styles.tableCell}>UNIT PRICE</Text>
              <Text style={styles.tableCell}>QTY</Text>
              <Text style={styles.tableCell}>TOTAL</Text>
            </View>

            {/* Table Rows */}
            {pageItems.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.tableRow,
                  index % 2 === 0 && { backgroundColor: "#f9fafb" },
                ]}
              >
                <Text style={styles.tableCellLeft}>{item.description}</Text>
                <Text style={styles.tableCell}>{item.unitPrice}</Text>
                <Text style={styles.tableCell}>{item.qty}</Text>
                <Text style={styles.tableCell}>{item.total}</Text>
              </View>
            ))}
          </View>

          {/* Summary (only on last page) */}
          {pageIndex === pages.length - 1 && (
            <>
              <View style={styles.summary}>
                <View style={styles.row}>
                  <Text style={styles.label}>Sub Total:</Text>
                  <Text style={styles.value}>${summary.subTotal}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Tax (10%):</Text>
                  <Text style={styles.value}>${summary.tax}</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.row}>
                  <Text style={styles.label}>Grand Total:</Text>
                  <Text style={styles.value}>${summary.grandTotal}</Text>
                </View>
              </View>

              <View style={styles.container}>
                <Text style={styles.heading}>PAYMENT METHODS</Text>
                <Text style={styles.text}>
                  <Text style={styles.bold}>Paypal: </Text>
                  <Text style={styles.normal}>paypal@company.com Card</Text>
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.bold}>Card Payment: </Text>
                  <Text style={styles.normal}>Visa, Master Card</Text>
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.normal}>We accept Cheque</Text>
                </Text>
              </View>

              <View style={styles.dividefooter} />
              <View style={styles.footer}>
                <Text style={styles.thankYouText}>THANK YOU FOR YOUR BUSINESS</Text>
                <Text style={styles.termsText}>
                  TERMS: Contrary to popular belief, Lorem Ipsum is not simply random text.
                </Text>
              </View>
            </>
          )}
          
          {/* Page Numbers */}
          <Text style={styles.pageNumber}>
            Page {pageIndex + 1} of {pages.length}
          </Text>
        </Page>
      ))}
    </Document>
  );
};

// React Component to Render and Download PDF
const InvoiceGenerator = () => {
  const data = [
    { description: "Web Design", unitPrice: "$250.00", qty: 2, total: "$500.00" },
    { description: "Branding Design", unitPrice: "$1300.00", qty: 1, total: "$1300.00" },
    { description: "V-Card Design", unitPrice: "$40.00", qty: 3, total: "$120.00" },
    { description: "Brochure Design", unitPrice: "$1200.00", qty: 2, total: "$2400.00" },
    { description: "E-Book Design", unitPrice: "$350.00", qty: 3, total: "$1050.00" },
    { description: "Logo Design", unitPrice: "$500.00", qty: 1, total: "$500.00" },
    { description: "Website Maintenance", unitPrice: "$200.00", qty: 4, total: "$800.00" },
    { description: "SEO Services", unitPrice: "$450.00", qty: 2, total: "$900.00" },
    { description: "Social Media Design", unitPrice: "$300.00", qty: 3, total: "$900.00" },
    { description: "UI/UX Design", unitPrice: "$800.00", qty: 1, total: "$800.00" }
  ];

  const summary = {
    subTotal: 5370.0,
    tax: 537.0,
    grandTotal: 8530.0,
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-lg font-semibold text-gray-800">Generate Invoice</h1>
      <PDFDownloadLink
        document={<InvoicePDF data={data} summary={summary} />}
        fileName="invoice.pdf"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        {({ loading }) => (loading ? "Loading..." : "Download Invoice")}
      </PDFDownloadLink>
    </div>
  );
};

export default InvoiceGenerator;