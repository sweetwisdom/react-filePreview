const imgSrc = "./404.png";
// import Viewer from "react-viewer";
import "viewerjs/dist/viewer.css";
import Viewer from "viewerjs";
import { useEffect, useRef } from "react";

const visible = true;
// 图片预览

export function ImgPreview({ imgUrl }) {
  imgUrl = imgUrl || imgSrc;
  console.log(imgUrl);
  const imgRef = useRef(null);

  const imgStyle = {
    width: "500px",
    maxHeight: "500px",
    margin: "0 auto",
    display: "none",
  };

  useEffect(() => {
    const viewer = new Viewer(imgRef.current, {
      inline: true,

      toolbar: {
        zoomIn: 1,
        zoomOut: 1,
        rotateLeft: 1,
        rotateRight: 1,
        reset: 1,
      },
    });
    return () => {
      viewer && viewer.destroy();
    };
  }, []);

  return (
    <div className="imgContainer">
      <img src={imgUrl} style={imgStyle} alt="powered by zc" ref={imgRef} />
    </div>
  );
}

export function PdfPreview({ fileUrl }) {
  // ./web/viewer.html?file=https://static.r2coding.com/r2_static/pdf/jawa.pdf

  const pdfUrl = "./pdf/viewer.html?file=" + fileUrl;

  return (
    <div className="imgContainer">
      <iframe className="imgPre" src={pdfUrl} frameBorder="none"></iframe>
    </div>
  );
}

// office在线预览
// http://view.officeapps.live.com/op/view.aspx?src=
export function OfficePreview({ fileUrl }) {
  let file = "https://view.officeapps.live.com/op/embed.aspx?src=" + fileUrl + "&amp;wdPrint=0&amp;wdEmbedCode=0";
  return (
    <div className="imgContainer">
      <iframe className="imgPre" src={file} frameBorder="none"></iframe>
    </div>
  );
}

// 导出第一个字母必须大写

//  export default imgPreview;
