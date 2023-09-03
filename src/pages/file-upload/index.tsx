import axios from "axios";
import { useState } from "react";

export default () => {
  const [files, setFiles] = useState<FileList | null>(null);

  const uploadSelectedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };
  const uploadClickedHanlder = async () => {
    if ((files?.length || 0) > 0) {
      uplaodToServer({ oid: "someid", file: files![0] });
    }
  };

  const uplaodToServer =
    async ({ oid, file }: { oid: string; file: File }) => {
      const formData = new FormData();
      formData.append("file_01", file);
      formData.append("oid", oid);
      const response = await axios.post<{ success: boolean }>(
        "http://localhost:8080/stream",
        formData
      );

      return response.data;
    }

  return (
    <div>
      <input type="file" accept="image/*" onChange={uploadSelectedHandler} />
      <button onClick={uploadClickedHanlder}> Upload </button>
    </div>
  )
}
