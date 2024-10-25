import React from "react";
import "./SocialMediaLinks.css";

function SocialMediaLinks() {
  return (
    <div>
      <div className="article-social-media">
        <div className="article-social-icon">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-facebook fa-lg"></i>
          </a>
        </div>
        <div className="article-social-icon">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-linkedin fa-lg"></i>
          </a>
        </div>
        <div className="article-social-icon">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-instagram fa-lg"></i>
          </a>
        </div>
        <div className="article-social-icon">
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-whatsapp fa-lg"></i>
          </a>
        </div>
        <div
          className="article-social-icon"
          onClick={(e) => {
            e.preventDefault();
            window.print();
          }}
        >
          <i class="fa-solid fa-print fa-lg"></i>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaLinks;
