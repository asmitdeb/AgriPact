export type CropType =
  | "Fruits"
  | "Vegetables"
  | "Grains"
  | "Nuts"
  | "Spices"
  | "Herbs"
  | "Other"
  | "";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  offers: string[];
  contracts: string[];
}

export interface OfferDetails {
  cropName: string; // Name of the crop
  description?: string; // Description of the crop or offer
  price: number; // Price per unit (e.g., per kg)
  quantity: number; // Quantity available
  cropType: CropType; // Specific crop type from defined enum
  harvestTime?: Date | null | string; // Expected harvest date
  location: string; // Crop's location
  offerDuration: string; // Duration of the offer
  paymentTerms: string; // Terms for payment
  seasonality?: string; // Seasonality info (optional)
  logistics?: string; // Logistics
}

export interface NegotiationDetail extends OfferDetails {
  id: string;
  buyerName: string;
  buyerImageUrl?: string;
  proposedPrice?: string;
  finalPrice?: string;
  // status: 'AWAITING_RESPONSE' | 'COUNTER_OFFER' | 'ACCEPTED' | 'REJECTED';
  status?: string;
  ongoing: boolean;
}
