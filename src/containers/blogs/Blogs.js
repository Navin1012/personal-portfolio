import React, {useState, useEffect} from "react";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";

export default function Blogs() {
  const [mediumBlogs, setMediumBlogs] = useState(null);

  //Medium API returns blogs' content in HTML format. Below function extracts blogs' text content within paragraph tags
  function extractTextContent(html) {
    return typeof html === "string"
      ? html
          .split(/<\/p>/i)
          .map(part => part.split(/<p[^>]*>/i).pop())
          .filter(el => el.trim().length > 0)
          .map(el => el.replace(/<\/?[^>]+(>|$)/g, "").trim())
          .join(" ")
      : NaN;
  }

  useEffect(() => {
    if (!blogSection.display || blogSection.displayMediumBlogs !== "true")
      return;

    fetch("/blogs.json")
      .then(response => {
        if (!response.ok) throw new Error("Could not load Medium articles");
        return response.json();
      })
      .then(({items}) => setMediumBlogs(items))
      .catch(error => console.error(error));
  }, []);

  if (!blogSection.display) return null;
  const blogs = mediumBlogs
    ? mediumBlogs.map(blog => ({
        title: blog.title,
        description: extractTextContent(blog.content),
        url: blog.link
      }))
    : blogSection.blogs;

  return (
    <section
      className="portfolio-section"
      id="blogs"
      tabIndex={-1}
      aria-labelledby="blogs-title"
    >
      <div className="frame">
        <h2 id="blogs-title">{blogSection.title}</h2>
        <p className="section-intro">{blogSection.subtitle}</p>
        <div className="card-grid" data-reveal>
          {blogs.map(blog => (
            <BlogCard key={blog.url || blog.title} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
