import React from "react";
import { useGetsimilarQuery } from "../services/sevices";
import { useParams } from "react-router-dom";
import Movies from "./Movies";

export default function SimilarMovies() {
  const { id } = useParams();

  const { data, error, isLoading } = useGetsimilarQuery(id);
  if (error) return <div>some things went wrong</div>;

  return <Movies title={"Similar Movies"} data={data} isLoading={isLoading} />;
}
