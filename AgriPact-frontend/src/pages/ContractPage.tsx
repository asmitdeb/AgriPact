import { Button } from "../components/ui/button";
import React from "react";
import ContractPage from "../components/Contract";
import { PDFViewer } from "@react-pdf/renderer";
import {ContractPDF,ContractPDFViewer} from "@/components/Contract2";
interface ContractProps {
    contractDate: string;
    farmerName: string;
    buyerName: string;
    cropName: string;
    quantity: string;
    harvestDate: string;
    cropLocation: string;
    totalPrice: string;
    paymentMethod: string;
    deliveryDate: string;
    deliveryLocation: string;
    deliveryChargeResponsibility: string;
    sizeSpecifications: string;
    moistureContentLimit: string;
    jurisdiction: string;
    disputeResolutionMethod: string;
  }

const contractData: ContractProps = {
    contractDate: "2024-12-15",
    farmerName: "John Doe",
    buyerName: "Jane Smith",
    cropName: "Rice",
    quantity: "1000 kg",
    harvestDate: "2025-03-10",
    cropLocation: "Madhya Pradesh, India",
    totalPrice: "₹500,000",
    paymentMethod: "Bank Transfer",
    deliveryDate: "2025-04-01",
    deliveryLocation: "Mumbai, India",
    deliveryChargeResponsibility: "Buyer",
    sizeSpecifications: "Medium-sized grains, 5mm to 7mm",
    moistureContentLimit: "12%",
    jurisdiction: "Madhya Pradesh",
    disputeResolutionMethod: "Arbitration"
  };
  
export const Page: React.FC = ()=>{
    return (
        <div className="py-20 w-screen">
        {/* <ContractPage {...contractData} /> */}
        <ContractPDFViewer {...contractData}/>
        </div>
    )
}