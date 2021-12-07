import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import { useParams } from "react-router-dom";
import EvaluationTabs from "../../components/Tabs";

const Evaluation = () => {
  const [data, setData] = useState([]);
  const { email } = useParams();

  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/d2e7cfa3-21a7-47c7-a824-58fc018ba40f"
      );
      const data = await res.json();
      const result = data.find((record) => record.email === email);
      setData(result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Hero data={data} />
      <EvaluationTabs data={data} />
    </>
  );
};

export default Evaluation;
