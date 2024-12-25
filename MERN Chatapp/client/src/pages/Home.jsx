import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  const handleAi=()=>navigate("/ChatWith-MeowAi")
  return (
    <Box height={"100%"}>
      <div className="text-gray-600 mt-5 text-center text-[2rem] max-[425px]:text-xl">
        Select a friend to chat
      </div>
      <div className="transition-all mt-5 relative left-[50%] translate-x-[-50%] cursor-pointer text-center text-[2rem] max-[425px]:text-xl  border-2 bg-[#569af9]  hover:bg-transparent hover:text-[#569af9] hover:border-[#569af9] rounded-full w-[40%] text-white" onClick={handleAi}>
          Chat With meow AI
      </div>
    </Box>
  );
};

export default AppLayout()(Home);
