import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl">404</h1>
        <h2 className="mt-4 text-xl">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page doesn&apos;t exist or has moved. Try our hair oil, the FAQs or the journal.
        </p>
        <div className="mt-6">
          <Link href="/" className="btn-solid">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
