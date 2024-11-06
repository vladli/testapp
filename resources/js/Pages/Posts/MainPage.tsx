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
            <div className="p-4">
                <Link href="/posts/create" className="border-2 p-2">
                    Create Post
                </Link>
            </div>
            <div className="flex flex-col gap-y-2 divide-y">
                {posts.map((post) => (
                    <Link
                        href={`/posts/${post.id}`}
                        key={post.id}
                        className="z-0 p-2 hover:bg-black/20"
                    >
                        <div className="flex justify-between">
                            <h2 className="text-lg font-bold">{post.title}</h2>
                            <DeletePost post={post} />
                        </div>
                        <p>{post.content}</p>
                    </Link>
                ))}
            </div>
        </>
    );
}
