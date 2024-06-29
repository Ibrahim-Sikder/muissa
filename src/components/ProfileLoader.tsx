import { Box } from "@mui/material";
import Image from "next/image";
import url from "../assets/loader.gif";

const ProfileLoader = () => {
  return (
    <Box
      className="flex justify-center items-center fixed inset-0 z-30 bg-white"
    >
      <Image
        src={url}
        height={60}
        width={60}
        alt="Loading..."
        unoptimized={true}
      />
    </Box>
  );
};

export default ProfileLoader;
