type Tab = {
  name: string,
  path: string
}
const routes: Tab[] = [
  {
    name: "SSE",
    path: "/sse"
  },
  {
    name: "Zip Download",
    path: "zip-download"
  },
  {
    name: "Upload File",
    path: "/file-upload"
  }
]
export default routes;