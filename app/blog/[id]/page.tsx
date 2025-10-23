import BlogDetailsPage from "@/app/components/BlogDetailsPage";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
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

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <BlogDetailsPage id={id} />;
}
