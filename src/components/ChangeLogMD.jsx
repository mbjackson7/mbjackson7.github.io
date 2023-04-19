// ChangeLogMD.js
import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

export default function ChangeLogMD() {
  const file_name = "CHANGELOG.md";
  const [post, setPost] = useState("");

  useEffect(() => {
    fetch(`/${file_name}`)
      .then((res) => res.text())
      .then((res) => setPost(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-5">
      <Markdown>{post}</Markdown>
    </div>
  );
}
