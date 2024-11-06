import { useForm } from '@inertiajs/react';

export default function CreatePost() {
    const { data, setData, post } = useForm({
        title: '',
        content: '',
    });
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post('/posts');
    }
    return (
        <div>
            <form className="flex flex-col gap-2" onSubmit={onSubmit}>
                <input
                    placeholder="Title"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                />
                <textarea
                    placeholder="Text"
                    value={data.content}
                    onChange={(e) => setData('content', e.target.value)}
                />
                <button className="">Create</button>
            </form>
        </div>
    );
}
