import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  console.log("https://yar-scial-server.herokuapp.com/assets/" + image);
  const immg = "https://yar-scial-server.herokuapp.com/assets/" + image;
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        crossOrigin="anonymous"
        src={immg}
      />
    </Box>
  );
};
export default UserImage;
