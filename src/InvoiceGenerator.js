
















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
    marginTop: "-20px",
    marginBottom: "-50px",
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
    backgroundColor: "#f3f4f6",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#d1d5db",
    minHeight: 35,
  },
  tableCell: {
    flex: 1,
    padding: 8,
    fontSize: 10,
    textAlign: "center",
    justifyContent: "center",
  },
  tableCellLeft: {
    flex: 2,
    padding: 8,
    fontSize: 10,
    textAlign: "left",
  },
  tableCellRight: {
    flex: 1,
    padding: 8,
    fontSize: 10,
    textAlign: "right",
  },
  tableCellDescription: {
    flex: 2,
    padding: 8,
    fontSize: 10,
  },
  mainTitle: {
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 2,
  },
  subtitle: {
    color: "#666666",
    fontSize: 8,
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
    width: "100%",
  },
  label: {
    fontSize: 10,
    width: "100px",
  },
  value: {
    fontSize: 10,
    width: "80px",
    textAlign: "right",
  },
  divider: {
    height: 1,
    backgroundColor: "#000",
    marginVertical: 10,
  },
  divide: {
    height: 2,
    backgroundColor: "#000",
    marginTop: 30,
    marginBottom: 10,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 30,
    right: 30,
  },
  footerContent: {
    borderTopWidth: 1,
    borderTopColor: "#000",
    paddingTop: 10,
  },
  pageNumber: {
    position: "absolute",
    bottom: 30,
    right: 30,
    fontSize: 10,
  },
  thankYouText: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 5,
  },
  termsText: {
    fontSize: 10,
    color: "#555",
    lineHeight: 1.5,
    textAlign: "center",
  },
  paymentMethods: {
    marginBottom: 20,
  },
  paymentMethodsHeading: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
  paymentMethodText: {
    fontSize: 8,
    marginBottom: 3,
  }
});

const InvoicePDF = ({ data, summary }) => {
  // Calculate items per page based on available space
  const ITEMS_PER_PAGE = 10;
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const renderHeader = () => (
    <>
      <View style={styles.header}>
        <Text style={styles.logo}>MONO PVT .</Text>
      </View>
      <Text style={{ marginTop: 55, marginLeft: 350, fontSize: 15 }}>
        Invoice No: 12345678
      </Text>
      <Text style={styles.title}>INVOICE</Text>
      <View style={styles.invoiceDetailsContainer}>
        <View style={styles.invoiceCard}>
          <Text>Date:</Text>
          <Text>15 March 2020</Text>
        </View>
        <View style={styles.invoiceCard}>
          <Text>Total Due: ${summary.grandTotal.toFixed(2)}</Text>
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
  );

  const renderTable = (items) => (
    <View style={styles.table}>
      <View style={styles.tableHeader}>
        <Text style={styles.tableCellLeft}>ITEM DESCRIPTION</Text>
        <Text style={styles.tableCellRight}>UNIT PRICE</Text>
        <Text style={styles.tableCell}>QTY</Text>
        <Text style={styles.tableCellRight}>TOTAL</Text>
      </View>
      {items.map((item, index) => (
        <View
          key={index}
          style={[
            styles.tableRow,
            index % 2 === 0 && { backgroundColor: "#f9fafb" },
          ]}
        >
          <View style={styles.tableCellDescription}>
            <Text style={styles.mainTitle}>{item.description}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
          <Text style={styles.tableCellRight}>{item.unitPrice}</Text>
          <Text style={styles.tableCell}>{item.qty}</Text>
          <Text style={styles.tableCellRight}>{item.total}</Text>
        </View>
      ))}
    </View>
  );

  const renderSummary = () => (
    <View style={styles.summary}>
      <View style={styles.row}>
        <Text style={styles.label}>Sub Total:</Text>
        <Text style={styles.value}>${summary.subTotal.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Tax (10%):</Text>
        <Text style={styles.value}>${summary.tax.toFixed(2)}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.row}>
        <Text style={styles.label}>Grand Total:</Text>
        <Text style={styles.value}>${summary.grandTotal.toFixed(2)}</Text>
      </View>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footer}>
      <View style={styles.paymentMethods}>
        <Text style={styles.paymentMethodsHeading}>PAYMENT METHODS</Text>
        <Text style={styles.paymentMethodText}>
          <Text style={{ fontWeight: "bold" }}>Paypal: </Text>
          paypal@company.com
        </Text>
        <Text style={styles.paymentMethodText}>
          <Text style={{ fontWeight: "bold" }}>Card Payment: </Text>
          Visa, Master Card
        </Text>
        <Text style={styles.paymentMethodText}>We accept Cheque</Text>
      </View>
      <View style={styles.footerContent}>
        <Text style={styles.thankYouText}>THANK YOU FOR YOUR BUSINESS</Text>
        <Text style={styles.termsText}>
          TERMS: Contrary to popular belief, Lorem Ipsum is not simply random text.
        </Text>
      </View>
    </View>
  );

  return (
    <Document>
      {Array.from({ length: totalPages }, (_, pageIndex) => {
        const pageItems = data.slice(
          pageIndex * ITEMS_PER_PAGE,
          (pageIndex + 1) * ITEMS_PER_PAGE
        );
        
        return (
          <Page key={pageIndex} size="A4" style={styles.page}>
            {pageIndex === 0 && renderHeader()}
            {renderTable(pageItems)}
            {pageIndex === totalPages - 1 && (
              <>
                {renderSummary()}
                {renderFooter()}
              </>
            )}
            <Text style={styles.pageNumber}>
              Page {pageIndex + 1} of {totalPages}
            </Text>
          </Page>
        );
      })}
    </Document>
  );
};

const InvoiceGenerator = () => {
  const data = [
    {
      description: "Web Design",
      subtitle: "Contrary to popular belief Lorem Ipsum simply random",
      unitPrice: "$250.00",
      qty: 2,
      total: "$500.00"
    }, 
    {
      description: "Web Design",
      subtitle: "Contrary to popular belief Lorem Ipsum simply random",
      unitPrice: "$250.00",
      qty: 2,
      total: "$500.00"
    },
    {
      description: "Web Design",
      subtitle: "Contrary to popular belief Lorem Ipsum simply random",
      unitPrice: "$250.00",
      qty: 2,
      total: "$500.00"
    },
    {
      description: "Web Design",
      subtitle: "Contrary to popular belief Lorem Ipsum simply random",
      unitPrice: "$250.00",
      qty: 2,
      total: "$500.00"
    },
    {
      description: "Web Design",
      subtitle: "Contrary to popular belief Lorem Ipsum simply random",
      unitPrice: "$250.00",
      qty: 2,
      total: "$500.00"
    },
    {
      description: "Web Design",
      subtitle: "Contrary to popular belief Lorem Ipsum simply random",
      unitPrice: "$250.00",
      qty: 2,
      total: "$500.00"
    },
    {
      description: "Web Design",
      subtitle: "Contrary to popular belief Lorem Ipsum simply random",
      unitPrice: "$250.00",
      qty: 2,
      total: "$500.00"
    },
    {
      description: "Web Design",
      subtitle: "Contrary to popular belief Lorem Ipsum simply random",
      unitPrice: "$250.00",
      qty: 2,
      total: "$500.00"
    },
    {
      description: "Web Design",
      subtitle: "Contrary to popular belief Lorem Ipsum simply random",
      unitPrice: "$250.00",
      qty: 2,
      total: "$500.00"
    },
    {
      description: "Web Design",
      subtitle: "Contrary to popular belief Lorem Ipsum simply random",
      unitPrice: "$250.00",
      qty: 2,
      total: "$500.00"
    },
    {
      description: "Web Design",
      subtitle: "Contrary to popular belief Lorem Ipsum simply random",
      unitPrice: "$250.00",
      qty: 2,
      total: "$500.00"
    },
    {
      description: "Web Design",
      subtitle: "Contrary to popular belief Lorem Ipsum simply random",
      unitPrice: "$250.00",
      qty: 2,
      total: "$500.00"
    },
    {
      description: "Web Design",
      subtitle: "Contrary to popular belief Lorem Ipsum simply random",
      unitPrice: "$250.00",
      qty: 2,
      total: "$500.00"
    },
  
  ];

  const summary = {
    subTotal: 5370.00,
    tax: 537.00,
    grandTotal: 8530.00,
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
