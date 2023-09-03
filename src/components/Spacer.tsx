import React from "react";

export default ({ height = 20, width = 5, inline = false, }: { height?: number, width?: number, inline?: boolean }) => {
  return <div style={{ height, width, minHeight: height, userSelect: "none", display: inline ? "inline-block" : "block" }} />
}
