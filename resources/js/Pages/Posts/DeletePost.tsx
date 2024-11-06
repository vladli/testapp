import { Post } from '@/types';
import { useForm } from '@inertiajs/react';

type Props = {
    post: Post;
};

export default function DeletePost({ post }: Props) {
    const { delete: destroy } = useForm();
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        destroy(`/posts/${post.id}`);
    }
    return (
        <form onSubmit={handleSubmit} className="z-10">
            <button
                className="rounded-lg bg-red-400 px-3 py-2"
                onClick={(e) => e.stopPropagation()}
            >
                Delete
            </button>
        </form>
    );
}
