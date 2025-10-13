import React from "react";
import "./BlogCard.scss";

export default function BlogCard({ blog, isDark }) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div 
      className={`blog-card-wrapper ${isDark ? 'dark-mode' : ''}`}
      onClick={() => openUrlInNewTab(blog.url, blog.title)}
    >
      <article className="blog-card">
        {/* Card Header with Image */}
        <div className="blog-image-container">
          {blog.image ? (
            <img 
              src={blog.image} 
              alt={blog.title}
              className="blog-image"
            />
          ) : (
            <div className="blog-image-placeholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
                <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
                <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          )}
          <div className="blog-category">{blog.category || 'Article'}</div>
          <div className="blog-overlay"></div>
        </div>

        {/* Card Content */}
        <div className="blog-content">
          <div className="blog-meta">
            {blog.date && (
              <span className="blog-date">
                {formatDate(blog.date)}
              </span>
            )}
            {blog.readTime && (
              <span className="blog-read-time">
                {blog.readTime}
              </span>
            )}
          </div>
          
          <h3 className="blog-title">
            {blog.title}
          </h3>
          
          <p className="blog-description">
            {blog.description}
          </p>

          {/* Tags */}
          {blog.tags && (
            <div className="blog-tags">
              {blog.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="blog-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer with CTA */}
          <div className="blog-footer">
            <span className="blog-cta">
              Read More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className="blog-hover-border"></div>
      </article>
    </div>
  );
}