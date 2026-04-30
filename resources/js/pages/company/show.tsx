export default function Show({ company }) {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">{company.name}</h1>
            <p>{company.description}</p>
            <p>{company.size}</p>
            <p>{company.logo_url}</p>
            <p>{company.website_url}</p>
        </div>
    );
}