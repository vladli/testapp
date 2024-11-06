import { useForm } from '@inertiajs/react';
import toast from 'react-hot-toast';

export default function CreatePost() {
    const { data, setData, post } = useForm({
        title: '',
        content: '',
    });
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post('/posts', {
            onSuccess: () => toast.success('Post created successfully'),
            onError: () => toast.error('Failed to create post'),
        });
    }
    return (
        <form className="flex flex-col gap-2 p-2" onSubmit={onSubmit}>
            <input
                required
                className="rounded-lg"
                placeholder="Title"
                value={data.title}
                onChange={(e) => setData('title', e.target.value)}
            />
            <textarea
                required
                className="rounded-lg"
                placeholder="Text"
                value={data.content}
                onChange={(e) => setData('content', e.target.value)}
            />
            <button className="rounded-lg bg-green-500 p-2">Create</button>
        </form>
    );
}
