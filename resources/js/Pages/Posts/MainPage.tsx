import { Post } from '@/types';

type Props = {
    posts: Post[];
};

export default function MainPage({ posts }: Props) {
    return (
        <div className="flex flex-col gap-y-2 divide-y">
            {posts.map((post) => (
                <div key={post.id}>
                    <h2 className="text-lg font-bold">{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}
