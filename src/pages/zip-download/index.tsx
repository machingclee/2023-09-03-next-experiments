import Button from "@mui/material/Button/Button";
import Box from "@mui/material/Box";
import axios from "axios";
const fileNameRegex = /(?<=filename\=\").*?(?=\")/g


export default () => {
  const downloadZip = async () => {
    const res = await axios.get("http://localhost:8080/download", { responseType: "blob" });
    const blob = new Blob([res.data], { type: "application/zip" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    const contentDisposition = res.headers?.["content-disposition"] as string;
    const fileName = contentDisposition.match(fileNameRegex)?.[0] || "";
    link.download = fileName;
    link.href = url;
    link.click();
    window.URL.revokeObjectURL(url);
  }

  return (
    <Box sx={{
      "& .MuiButton-root": {
        textTransform: "none"
      }
    }}>
      <div>
        <Button onClick={downloadZip}> Download Zip File </Button>
      </div>
    </Box >
  )
}