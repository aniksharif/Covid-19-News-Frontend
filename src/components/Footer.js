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
            সহযোগিতায়  <br /><br />  বাসদ <br /> <br /> বিজ্ঞান আন্দোলন মঞ্চ   
        </a>
      </p>
      <p className="h6">
        All statistics,informations are collected from 
        <a href="https://www.worldometers.info/coronavirus/"> worldometers</a>,
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"> WHO </a>,
        <a href="cdc.gov/coronavirus/2019-ncov/index.html"> CDC </a>
      </p>
    </footer>
    </>
  );
}

export default Footer;
