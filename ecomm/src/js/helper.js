// import { async } from "regenerator-runtime";
import { TIME_OUT } from "./config";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`server Loading time is high `));
    }, s * 1000);
  });
};

export const AJEX = async function (url, upload = undefined) {
  try {
    const fetchpro = upload
      ? fetch(url, {
          method: "POST",
          header: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(upload),
        })
      : fetch(url);
    // const res = await fetchpro;
    const res = await Promise.race([timeout(TIME_OUT), fetchpro]);

    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
