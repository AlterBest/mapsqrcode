import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import AdSense from "react-adsense"; // Import AdSense

function App() {
  const [location, setLocation] = useState("");
  const [generateQR, setGenerateQR] = useState(false);

  const handleInputChange = (e) => {
    setLocation(e.target.value);
    setGenerateQR(false); // Reset QR generation when input changes
  };

  const handleGenerateClick = () => {
    if (isValidLocation(location)) {
      setGenerateQR(true); // Generate QR only if the location is valid
    } else {
      alert("Please enter a valid Google Maps URL or coordinates.");
    }
  };

  const handleResetClick = () => {
    setLocation("");
    setGenerateQR(false); // Reset the QR code
  };

  const handleDownload = () => {
    const canvas = document.getElementById("qrCodeEl");
    const link = document.createElement("a");
    link.download = "qr-code.png";
    link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    link.click();
  };

  const isValidLocation = (location) => {
    return (
      location.includes("google.com/maps") ||
      location.includes("goo.gl/maps") ||
      location.includes("maps.app.goo.gl") ||
      location.match(
        /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?((\d{1,3}(\.\d+)?)|(180(\.0+)?))$/
      )
    );
  };

  useEffect(() => {
    // Initialize ads
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        Google Maps QR Code Generator
      </h1>
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg flex flex-col">
        <input
          type="text"
          placeholder="Enter Google Maps URL or Coordinates"
          value={location}
          onChange={handleInputChange}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="flex justify-between mb-6">
          <button
            onClick={handleGenerateClick}
            disabled={!isValidLocation(location)}
            className={`w-full py-3 mr-2 text-white font-semibold rounded-lg shadow-md transition duration-300 ${
              isValidLocation(location)
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Generate QR Code
          </button>
          <button
            onClick={handleResetClick}
            className="w-full py-3 ml-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Reset
          </button>
        </div>
        <div className="flex flex-col items-center mt-8">
          {generateQR && (
            <>
              <QRCode
                id="qrCodeEl"
                value={location}
                size={256}
                level="H"
                includeMargin={true}
                bgColor="transparent" // Set background to transparent
              />
              <div className="flex mt-4">
                <button
                  onClick={handleDownload}
                  className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
                >
                  Download PNG
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Google Ads Section */}
      <div className="w-full max-w-lg mt-8 flex justify-center">
        <AdSense.Google
          client="ca-pub-XXXXXXXXXXXXXX" // Replace with your AdSense client ID
          slot="YYYYYYYYYY" // Replace with your AdSense slot ID
          style={{ display: "block" }}
          format="auto"
          responsive="true"
        />
      </div>

      {/* Summary Section */}
      <div className="w-full max-w-lg bg-gray-50 p-6 rounded-xl shadow-md mt-10 text-gray-800">
        <h2 className="text-2xl font-bold mb-4">How This Tool Works</h2>
        <p className="mb-4">
          This Google Maps QR Code Generator allows you to create QR codes from Google Maps URLs or coordinates.
          Simply enter a valid Google Maps URL or coordinates in the input box, and click "Generate QR Code" to
          create a QR code that links to the specified location.
        </p>
        <h2 className="text-2xl font-bold mb-4">Using the PNG File</h2>
        <p>
          Once the QR code is generated, you can download it as a PNG file by clicking the "Download PNG" button.
          You can then use the PNG file in various editing software such as Adobe Photoshop, Illustrator, or any
          other graphics editor. The PNG format is widely supported and maintains high image quality, making it
          ideal for both digital and print uses.
        </p>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-gray-800 text-gray-200 p-4 text-center mt-10">
        <p>&copy; {new Date().getFullYear()} YugenStudios. All rights reserved.</p>
        <p>Google Maps QR Code generator by prem</p>
      </footer>
    </div>
  );
}

export default App;
