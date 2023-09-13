export async function generateStaticParams() {
  return ["en", "es"].map((lang) => ({ lang }));
}

export default function LangPage() {
  return <div>Content</div>;
}
