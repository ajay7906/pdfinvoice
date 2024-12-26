



import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    backgroundColor: "#f9fafb",
  },
  header: {
    padding: 20,
    backgroundColor: "#1e3a8a",
    color: "#ffffff",
    borderRadius: 10,
    marginBottom: 20,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  headerText: {
    fontSize: 12,
    marginTop: 5,
    color: "#c7d2fe",
  },
  title: {
    fontSize: 36,
    color: "#1e40af",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    letterSpacing: 2,
  },
  invoiceDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#f3f4f6",
    borderRadius: 10,
    marginBottom: 20,
  },
  invoiceDetailsCard: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  invoiceDetailsText: {
    fontSize: 10,
    color: "#1f2937",
  },
  clientInfo: {
    fontSize: 12,
    lineHeight: 1.8,
    padding: 15,
    backgroundColor: "#fef3c7",
    borderRadius: 10,
    marginBottom: 20,
  },
  table: {
    display: "table",
    width: "100%",
    marginBottom: 20,
    borderCollapse: "collapse",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#1e3a8a",
    color: "#ffffff",
    padding: 10,
    borderRadius: 5,
  },
  tableRow: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    borderBottomStyle: "solid",
  },
  tableCell: {
    flex: 1,
    fontSize: 10,
    textAlign: "center",
  },
  tableCellLeft: {
    flex: 2,
    fontSize: 10,
    textAlign: "left",
  },
  summary: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#e0f2fe",
    borderRadius: 10,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  summaryText: {
    fontSize: 12,
  },
  summaryHighlight: {
    color: "#1e3a8a",
    fontWeight: "bold",
    fontSize: 14,
  },
  footer: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 10,
    color: "#6b7280",
  },
});

const InvoicePDF = ({ data, summary }) => {
  const ITEMS_PER_PAGE = data.length <= 12 ? data.length : 12;
  const firstPageItems = data.slice(0, ITEMS_PER_PAGE);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.logo}>MONO PVT LTD</Text>
          <Text style={styles.headerText}>Innovating Business Solutions</Text>
        </View>

        <Text style={styles.title}>INVOICE</Text>

        {/* Invoice Details */}
        <View style={styles.invoiceDetailsContainer}>
          <View style={styles.invoiceDetailsCard}>
            <Text style={styles.invoiceDetailsText}>Date</Text>
            <Text style={styles.invoiceDetailsText}>15 March 2020</Text>
          </View>
          <View style={styles.invoiceDetailsCard}>
            <Text style={styles.invoiceDetailsText}>Invoice No</Text>
            <Text style={styles.invoiceDetailsText}>12345678</Text>
          </View>
          <View style={styles.invoiceDetailsCard}>
            <Text style={styles.invoiceDetailsText}>Total Due</Text>
            <Text style={styles.invoiceDetailsText}>$1500.00</Text>
          </View>
        </View>

        {/* Client Information */}
        <View style={styles.clientInfo}>
          <Text>Invoice To:</Text>
          <Text>Vision Tech LTD</Text>
          <Text>123 Street, Town/City, State, County 556</Text>
          <Text>Mobile: 55 456 789-888</Text>
          <Text>Email: info@companyname.com</Text>
        </View>

        {/* Table */}
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableCellLeft}>ITEM DESCRIPTION</Text>
            <Text style={styles.tableCell}>UNIT PRICE</Text>
            <Text style={styles.tableCell}>QTY</Text>
            <Text style={styles.tableCell}>TOTAL</Text>
          </View>

          {firstPageItems.map((item, index) => (
            <View  key={index}
            style={[
              styles.tableRow,
              index % 2 !== 0 && { backgroundColor: "#D3D3D3", borderRadius: 6 }, // Light gray for even rows
            ]}
           
            > 
              <Text style={styles.tableCellLeft}>{item.description}</Text>
              <Text style={styles.tableCell}>{item.unitPrice}</Text>
              <Text style={styles.tableCell}>{item.qty}</Text>
              <Text style={styles.tableCell}>{item.total}</Text>
            </View>
          ))}
        </View>

        {/* Summary */}
        <View style={styles.summary}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Sub Total:</Text>
            <Text style={styles.summaryText}>${summary.subTotal}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Tax (10%):</Text>
            <Text style={styles.summaryText}>${summary.tax}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryHighlight}>Grand Total:</Text>
            <Text style={styles.summaryHighlight}>${summary.grandTotal}</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>Thank you for your business!</Text>
          <Text>Contact us at support@monopvt.com</Text>
        </View>
      </Page>
    </Document>
  );
};

const InvoiceGenerator = () => {
  const data = [
    { description: "Web Design", unitPrice: "$250.00", qty: 2, total: "$500.00" },
    { description: "SEO Services", unitPrice: "$450.00", qty: 1, total: "$450.00" },
    { description: "Content Writing", unitPrice: "$150.00", qty: 5, total: "$750.00" },

        { description: "Website Maintenance", unitPrice: "$200.00", qty: 4, total: "$800.00" },
    { description: "SEO Services", unitPrice: "$450.00", qty: 2, total: "$900.00" },
    { description: "Social Media Design", unitPrice: "$300.00", qty: 3, total: "$900.00" },
    { description: "UI/UX Design", unitPrice: "$800.00", qty: 1, total: "$800.00" },
    { description: "Content Writing", unitPrice: "$150.00", qty: 5, total: "$750.00" },
    { description: "Email Template", unitPrice: "$100.00", qty: 3, total: "$300.00" },
    { description: "App Design", unitPrice: "$2000.00", qty: 1, total: "$2000.00" },
    { description: "Banner Design", unitPrice: "$75.00", qty: 4, total: "$300.00" },
    { description: "3D Modeling", unitPrice: "$500.00", qty: 2, total: "$1000.00" } ,
    { description: "App Design", unitPrice: "$2000.00", qty: 1, total: "$2000.00" },
    { description: "Banner Design", unitPrice: "$75.00", qty: 4, total: "$300.00" },
  ];

  const summary = {
    subTotal: 1700.0,
    tax: 170.0,
    grandTotal: 1870.0,
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










































