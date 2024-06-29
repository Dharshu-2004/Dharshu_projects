import QRCode from "qrcode";
import { classicNameResolver } from "typescript";
import "./styles.css";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");
  const GenerateQRCode = () => {
    QRCode.toDataURL(url,{
      width: 800px,
      margin: 2,
    }, (err, url) => {
      if (err) return console.error(err);
      console.log(url);
      setQrcode(url);
    });
  };
  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="e.g https://google.com"
        value={url}
        onChange={(evt) => setUrl(evt.target.value)}
      />
      <button onClick={GenerateQRCode}>Generate</button>
      {qrcode && (
        <>
          <img src={qrcode} />
          <a href={qrcode} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}
export default App;
