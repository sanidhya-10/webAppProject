import { useQuery, gql } from "@apollo/client";
import React from "react";

export const GET_DATA = gql`
  query getData {
    getdata
  }
`

//const Getdata = async() =>
function Getdata() {
  const { loading,  data } = useQuery(GET_DATA);
  if (loading) return <p>Loading</p>;

  return <h1>{data.getdata}</h1>;
}
export default Getdata;
