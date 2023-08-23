import React, { useEffect, useState } from "react";
import AppartmentCard from "../../components/ui/cards/Appartment";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/ui/structure/NavBar";
import { sendRequest } from "../../core/config/request";
import { requestMethods } from "../../core/enums/requestMethods";
import LandingTabs from "../../components/ui/LandingTabs";

const Landing = () => {
  const navigation = useNavigate();

  const [appartments, setAppartments] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest({
          route: "/stays",
          method: requestMethods.GET,
        });

        setAppartments(response.data);
      } catch (error) {
        console.log(error.response.status);
        if (error.response.status === 401) {
          navigation("/");
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex column page">
      <LandingTabs onTabChanged={(value) => setFilter(value)} />
      <div className="flex wrap">
        {appartments.map((appartment) => {
          if (filter === appartment.location || filter === "all")
            return <AppartmentCard appartment={appartment} />;
        })}
      </div>
    </div>
  );
};

export default Landing;
