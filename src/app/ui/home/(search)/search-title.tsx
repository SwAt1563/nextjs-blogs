"use client";

import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { BsSearch } from "react-icons/bs"; // Importing the search icon

const SearchTitle = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <>
      <div className="d-flex flex-grow-1 flex-shrink-0 position-relative">
        <label htmlFor="search" className="visually-hidden">
          Search
        </label>

        <BsSearch
          className="position-absolute top-50 end-0 translate-middle-y me-2 text-muted"
          style={{ zIndex: 3 }}
        />

        <input
          id="search"
          type="text"
          className="form-control"
          placeholder="Search Blog..."
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
       
      </div>
    </>
  );
};

export default SearchTitle;
