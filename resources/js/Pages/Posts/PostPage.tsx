import { Post } from '@/types';
import { Head } from '@inertiajs/react';

type Props = {
    post: Post;
};
export default function PostPage({ post }: Props) {
    return (
        <>
            <Head title={post.title} />
            <div className="flex flex-col gap-y-2 p-2">
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <h3 className="text-sm font-semibold text-gray-400">
                    {new Date(post.created_at).toDateString()}
                </h3>
                <p>{post.content}</p>
            </div>
        </>
    );
}
