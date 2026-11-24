import React from "react";

export default function BlogCard({blog}) {
  return (
    <article className="panel article-card">
      <h3>{blog.title}</h3>
      <p>{blog.description}</p>
      {blog.url && (
        <a
          href={blog.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read more: ${blog.title}`}
        >
          Read More <span aria-hidden="true">↗</span>
        </a>
      )}
    </article>
  );
}
