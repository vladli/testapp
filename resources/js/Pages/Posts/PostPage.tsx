import { Post } from '@/types';

type Props = {
    post: Post;
};
export default function PostPage({ post }: Props) {
    return (
        <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
}
