import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]); // Store blogs (one at a time)
  const [author, setAuthor] = useState({}); // Store author details
  const [loading, setLoading] = useState(false); // Track loading state
  const [cursor, setCursor] = useState(null); // Cursor for fetching new blogs
  const [hasMore, setHasMore] = useState(true); // Track if more blogs are available

  const DEFAULT_IMAGE =
    "https://images.pexels.com/photos/831430/pexels-photo-831430.jpeg?auto=compress&cs=tinysrgb&w=800";
  const DEFAULT_PROFILE =
    "https://www.w3schools.com/w3images/avatar2.png";

  const fetchBlog = async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    const query = `
      query ($cursor: String) {
        user(username: "whokashmiri") {
          name
          profilePicture
          publications(first: 1) {
            edges {
              node {
                posts(first: 4) {  # Fetch ONE blog at a time
                  edges {
                    node {
                      title
                      brief
                      slug
                      url
                      coverImage {
                        url
                      }
                    }
                    cursor
                  }
                  pageInfo {
                    hasNextPage
                    endCursor
                  }
                }
              }
            }
          }
        }
      }
    `;

    try {
      const response = await fetch("https://gql.hashnode.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables: { cursor } }),
      });

      const { data } = await response.json();

      if (
        data?.user?.publications?.edges.length > 0 &&
        data.user.publications.edges[0].node.posts.edges.length > 0
      ) {
        const postData = data.user.publications.edges[0].node.posts;
        const newBlog = postData.edges[0].node;

        setBlogs([newBlog]); // Replace with new blog
        setCursor(postData.pageInfo.endCursor); // Update cursor for next fetch
        setHasMore(postData.pageInfo.hasNextPage); // Check if more blogs exist
      } else {
        setHasMore(false);
      }

      setAuthor({
        name: data?.user?.name || "Unknown Author",
        profilePicture: data?.user?.profilePicture || DEFAULT_PROFILE,
      });
    } catch (error) {
      console.error("Fetch Error:", error);
      setHasMore(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchBlog(); // Fetch first blog on mount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-accent dark:bg-primary py-8">
      {/* Header with See More button */}
      <div className="flex items-center justify-between w-[60%] mb-6">
        <h2 className="text-3xl font-bold text-black dark:text-white">
          Latest Blogs
        </h2>
        {hasMore && (
          <button
            onClick={fetchBlog}
            className="bg-red-500 z-50 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            disabled={loading}
          >
            {loading ? "Loading..." : "See More"}
          </button>
        )}
      </div>

      {/* Blog Display */}
     <div className="w-[60%] text-black dark:text-white">
        {loading && blogs.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="flex justify-center">
              {blogs.map((blog, index) => (
                <a
                  key={index}
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-800 p-5 rounded-xl hover:bg-gray-700 transition shadow-lg w-full max-w-lg"
                >
                  <img
                    src={blog.coverImage?.url || DEFAULT_IMAGE}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={author.profilePicture}
                      alt={author.name}
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <span className="text-lg font-semibold">{author.name}</span>
                  </div>
                  <h3 className="text-xl font-bold">{blog.title}</h3>
                  <p className="text-gray-300">{blog.brief}</p>
                </a>
              ))}
            </div>
          </>
        )}
      </div> 
    </div>
  );
};

export default Blogs;
