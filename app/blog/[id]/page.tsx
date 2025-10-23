import BlogDetailsPage from "@/app/components/BlogDetailsPage";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const posts = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];

  return posts.map((post) => ({
    id: post.id,
  }));
}

export default function Page({ params}:PageProps) {
  return <BlogDetailsPage id={params.id} />;
}
