import React from "react";

function Footer() {
  return (
    <>
    <footer className="pt-5">
      <p className="h2">
        <a
          className="badge badge-pill badge-light font-weight-light"
          href="http://spb.org.bd/"
          style={{fontFamily:'serif'}}
        >
           প্রচারে  <br /><br />  বাসদ <br /> <br /> সমাজতান্ত্রিক ছাত্র ফ্রন্ট <br /> <br /> বিজ্ঞান আন্দোলন মঞ্চ   
        </a>
      </p>
      <p className="h6">
        All informations are collected from 
        <a href="https://www.worldometers.info/coronavirus/"> worldometers</a>
      </p>
    </footer>
    </>
  );
}

export default Footer;
