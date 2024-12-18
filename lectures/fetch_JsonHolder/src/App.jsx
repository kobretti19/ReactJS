import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "GET",
          headers: {
            "Content-type": "aplication/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((post) => setData(post));
      } catch (e) {
        console.log(e);
      }
    };
    console.log(data);
    handleFetch();
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((post) => setData([post, ...data]));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className=" flex justify-center items-center flex-col bg-gray-500 ">
      <form className=" mt-10 flex  flex-col space-y-4 w-[200px] ">
        <input
          className="rounded-md placeholder:pl-2 outline-none"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="rounded-md placeholder:pl-2 outline-none"
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button
          className="bg-white rounded-md"
          onClick={(e) => handlePostSubmit(e)}
        >
          Submit
        </button>
      </form>
      <>
        {data?.map((post) => (
          <div
            className="bg-white w-[600px] mt-10 rounded-md p-2"
            key={post?.id}
          >
            <h1 className="text-xl">{post?.title}</h1>
            <p>{post?.body}</p>
          </div>
        ))}
      </>
    </div>
  );
}
