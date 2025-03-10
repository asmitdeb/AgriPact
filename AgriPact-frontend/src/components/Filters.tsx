import { Card, CardContent } from "./ui/card";
import { FilterIcon } from "lucide-react";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "./ui/select";
import { cropTypes } from "./utils/consts";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";

interface FilterProps {
  cropType: string;
  priceRange: number[];
  maxPrice: number;
  filterByCropType: (e: string) => void;
  filterByPrice: (e: number[]) => void;
  resetFilters: () => void;
}

export const Filters = ({
  cropType,
  priceRange,
  maxPrice,
  filterByCropType,
  filterByPrice,
  resetFilters,
}: FilterProps) => {
  return (
    <Card className="lg:col-span-3 bg-white/90 shadow-lg h-fit sticky top-20">
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <FilterIcon className="w-5 h-5" /> Filters
        </h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Crop Type</label>
            <Select value={cropType} onValueChange={filterByCropType}>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {cropTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Price Range (₹/kg)</label>
            <Slider
              value={priceRange}
              max={maxPrice}
              step={10}
              className="my-4"
              onValueChange={filterByPrice}
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>

          <Button className="w-full" variant="outline" onClick={resetFilters}>
            Reset Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
