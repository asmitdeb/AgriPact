import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

interface searchBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  handleSearch: () => void;
  isLoading?: boolean;
}

export const SearchBar: React.FC<searchBarProps> = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
  isLoading = false,
}) => {
  return (
    <div className="flex gap-2">
      <Input
        placeholder="Search crops"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full h-12 text-lg"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <Button
        size="lg"
        className="h-12 px-6"
        onClick={handleSearch}
      >
        {isLoading && <Loader2 className="animate-spin" size={24} />}
        {isLoading ? "Searching..." : "Search"}
      </Button>
    </div>
  );
};
