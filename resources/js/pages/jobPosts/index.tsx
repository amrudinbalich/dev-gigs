export default function Index({ jobPosts }) {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Job Posts</h1>
            <ul>
                {jobPosts.map((jobPost) => (
                    <li key={jobPost.id} className="mb-2">
                        <h2 className="text-xl font-semibold">{jobPost.title}</h2>
                        <p>{jobPost.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}