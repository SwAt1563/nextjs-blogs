"use client";
import { gql } from "@/graphql-client/__generated__/";
import { useMutation, useQuery } from "@apollo/client";

export const GET_CATEGORIES = gql(`
query GetCategories {
  getCategories {
    name
  }

}
`);

const Comp = () => {
  const { data: categoriesData, loading, error } = useQuery(GET_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  
  return (
    <>
      {categoriesData?.getCategories?.map((category: any) => (
        <div key={category.name}>{category.name}</div>
      ))}
    </>
  );
};

export default Comp;
