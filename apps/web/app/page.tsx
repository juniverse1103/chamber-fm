import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button, FeatureCard, IconBox, Section } from '@/components/ui';
import { Header, Footer } from '@/components/layout';
import { VoiceRecorder } from '@/components/features/voice-recorder';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <Section background="theme" className="pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-montserrat">
              Your <span className="text-primary inline-block">AI-Powered</span> Voice Inbox
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl">
              Send and receive secure, transcribed, and moderated audio messages — with
              privacy-first design and GPU-accelerated AI.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/signin">
                <Button variant="cta">Get Started</Button>
              </Link>
              <Button variant="thin">How It Works</Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <VoiceRecorder />
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section background="theme" id="features" divider>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat">
            Key Features
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Chamber.fm combines cutting-edge AI with a seamless user experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            iconName="Mic"
            title="Voice Messaging"
            description="Send voice messages that are automatically transcribed for easy reference."
          />
          <FeatureCard
            iconName="MessageSquare"
            title="AI Transcription"
            description="AI-powered content moderation and summarization to keep communications efficient and appropriate."
          />
          <FeatureCard
            iconName="Shield"
            title="Privacy-First"
            description="End-to-end encryption and privacy controls that put you in charge of your data."
          />
          <FeatureCard
            iconName="CreditCard"
            title="Credit System"
            description="Pay-as-you-go wallet system with Stripe integration for transparent pricing."
          />
          <FeatureCard
            iconName="Zap"
            title="GPU-Accelerated"
            description="Lightning-fast processing powered by state-of-the-art GPU infrastructure."
          />
          <FeatureCard
            iconName="Smartphone"
            title="Cross-Platform"
            description="Access your voice inbox from any device with our responsive web application."
          />
        </div>
      </Section>

      {/* How It Works */}
      <Section background="theme" id="how-it-works" divider>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat">
            How It Works
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Simple, secure, and efficient voice communication
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <IconBox iconName="Send" />
            <h3 className="text-2xl font-bold font-montserrat">Record & Send</h3>
            <p className="text-foreground/70">
              Record your voice message and send it securely to any recipient.
            </p>
          </div>

          <div className="space-y-4">
            <IconBox iconName="Brain" />
            <h3 className="text-2xl font-bold font-montserrat">AI Processing</h3>
            <p className="text-foreground/70">
              Our AI transcribes, moderates, and summarizes your message automatically.
            </p>
          </div>

          <div className="space-y-4">
            <IconBox iconName="Inbox" />
            <h3 className="text-2xl font-bold font-montserrat">Secure Delivery</h3>
            <p className="text-foreground/70">
              Recipients receive both audio and text versions in their secure inbox.
            </p>
          </div>
        </div>
      </Section>

      {/* Use Cases */}
      <Section background="theme" id="use-cases" divider>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">Perfect For</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Chamber.fm adapts to various communication needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 font-montserrat">Content Creators</h3>
            <p className="text-foreground/70 mb-4">
              Podcasters and creators can receive voice messages from fans, automatically
              transcribed and moderated.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle size={16} className="text-primary mr-2" strokeWidth={2} />
                <span>Listener feedback and questions</span>
              </li>
              <li className="flex items-center">
                <CheckCircle size={16} className="text-primary mr-2" strokeWidth={2} />
                <span>Content ideas and suggestions</span>
              </li>
              <li className="flex items-center">
                <CheckCircle size={16} className="text-primary mr-2" strokeWidth={2} />
                <span>Monetize audience interactions</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 font-montserrat">Coaches & Consultants</h3>
            <p className="text-foreground/70 mb-4">
              Provide personalized voice feedback to clients with transcriptions for reference.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle size={16} className="text-primary mr-2" strokeWidth={2} />
                <span>Personalized client feedback</span>
              </li>
              <li className="flex items-center">
                <CheckCircle size={16} className="text-primary mr-2" strokeWidth={2} />
                <span>Secure client communications</span>
              </li>
              <li className="flex items-center">
                <CheckCircle size={16} className="text-primary mr-2" strokeWidth={2} />
                <span>Time-efficient consultations</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 font-montserrat">Remote Teams</h3>
            <p className="text-foreground/70 mb-4">
              Asynchronous voice communication with transcripts for distributed teams across time
              zones.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle size={16} className="text-primary mr-2" strokeWidth={2} />
                <span>Async team updates</span>
              </li>
              <li className="flex items-center">
                <CheckCircle size={16} className="text-primary mr-2" strokeWidth={2} />
                <span>Cross-timezone collaboration</span>
              </li>
              <li className="flex items-center">
                <CheckCircle size={16} className="text-primary mr-2" strokeWidth={2} />
                <span>Searchable voice communications</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 font-montserrat">Personal Connections</h3>
            <p className="text-foreground/70 mb-4">
              Stay connected with friends and family through meaningful voice messages.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle size={16} className="text-primary mr-2" strokeWidth={2} />
                <span>Long-distance relationships</span>
              </li>
              <li className="flex items-center">
                <CheckCircle size={16} className="text-primary mr-2" strokeWidth={2} />
                <span>Family updates and stories</span>
              </li>
              <li className="flex items-center">
                <CheckCircle size={16} className="text-primary mr-2" strokeWidth={2} />
                <span>Private, secure communications</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="theme" className="text-center py-16" divider>
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-montserrat">
            Ready to transform your{' '}
            <span className="text-primary inline-block">voice communications</span>?
          </h2>
          <p className="text-xl text-foreground/80">
            Join Chamber.fm today and experience the future of voice messaging.
          </p>
          <div className="pt-4">
            <Link href="/signin">
              <Button variant="cta" className="px-8 py-3 text-lg">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
