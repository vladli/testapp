import { Post } from '@/types';
import { useForm } from '@inertiajs/react';
import toast from 'react-hot-toast';

type Props = {
    post: Post;
};

export default function DeletePost({ post }: Props) {
    const { delete: destroy } = useForm();
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        destroy(`/posts/${post.id}`, {
            onSuccess: () => toast.success('Post deleted successfully'),
            onError: () => toast.error('Failed to delete post'),
        });
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
