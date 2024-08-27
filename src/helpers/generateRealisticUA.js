import operatingSystems from "../api/operatingSystems.json";
import locales from "../api/locales.json";
import browsers from "../api/browsers.json";
import getRandomVersion from "./getRandomVersions.js";

const generateRealisticUA = () => {
  const browser = browsers[Math.floor(Math.random() * browsers.length)];
  const os =
    operatingSystems[Math.floor(Math.random() * operatingSystems.length)];
  const locale = locales[Math.floor(Math.random() * locales.length)];

  const browserVersion = getRandomVersion(
    browser.versionRange[0],
    browser.versionRange[1]
  );
  const osVersion = os.versionRange
    ? getRandomVersion(os.versionRange[0], os.versionRange[1])
    : "";

  let userAgent = `Mozilla/5.0 (${os.name.replace("{version}", osVersion)}) ${
    browser.engine
  } ${browser.name}/${browserVersion}`;

  let safariVersion = ""; // Define safariVersion here

  if (browser.name === "Safari") {
    safariVersion = getRandomVersion(13, 16);
    userAgent += ` Version/${safariVersion}`;
  }

  userAgent += ` ${browser.extra
    .replace("{version}", browserVersion)
    .replace("{safariVersion}", safariVersion)} ${locale}`;

  return userAgent;
};

export default generateRealisticUA;
