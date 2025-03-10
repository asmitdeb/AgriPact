import React from "react";

// Define the type for the contract props
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

const ContractPage: React.FC<ContractProps> = ({
  contractDate,
  farmerName,
  buyerName,
  cropName,
  quantity,
  harvestDate,
  cropLocation,
  totalPrice,
  paymentMethod,
  deliveryDate,
  deliveryLocation,
  deliveryChargeResponsibility,
  sizeSpecifications,
  moistureContentLimit,
  jurisdiction,
  disputeResolutionMethod,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Agripact Contract Agreement</h1>
        <p className="text-xl mt-2">A legally binding contract between the farmer and buyer</p>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">1. Contract Overview</h2>
        <p>
          This agreement is made on <span className="font-bold">{contractDate}</span>, between{" "}
          <span className="font-bold">{farmerName}</span>, hereinafter referred to as the "Farmer," and{" "}
          <span className="font-bold">{buyerName}</span>, hereinafter referred to as the "Buyer."
        </p>
        <p className="mt-2">
          The parties agree to the terms and conditions outlined below regarding the sale and purchase of agricultural produce.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">2. Crop Details</h2>
        <ul className="list-disc pl-6">
          <li><strong>Crop Name:</strong> {cropName}</li>
          <li><strong>Quantity:</strong> {quantity} (in kilograms)</li>
          <li><strong>Harvest Date:</strong> {harvestDate}</li>
          <li><strong>Location:</strong> {cropLocation}</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">3. Pricing and Payment Terms</h2>
        <p>
          The total price for the crop is <span className="font-bold">{totalPrice}</span>, to be paid in installments as follows:
        </p>
        <ul className="list-decimal pl-6">
          <li><strong>First Installment:</strong> [Percentage]% on the signing of this contract.</li>
          <li><strong>Second Installment:</strong> [Percentage]% upon the delivery of the crop.</li>
          <li><strong>Final Installment:</strong> [Percentage]% after post-delivery inspection.</li>
        </ul>
        <p className="mt-2">
          Payment will be made via <span className="font-bold">{paymentMethod}</span>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">4. Delivery and Logistics</h2>
        <ul className="list-disc pl-6">
          <li><strong>Delivery Date:</strong> {deliveryDate}</li>
          <li><strong>Delivery Location:</strong> {deliveryLocation}</li>
          <li><strong>Delivery Charges:</strong> {deliveryChargeResponsibility}</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">5. Quality Assurance</h2>
        <p>
          The crop should meet the following minimum quality standards:
        </p>
        <ul className="list-disc pl-6">
          <li><strong>Size:</strong> {sizeSpecifications}</li>
          <li><strong>Moisture Content:</strong> {moistureContentLimit}</li>
          <li><strong>Inspection:</strong> The Buyer has the right to inspect the crop before finalizing the purchase.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">6. Dispute Resolution</h2>
        <p>
          In case of any dispute or grievance, the parties will resolve the matter through{" "}
          <span className="font-bold">{disputeResolutionMethod}</span> as per the laws of{" "}
          <span className="font-bold">{jurisdiction}</span>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">7. Force Majeure</h2>
        <p>
          Neither party will be held liable for any failure to perform their obligations due to circumstances beyond their control, such as natural disasters, strikes, or governmental restrictions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">8. Signature and Acknowledgement</h2>
        <p className="mb-2">
          By signing this contract, both parties acknowledge and agree to the terms and conditions outlined in this agreement.
        </p>
        <div className="flex justify-between">
          <div className="w-1/2 text-center">
            <p><strong>Farmer</strong></p>
            <p className="mt-4">(Signature) ___________________</p>
          </div>
          <div className="w-1/2 text-center">
            <p><strong>Buyer</strong></p>
            <p className="mt-4">(Signature) ___________________</p>
          </div>
        </div>
      </section>

      <footer className="text-center mt-8 text-sm text-gray-600">
        <p>Contract Date: {contractDate}</p>
        <p>© Agripact - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default ContractPage;
