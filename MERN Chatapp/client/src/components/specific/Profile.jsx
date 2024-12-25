import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
  Discount
} from "@mui/icons-material";
import moment from "moment";
import { transformImage } from "../../lib/features";
import Header from "../layout/Header";
import { useSelector } from "react-redux";
import Footer from "../layout/Footer";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  return (<div className="dark:bg-black bg-[#f0effd97]">
      <Header></Header>

      {/* <div className="flex justify-center items-center gap-1 py-5 dark:bg-[#424142]"><UserNameIcon className="text-[#3068f7]"></UserNameIcon> <h1 className="text-red-500 text-2xl">{user?.username}</h1></div> */}

      <div className="dark:bg-black py-5 flex max-[769px]:flex-col max-[769px]:justify-center max-[769px]:w-full overflow-hidden justify-between items-center min-h-[90vh] w-[80%] mx-auto">
        <Avatar
          src={transformImage(user?.avatar?.url)}
          sx={{
            width: 300,
            height: 300,
            objectFit: "contain",
            marginBottom: "1rem",
            border: "5px solid white",
          }}
        />
        <div className="flex flex-col gap-5 max-[769px]:w-full max-[769px]:ml-24 w-1/2">

          <div className="dark:bg-[#222222a4] bg-white w-80 max-[425px]:w-60 flex gap-5 justify-center items-center border-2 rounded-2xl shadow-[2px_2px_10px_#9999]">
            <UserNameIcon className="text-[#3068f7]"></UserNameIcon>
            <span>
              <p className="text-[#555]">Username</p>
              <h1 className="text-black dark:text-white text-2xl">{user?.username}</h1>
            </span>
          </div>

          <div className="dark:bg-[#222222a4] bg-white w-80 max-[425px]:w-60 flex gap-5 justify-center items-center border-2 rounded-2xl shadow-[2px_2px_10px_#9999]">
            <Discount className="text-[#3068f7]"></Discount>
            <span>
              <p className="text-[#555]">Bio</p>
              <h1 className="dark:text-white text-2xl">{user?.bio}</h1>
            </span>
          </div>

          <div className="dark:bg-[#222222a4] bg-white w-80 max-[425px]:w-60 flex gap-5 justify-center items-center border-2 rounded-2xl shadow-[2px_2px_10px_#9999]">
            <FaceIcon className="text-[#3068f7]"></FaceIcon>
            <span>
              <p className="text-[#555]">Name</p>
              <h1 className="dark:text-white text-black text-2xl">{user?.name}</h1>
            </span>
          </div>

          <div className="flex items-end gap-3">
            <CalendarIcon className="text-[#3068f7]"></CalendarIcon>
            <span>    
              <p className="text-[#555]">joned</p>
              <h1 className="dark:text-white text-2xl">{moment(user?.createdAt).fromNow()}</h1>
            </span>
          </div>
          </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}

    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
