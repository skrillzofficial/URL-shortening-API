import React, { useState, useEffect } from "react";
import brandimg from "../assets/images/icon-brand-recognition.svg";
import detailedimg from "../assets/images/icon-detailed-records.svg";
import fully from "../assets/images/icon-fully-customizable.svg";

const Links = () => {
  // Load saved links from localStorage
  const localStorageLinks = () => {
    const savedLinks = localStorage.getItem("shortenedLinks");
    return savedLinks ? JSON.parse(savedLinks) : [];
  };

  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState(localStorageLinks());
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Save links to localStorage when they change
  useEffect(() => {
    localStorage.setItem("shortenedLinks", JSON.stringify(shortenedLinks));
  }, [shortenedLinks]);

  // Check if URL is already shortened
  const isAlreadyShortened = (url) => {
    const shortenerDomains = [
      'tinyurl.com',
      'bit.ly',
      'short.link',
      't.co',
      'goo.gl',
      'ow.ly',
      'is.gd',
      'buff.ly',
      'tiny.cc'
    ];

    try {
      const urlObj = new URL(url);
      return shortenerDomains.some(domain => 
        urlObj.hostname.includes(domain) || 
        urlObj.hostname.endsWith(domain)
      );
    } catch (err) {
      return false;
    }
  };

  // Improved URL validation
  const isValidUrl = (urlString) => {
    try {
      new URL(urlString);
      return true;
    } catch (err) {
      return false;
    }
  };

  // Shorten URL with better error handling
  const shortenUrl = async (inputUrl) => {
    try {
      const response = await fetch(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(inputUrl)}`
      );
      
      if (!response.ok) throw new Error("API request failed");
      
      const shortUrl = await response.text();
      
      if (shortUrl.startsWith("Error:")) {
        throw new Error(shortUrl);
      }
      
      return shortUrl;
    } catch (err) {
      throw new Error("Failed to shorten URL");
    }
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Validate URL before processing
    if (!url.trim()) {
      setError("Please add a link");
      setIsLoading(false);
      return;
    }

    if (!isValidUrl(url)) {
      setError("Please enter a valid URL (e.g., https://example.com)");
      setIsLoading(false);
      return;
    }

    if (isAlreadyShortened(url)) {
      setError("This appears to be an already shortened URL. Please provide the original long URL.");
      setIsLoading(false);
      return;
    }

    try {
      const shortUrl = await shortenUrl(url);
      
      setShortenedLinks([
        {
          original: url,
          shortened: shortUrl,
          id: Date.now(),
        },
        ...shortenedLinks,
      ]);
      
      setUrl("");
    } catch (err) {
      setError(err.message || "Failed to shorten URL. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Copy to clipboard function
  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="pt-8 bg-[hsl(0,0%,75%)] mt-25">
      <div className="container mx-auto w-11/12 space-y-10 py-10 relative">
        {/* URL Shortener Form */}
        <div className="p-8 md:p-5 Boostinputs bg-[hsl(257,27%,26%)] rounded-md absolute top-[-8%] left-[50%] -translate-x-1/2 w-full">
          <form
            onSubmit={handleSubmit}
            className="flex  md:flex-row flex-col gap-3"
          >
            <div className="flex-1">
              <input
                type="text"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setError("");
                }}
                placeholder="Shorten a link here.."
                className={`py-3 pl-3 text-[12px] bg-white z-5 rounded-md w-full  ${
                  error ? "border-red-500 border-2" : ""
                }`}
              />
              {error && (
                <p className="text-red-300 text-xs italic mt-1">{error}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-[hsl(180,66%,49%)] py-2 md:py-3 hover:opacity-90 cursor-pointer text-white font-semibold rounded-md md:w-[25%] hover:bg-[hsl(180,66%,69%)]"
            >
              Shorten it!
            </button>
          </form>
        </div>

        {/* Display shortened links */}
        {shortenedLinks.map((link, index) => (
          <div
            key={link.id}
            className="p-4 md:p-2 flex flex-col md:flex-row justify-between items-center bg-white mt-5 md:mt-3 rounded-md"
          >
            <p className="px-3 py-1 truncate w-[80%]">{link.original}</p>
            <div className="border md:hidden border-gray-300 w-full"></div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between p-3 gap-2">
              <p className="text-[hsl(180,66%,49%)]">{link.shortened}</p>
              <button
                onClick={() => copyToClipboard(link.shortened, index)}
                className={`text-white cursor-pointer p-2 font-semibold rounded-md ${
                  copiedIndex === index
                    ? "bg-[hsl(257,27%,26%)]"
                    : "bg-[hsl(180,66%,49%)] hover:bg-[hsl(180,66%,69%)]"
                }`}
              >
                {copiedIndex === index ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}

        {/* Keep all your existing Advanced Statistics section exactly as is */}
        <div className="pb-20">
          <div className="py-12 text-center flex flex-center flex-col items-center justify-center gap-4 md:gap-2">
            <h2 className="text-[hsl(260,8%,14%)] font-semibold text-[25px] text-center">
              Advanced Statistics
            </h2>
            <p className="text-gray-500 text-balanced px-2 md:px-20 text-[16px] sm:text-[20px]">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>

          <div className="relative flex">
            <div className="w-[8px] min-h-[80%] bg-[hsl(180,66%,49%)] absolute left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2 z-2 md:hidden"></div>
            <div className="h-[8px] min-w-[80%] bg-[hsl(180,66%,49%)] absolute left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2 z-2 hidden md:flex"></div>

            <div className="flex flex-col md:grid md:grid-cols-3 gap-14 md:gap-5 pt-10 z-3">
              <div className="flex flex-col items-center gap-3 bg-white text-center pt-12 py-10 rounded-sm text-balance md:pl-3 md:px-2 md:text-start relative">
                <span className="absolute top-[-30px] md:top-[-40px] md:left-[30px]">
                  <img
                    src={brandimg}
                    alt=""
                    className="bg-[hsl(257,27%,26%)] p-4 rounded-full size-18 md:size-20"
                  />
                </span>
                <h2 className="text-[hsl(257,27%,26%)] md:text-[20] text-[18px] font-semibold md:self-start">
                  Brand Recognition
                </h2>
                <p className="text-gray-500 text-[15px] md:text-[18px]">
                  Boost your brand recognition with each click. Generic links
                  don't mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>

              <div className="flex flex-col items-center gap-3 bg-white text-center pt-12 py-10 rounded-sm text-balance md:pl-3 md:px-2 md:text-start relative md:top-8">
                <span className="absolute top-[-30px] md:top-[-40px] md:left-[30px]">
                  <img
                    src={detailedimg}
                    alt=""
                    className="bg-[hsl(257,27%,26%)] p-4 rounded-full size-18 md:size-20"
                  />
                </span>
                <h2 className="text-[hsl(257,27%,26%)] md:text-[20] text-[18px] font-semibold md:self-start">
                  Detailed Records
                </h2>
                <p className="text-gray-500 text-[15px] md:text-[18px]">
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>

              <div className="flex flex-col items-center gap-3 bg-white text-center pt-12 py-10 rounded-sm text-balance md:pl-3 md:px-2 md:text-start relative md:top-15">
                <span className="absolute top-[-30px] md:top-[-40px] md:left-[30px]">
                  <img
                    src={fully}
                    alt=""
                    className="bg-[hsl(257,27%,26%)] p-4 rounded-full size-18 md:size-20"
                  />
                </span>
                <h2 className="text-[hsl(257,27%,26%)] text-[18px] md:text-[20] font-semibold md:self-start">
                  Fully Customizable
                </h2>
                <p className="text-gray-500 text-[15px] md:text-[18px]">
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keep your existing Boost section */}
      <div className="Boost bg-[hsl(259,35%,14%)]  w-full mx-auto">
        <div className=" text-white text-center container mx-auto w-11/12 font-semibold py-18 space-y-2">
          <div className="container space-y-3 py-16">
            <h2 className="text-[28px]">Boost your links today</h2>
            <button
              disabled
              className="bg-[hsl(180,66%,49%)] cursor-pointer pointer-events-none  py-2 px-10 rounded-full text-[20px] hover:bg-[hsl(180,66%,69%)]"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
