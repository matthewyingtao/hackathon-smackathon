import { addPost } from "@/stores/posts";
import { $currentUser } from "@/stores/user";
import { useStore } from "@nanostores/react";
import { FaPaperPlane } from "react-icons/fa6";

const FOUR_HUNDRED_YEARS = 400 * 365 * 24 * 60 * 60 * 1000;

const FeedWrite: React.FC = () => {
  const currentUserId = useStore($currentUser)!;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const textarea = e.currentTarget.querySelector("textarea")!;
    const content = textarea.value.trim();

    addPost({
      userId: currentUserId,
      body: content,
      createdAt: new Date(Date.now() - FOUR_HUNDRED_YEARS),
    });

    textarea.value = "";
  };

  return (
    <div className="card w-full bg-sandstone shadow-xl">
      <form onSubmit={handleSubmit} className="card-body p-3 flex flex-col">
        <textarea
          className="textarea bg-muted-gold"
          placeholder="Write what comes to you..."
          rows={4}
        />

        <button type="submit" className="btn btn-primary mt-2 ml-auto">
          Post
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default FeedWrite;
