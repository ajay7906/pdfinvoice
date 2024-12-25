const styles = StyleSheet.create({
    // ... previous styles remain same ...
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
    }
  });
  
  // Update the summary section in both pages:
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
  
  // Update the data summary object:
  const summary = {
    subTotal: 5370.00,
    tax: 537.00,
    grandTotal: 8530.00,
  };