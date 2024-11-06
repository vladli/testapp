import { Post } from '@/types';
import { Head, Link } from '@inertiajs/react';
import DeletePost from './DeletePost';

type Props = {
    posts: Post[];
};

export default function MainPage({ posts }: Props) {
    return (
        <>
            <Head title="Posts" />
            <div className="px-2 py-4">
                <Link
                    href="/posts/create"
                    className="rounded-lg bg-green-400 p-2"
                >
                    Create Post
                </Link>
            </div>
            <div className="flex flex-col divide-y divide-black">
                {posts.map((post) => (
                    <Link
                        href={`/posts/${post.id}`}
                        key={post.id}
                        className="z-0 p-2 hover:bg-black/20"
                    >
                        <div className="my-2 flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-bold">
                                    {post.title}
                                </h2>
                                <h3 className="text-sm font-semibold text-gray-400">
                                    {new Date(post.created_at).toDateString()}
                                </h3>
                            </div>
                            <DeletePost post={post} />
                        </div>
                        <p>{post.content}</p>
                    </Link>
                ))}
            </div>
        </>
    );
}
