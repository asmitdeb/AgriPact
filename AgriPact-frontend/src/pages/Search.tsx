import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import api, {
  offerSearchRoute,
  negotiationRoute,
  initOfferRoute,
} from "@/api/axiosConfig";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import OfferCard from "@/components/OfferCard";
// import { NegotiationPreview } from "@/components/NegotiationPreview";
// import { ReviewStep } from '@/components/ReviewStep';
import { OfferDetails, CropType } from "@/components/utils/types";
import { OfferPreview } from "@/components/OfferPreview";
import { SearchBar } from "@/components/SearchBar";
import { Filters } from "@/components/Filters";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Flame } from "lucide-react";
import { Separator } from "@/components/ui/separator";
interface Offer {
  id: string;
  cropName: string;
  description?: string;
  cropType: CropType;
  price: number;
  quantity: number;
  harvestTime?: string;
  location: string;
  offerDuration: string;
  paymentTerms: string;
  createdBy: string;
  createdAt: string;
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [offers, setOffers] = useState<Offer[]>([]);
  const [visibleOffers, setVisibleOffers] = useState<Offer[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  //filter state
  const [cropType, setCropType] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [maxPrice, setMaxPrice] = useState(100);
  //sort state
  const [sortBy, setSortBy] = useState("newest");
  const navigate = useNavigate();
  //view details state
  const [viewDetails, setViewDetails] = useState(false);
  const [offerDetails, setOfferDetails] = useState<OfferDetails | null>(null);
  const [initOffers, setInitOffers] = useState<Offer[]>([]);
  const { toast } = useToast();
  const filterByCropType = (e: string) => {
    setCropType(e);
    const filtered = offers.filter((offer) => offer.cropType === e);
    setVisibleOffers(filtered);
  };
  //get all offers at first render
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        setIsLoading(true);
        const result = await api.get(initOfferRoute);
        setInitOffers(result.data.offers);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast({
          title: "Error fetching data",
          description:
            error instanceof Error ? error.message : "Something went wrong",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchOffers();
  }, []);

  const filterByPrice = (e: number[]) => {
    setPriceRange(e);
    setVisibleOffers(visibleOffers.filter((offer) => offer.price >= e[0]));
  };

  const handleSort = (offers: Offer[]) => {
    switch (sortBy) {
      case "newest":
        return offers.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "price-low":
        return offers.sort((a, b) => b.price - a.price);
      case "price-high":
        return offers.sort((a, b) => a.price - b.price);
      case "rating":
        return offers;
      default:
        return offers;
    }
  };

  //get max price of visible offers
  const getMaxPrice = (offers: Offer[]) => {
    return Math.max(...(offers.map((offer) => offer.price) || 0));
  };

  useEffect(() => {
    setVisibleOffers(handleSort(visibleOffers));
  }, [sortBy, visibleOffers]);

  useEffect(() => {
    const maxPrice = getMaxPrice(visibleOffers);
    setMaxPrice(maxPrice);
    setPriceRange([0, maxPrice]);
  }, [cropType, offers]);

  const resetFilters = () => {
    setVisibleOffers(offers);
    setCropType("");
    setPriceRange([0, getMaxPrice(offers)]);
  };

  const handleSearch = async () => {
    if (!searchQuery) {
      return;
    }
    try {
      setIsLoading(true);
      resetFilters();
      const params = new URLSearchParams({
        cropName: searchQuery,
      });
      const result = await api.get(`${offerSearchRoute}?${params}`);
      if (result.data.offers) {
        setOffers(result.data.offers);
        setVisibleOffers(result.data.offers);
        if (result.data.message) {
          toast({
            title: "No exact offers found",
            description: result.data.message,
          });
        }
      } else {
        setOffers([]);
        setVisibleOffers([]);
        toast({
          title: "No offers found",
          description: result.data.message,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast({
        title: "Error fetching data",
        description:
          error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleNegotiate = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      await api.post(`${negotiationRoute}/create`, offerDetails);
      toast({
        title: "Negotiation Started",
        description: "Negotiation with the seller has been started",
      });
      navigate("/negotiations")
    } catch (error) {
      toast({
        title: "Cannot create negotiation",
        //@ts-ignore
        description: error.response.data?.error,
        variant: "destructive",
      });
    }
  };

  return viewDetails ? (
    <div className="py-20 mx-auto w-[50rem]">
      <Card>
        <OfferPreview
          offerDetails={offerDetails!}
          resetForm={() => setViewDetails(false)}
        />
        <div className="flex items-center justify-center">
          <Button
            className="w-fit min-w-52 mb-10 p-6"
            onClick={handleNegotiate}
          >
            Negotiate
          </Button>
        </div>
        <Toaster />
      </Card>
    </div>
  ) : (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#e8f5e9] m-auto mt-16">
      <main className="container mx-auto p-6">
        <div className="flex flex-col gap-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Find Crops</h1>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
            isLoading={isLoading}
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {
            // Show filters only if there are offers otherwise show empty badge
            offers.length > 0 ? (
              <Filters
                //@ts-ignore
                cropType={cropType}
                priceRange={priceRange}
                maxPrice={maxPrice}
                filterByCropType={filterByCropType}
                filterByPrice={filterByPrice}
                resetFilters={resetFilters}
              />
            ) : (
              <div className=""></div>
            )
          }
          <div className="lg:col-span-9 space-y-6">
            {offers.length > 0 && (
              <div className="flex justify-between items-center">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
                <Badge className="">
                  Showing {visibleOffers.length} results
                </Badge>
              </div>
            )}
            {offers.length == 0 &&<> <h1 className="flex gap-4 font-semibold text-2xl"><Flame/>Crops in Demand</h1><Separator/></>}
            <div className="grid md:grid-cols-3 gap-6 auto-rows-max">
              {/* //render init offers conditionally */}

              {offers.length == 0 &&
                initOffers.map((offer) => (
                  <OfferCard
                    key={offer.id}
                    offer={offer}
                    setViewDetails={setViewDetails}
                    setOfferDetails={setOfferDetails}
                  />
                ))}
              {visibleOffers.map((offer) => (
                <OfferCard
                  key={offer.id}
                  offer={offer}
                  setViewDetails={setViewDetails}
                  setOfferDetails={setOfferDetails}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Toaster />
    </div>
  );
}
