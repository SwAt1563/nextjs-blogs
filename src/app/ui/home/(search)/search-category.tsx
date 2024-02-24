"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { gql } from "@/graphql-client/__generated__/";
import { useQuery } from "@apollo/client";

export const GET_CATEGORIES = gql(`
query GetCategories {
  getCategories {
    name
  }

}
`);

const SearchCategory = () => {
  const { data: categoriesData } = useQuery(GET_CATEGORIES);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("categoryName", term);
    } else {
      params.delete("categoryName");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="container">
        <h4 className="mt-3 ms-0">Tag Category</h4>
        <div className="row">
          {categoriesData?.getCategories?.map((category, index) => (
            <div
              key={index}
              onClick={() => handleSearch(category.name)}
              className="category col-3 me-2 mt-2"
              style={{
                padding: "5px",
                border: "1px solid #ccc",
                cursor: "pointer",
                borderRadius: "4px",
                textAlign: "center",
                boxSizing: "border-box",
              }}
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchCategory;
