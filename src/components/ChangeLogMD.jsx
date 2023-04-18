// ChangeLogMD.js
import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

export default function ChangeLogMD() {
  const file_name = "CHANGELOG.md";
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`../${file_name}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  return (
    <div sx={{ paddingInline: "2vw" }}>
      <Markdown>{post}</Markdown>
    </div>
  );
}
