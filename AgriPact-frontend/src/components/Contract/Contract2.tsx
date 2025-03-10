import React from "react";
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

// Define your contract data interface
interface ContractProps {
  updatedAt: string;
  farmerName: string;
  buyerName: string;
  cropName: string;
  quantity: string;
  harvestTime: string;
  location: string;
  price: string;
  paymentTerms: string;
  deliveryDate: string;
  deliveryLocation: string;
  logistics: string;
  sizeSpecifications: string;
  moistureContentLimit: string;
  jurisdiction: string;
  disputeResolutionMethod: string;
}

// Example data
const contractData: ContractProps = {
  updatedAt: "2024-12-15",
  farmerName: "John Doe",
  buyerName: "Jane Smith",
  cropName: "Rice",
  quantity: "1000 kg",
  harvestTime: "2025-03-10",
  location: "Madhya Pradesh, India",
  price: "₹500,000",
  paymentTerms: "Bank Transfer",
  deliveryDate: "2025-04-01",
  deliveryLocation: "Mumbai, India",
  logistics: "Buyer",
  sizeSpecifications: "Medium-sized grains, 5mm to 7mm",
  moistureContentLimit: "12%",
  jurisdiction: "Madhya Pradesh",
  disputeResolutionMethod: "Arbitration",
};

// Create PDF Document
// export const ContractDocument: React.FC<{ contract: ContractProps }> = ({ contract }) => {
//   return (
//     <Document>
//       <Page style={styles.page}>
//         <View style={styles.header}>
//           <Text>Agripact Contract Agreement</Text>
//           <Text style={{ fontSize: 16, fontStyle: "italic" }}>
//             A legally binding contract between the farmer and buyer
//           </Text>
//         </View>

//         <View style={styles.section}>
//           <Text>1. Contract Overview</Text>
//           <Text>
//             This agreement is made on <Text style={{ fontWeight: "bold" }}>{contract.updatedAt}</Text>, between{" "}
//             <Text style={{ fontWeight: "bold" }}>{contract.farmerName}</Text> (Farmer) and{" "}
//             <Text style={{ fontWeight: "bold" }}>{contract.buyerName}</Text> (Buyer).
//           </Text>
//         </View>

//         <View style={styles.contractDetails}>
//           <Text>2. Crop Details:</Text>
//           <Text>Crop Name: {contract.cropName}</Text>
//           <Text>Quantity: {contract.quantity}</Text>
//           <Text>Harvest Date: {contract.harvestTime}</Text>
//           <Text>Location: {contract.location}</Text>
//         </View>

//         <View style={styles.contractDetails}>
//           <Text>3. Pricing and Payment Terms:</Text>
//           <Text>Total Price: {contract.price}</Text>
//           <Text>Payment Method: {contract.paymentTerms}</Text>
//         </View>

//         <View style={styles.contractDetails}>
//           <Text>4. Delivery Details:</Text>
//           <Text>Delivery Date: {contract.deliveryDate}</Text>
//           <Text>Delivery Location: {contract.deliveryLocation}</Text>
//           <Text>Delivery Charges Responsibility: {contract.logistics}</Text>
//         </View>

//         <View style={styles.contractDetails}>
//           <Text>5. Quality Assurance:</Text>
//           <Text>Size Specifications: {contract.sizeSpecifications}</Text>
//           <Text>Moisture Content Limit: {contract.moistureContentLimit}</Text>
//         </View>

//         <View style={styles.contractDetails}>
//           <Text>6. Dispute Resolution:</Text>
//           <Text>Method: {contract.disputeResolutionMethod}</Text>
//           <Text>Jurisdiction: {contract.jurisdiction}</Text>
//         </View>


//       </Page>
//     </Document>
//   );
// };


const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    lineHeight: 1.6,
    flexDirection: "column",
  },
  section: {
    marginBottom: 10,
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
  },
  text: {
    marginBottom: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
  footer: {
    marginTop: 20,
    fontSize: 10,
    textAlign: "center",
    color: "grey",
  },
  signatureSection: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signature: {
    textAlign: "center",
  },
});

export const ContractPDF: React.FC<ContractProps> = ({
  updatedAt,
  farmerName,
  buyerName,
  cropName,
  quantity,
  harvestTime,
  location,
  price,
  paymentTerms,
  deliveryDate,
  deliveryLocation,
  logistics,
  sizeSpecifications,
  moistureContentLimit,
  jurisdiction,
  disputeResolutionMethod,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Agripact Contract Agreement</Text>
        <Text style={styles.subtitle}>A legally binding contract between the farmer and buyer</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>
          This agreement is made on <Text style={styles.boldText}>{updatedAt}</Text>, between
          <Text style={styles.boldText}> {farmerName}</Text>, hereinafter referred to as the "Farmer," and
          <Text style={styles.boldText}> {buyerName}</Text>, hereinafter referred to as the "Buyer."
        </Text>
        <Text style={styles.text}>The parties agree to the terms and conditions outlined below regarding the sale and purchase of agricultural produce.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.boldText}>1. Crop Details:</Text>
        <Text style={styles.text}>Crop Name: {cropName}</Text>
        <Text style={styles.text}>Quantity: {quantity} (in kilograms)</Text>
        <Text style={styles.text}>Harvest Date: {harvestTime}</Text>
        <Text style={styles.text}>Location: {location}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.boldText}>2. Pricing and Payment Terms:</Text>
        <Text style={styles.text}>The total price for the crop is {price}, to be paid as follows:</Text>
        <Text style={styles.text}>Payment Method: {paymentTerms}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.boldText}>3. Delivery and Logistics:</Text>
        <Text style={styles.text}>Delivery Date: {deliveryDate}</Text>
        <Text style={styles.text}>Delivery Location: {deliveryLocation}</Text>
        <Text style={styles.text}>Delivery Charges: {logistics}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.boldText}>4. Quality Assurance:</Text>
        <Text style={styles.text}>Size Specifications: {sizeSpecifications}</Text>
        <Text style={styles.text}>Moisture Content Limit: {moistureContentLimit}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.boldText}>5. Dispute Resolution:</Text>
        <Text style={styles.text}>Jurisdiction: {jurisdiction}</Text>
        <Text style={styles.text}>Dispute Resolution Method: {disputeResolutionMethod}</Text>
      </View>

      <View style={styles.signatureSection}>
        <View style={styles.signature}>
          <Text>Farmer</Text>
          <Text>________________________</Text>
        </View>
        <View style={styles.signature}>
          <Text>Buyer</Text>
          <Text>________________________</Text>
        </View>
      </View>

      <Text style={styles.footer}>© Agripact - All Rights Reserved</Text>
    </Page>
  </Document>
);

//PDF Viewer
export const ContractPDFViewer: React.FC<ContractProps> = (props) => (
  <div style={{ width: "100%", height: "100vh" }}>
    <PDFViewer style={{ width: "100%", height: "100%" }}>
      <ContractPDF {...contractData} />
    </PDFViewer>
  </div>
);


// Main Component

// export const ContractDownloadPage: React.FC<ContractProps> = (contractvar) => {
//   return (
//     <div className="py-20">
//       <ContractDocument contract={contractvar} />
//       <PDFDownloadLink
//         document={<ContractDocument contract={contractvar} />}
//         fileName="contract.pdf"
//       >
//         Download Pdf
//         {/* {({ loading }: { loading: boolean }) =>
//           loading ? "Preparing document..." : "Download Contract PDF"
//         } */}
//       </PDFDownloadLink>
//     </div>
//   );
// };
