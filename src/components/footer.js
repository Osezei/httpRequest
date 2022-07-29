import React from "react";

const Footer = () => {
  return (
    <footer className="container flex justify-between font-bold text-lg px-2 py-6">
      <h3>
        <a
          className="hover:underline underline-offset-4"
          href="https://github.com/Osezei/httpRequest"
          target="_blank"
        >
          Github
        </a>
      </h3>
      <h3>Built with Love by Osezei</h3>
    </footer>
  );
};

export default Footer;
