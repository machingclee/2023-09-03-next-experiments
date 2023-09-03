import Link from "next/link";
import Spacer from "./Spacer"
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import routes from "../constants/routes";



export default () => {
  return (
    <>
      <Box sx={{
        display: "flex",
        "& .MuiButton-root": {
          textTransform: "none",
          width: 140,
          padding: 0,
          paddingTop: "4px",
          paddingBottom: "4px",
          color: "black",
          border: "1px solid rgba(0,0,0,0.4)"
        }
      }}>
        {routes.map(t => {
          return (<>
            <Link href={t.path}><Button variant="outlined">{t.name}</Button></Link>
            <Spacer width={10} />
          </>
          )
        })}
      </Box >
      <Spacer />
    </>
  )
}