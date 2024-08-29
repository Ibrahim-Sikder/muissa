import { Box, } from "@mui/material";
import Image from "next/image";
import url from "../assets/loader.gif";

const Loader = () => {
  return (
    <Box className="flex justify-center  items-center h-screen bg-white">
  
      <Image
        src={url}
        height={60}
        width={60}
        alt={`A cute animal!`}
        unoptimized={true}
      />
    </Box>
  );
};

export default Loader;
