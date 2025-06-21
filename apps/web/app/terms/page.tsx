import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

      <div className="prose prose-slate max-w-none">
        <p className="text-lg mb-6">
          Welcome to Chamber.fm. By using our service, you agree to these Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing or using Chamber.fm, you agree to be bound by these Terms of Service and all
          applicable laws and regulations. If you do not agree with any of these terms, you are
          prohibited from using or accessing this site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
        <p>
          Permission is granted to temporarily access the materials on Chamber.fm&apos;s website for
          personal, non-commercial use. This is the grant of a license, not a transfer of title.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Privacy Policy</h2>
        <p>
          Your use of Chamber.fm is also governed by our Privacy Policy, which is incorporated by
          reference into these Terms of Service.
        </p>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">Last updated: June 22, 2025</p>
          <p className="mt-4">
            <Link href="/" className="text-primary hover:underline">
              Return to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
