import { useState, useEffect } from "react";
import axios from "axios"
import "./App.css";
import { ImgPreview, PdfPreview, OfficePreview } from "./component/imgPre";
function queryURLParams(URL) {
  let url = URL.split("?")[1];
  const urlSearchParams = new URLSearchParams(url);
  const params = Object.fromEntries(urlSearchParams.entries());
  return params;
}
// 检测是否为office 格式文件

function isOfficeFile(fileType) {
  const officeFile = ["doc", "docx", "xls", "xlsx", "ppt", "pptx"];
  return officeFile.includes(fileType);
}
// 请求远程文件 fetch
 function downloadFile() {
   let url = "./404.png";
   console.log(url);
   //    axios
   //      .get(url, {
   //        headers: {
   //          "Content-Type": "application/octet-stream",
   //        },
   //      })
   //      .then((res) => {
   //        console.log(res);
   //      });
 }
function App() {
  //获取url parmas
  const { type, url } = queryURLParams(window.location.href);
  console.log(type, url);
  console.log("---");
  //   if (!type || !id) {
  //     return;
  //   }
  const fileType = type || "img";

  // 页面初始化事件

  // 返回
  if (fileType === "img" && url) {
    return <ImgPreview imgUrl={url} />;
  } else if (fileType === "pdf" && url) {
    return <PdfPreview fileUrl={url} />;
  } else if (isOfficeFile(fileType) && url) {
    return <OfficePreview fileUrl={url} />;
  } else {
    document.title = "文件预览异常";
    return (
      <div className="notFound">

        <img  onClick={downloadFile} src={"./404.png"} alt="" />
      </div>
    );
  }
}

export default App;
