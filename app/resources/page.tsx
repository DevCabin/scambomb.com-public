// Resources index page - mirrors blog layout
import Link from 'next/link'

const resources = [
  {
    slug: 'ai-voice-cloning-survival-guide',
    title: 'AI Voice Cloning Survival Guide',
    description: 'The complete family protection playbook: how AI voice scams work, the 3-second audio threat, and how to set up a family safe word that stops scammers cold.',
    tag: 'SURVIVAL GUIDE',
    readTime: '10 min read',
    category: 'guides'
  },
  {
    slug: 'dont-let-a-text-steal-everything',
    title: 'Don\'t Let a Text Steal Everything',
    description: 'The most dangerous text scams targeting your bank, your packages, and your family — and the exact replies that shut scammers down.',
    tag: 'SURVIVAL GUIDE',
    readTime: '8 min read',
    category: 'guides'
  },
  {
    slug: 'phishing-link-survival-guide',
    title: 'Phishing Link Survival Guide',
    description: 'Clicked a suspicious link? This step-by-step recovery guide shows you exactly what to do in the first 5 minutes to protect your accounts and identity.',
    tag: 'SURVIVAL GUIDE',
    readTime: '7 min read',
    category: 'guides'
  },
  {
    slug: 'older-adult-fraud-2024-2025',
    title: 'Older Adult Fraud Report 2024–2025',
    description: '$4.9 billion in losses. A 43% year-over-year surge. AI voice cloning hit $897M. Our comprehensive research brief on the fraud epidemic targeting seniors.',
    tag: 'RESEARCH REPORT',
    readTime: '15 min read',
    category: 'reports',
    external: true,
    externalUrl: '/reports/older-adult-fraud-2024-2025'
  },
  {
    slug: 'career-scam-case-study',
    title: 'Career Scam Case Study Hub',
    description: 'Real examples, red flags, and share-ready assets. A complete resource hub for job seekers, career counselors, and community advocates fighting employment scams.',
    tag: 'CASE STUDY',
    readTime: 'Multi-part',
    category: 'hubs',
    external: true,
    externalUrl: '/career-scam-case-study'
  },
  {
    slug: 'scam-stories',
    title: 'Share Your Scam Story',
    description: 'Help others learn from real experiences. Submit your scam encounter to our growing database of real-world attacks and how they were stopped.',
    tag: 'COMMUNITY',
    readTime: '5 min',
    category: 'community',
    external: true,
    externalUrl: '/scam-stories'
  }
]

const presentations = [
  {
    slug: 'presentation-live',
    title: 'AI Voice Scams Workshop',
    description: 'The complete live presentation deck: how AI voice scams work, the grandparent scam evolution, and family verification systems.',
    tag: 'WORKSHOP',
    external: true,
    externalUrl: '/presentation-live'
  },
  {
    slug: 'presentation-ai-future',
    title: 'AI Literacy Workshop',
    description: 'From AI basics to agent orchestration. A two-day workshop curriculum for seniors, students, and beginners ready to guide the AI.',
    tag: 'WORKSHOP',
    external: true,
    externalUrl: '/presentation-ai-future'
  },
  {
    slug: 'presentation-prompts',
    title: '30 AI Prompts Playbook',
    description: 'Field-tested prompts for everyday life: photos, recipes, travel planning, medical visits, and creative projects. No coding required.',
    tag: 'TOOLKIT',
    external: true,
    externalUrl: '/presentation-prompts'
  },
  {
    slug: 'presentation-trivia',
    title: 'Adults & AI Usage Stats',
    description: 'Interactive trivia deck on AI adoption among adults 50+. Perfect for audience warm-up and myth-busting about senior tech adoption.',
    tag: 'TRIVIA',
    external: true,
    externalUrl: '/presentation-trivia'
  }
]

export default function ResourcesPage() {
  const featuredResource = resources[0] // AI Voice Cloning guide
  const survivalGuides = resources.filter(r => 
    (r.category === 'guides' && r.slug !== featuredResource.slug) || r.category === 'reports'
  )
  const hubsAndCommunity = resources.filter(r => r.category === 'hubs' || r.category === 'community')

  const ResourceCard = ({ resource }: { resource: typeof resources[0] }) => {
    const href = resource.external ? resource.externalUrl! : `/resources/${resource.slug}`
    
    // Custom two-tone treatment per title
    const getTitleParts = (title: string, slug: string) => {
      if (slug === 'dont-let-a-text-steal-everything') {
        return { start: "DON'T LET A TEXT ", gold: "STEAL ", end: "EVERYTHING" }
      }
      // Default: all but last word white, last word gold
      const words = title.toUpperCase().split(' ')
      const lastWord = words.pop()
      return { start: words.join(' ') + ' ', gold: '', end: lastWord }
    }
    
    const parts = getTitleParts(resource.title, resource.slug)
    
    return (
      <article 
        className="group flex flex-col rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-200"
      >
        <Link href={href} className="flex flex-col flex-1 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-0.5 text-xs font-medium text-white/70 ring-1 ring-inset ring-white/10">
              {resource.tag}
            </span>
            {'readTime' in resource && (
              <span className="text-xs text-white/40">{resource.readTime}</span>
            )}
          </div>
          
          <h3 className="text-xl font-black uppercase tracking-tight mb-3 line-clamp-2">
            <span className="text-white">{parts.start}</span>
            {parts.gold && <span className="text-[#F5C84C]">{parts.gold}</span>}
            <span className="text-[#F5C84C]">{parts.end}</span>
          </h3>
          
          <p className="text-white/60 mb-6 line-clamp-3 flex-1">
            {resource.description}
          </p>
          
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <span className="text-[#F5C84C] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1">
              Access resource
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </div>
        </Link>
      </article>
    )
  }

  const PresentationCard = ({ presentation }: { presentation: typeof presentations[0] }) => {
    // Split title for two-tone treatment: last word in yellow
    const titleWords = presentation.title.split(' ')
    const lastWord = titleWords.pop()
    const titleStart = titleWords.join(' ')
    
    return (
    <article 
      className="group flex flex-col rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-200"
    >
      <Link href={presentation.externalUrl} className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-0.5 text-xs font-medium text-white/70 ring-1 ring-inset ring-white/10">
            {presentation.tag}
          </span>
        </div>
        
        <h3 className="text-lg font-black uppercase tracking-tight mb-2 line-clamp-2">
          <span className="text-white">{titleStart} </span>
          <span className="text-[#F5C84C]">{lastWord}</span>
        </h3>
        
        <p className="text-sm text-white/60 line-clamp-2 flex-1">
          {presentation.description}
        </p>
        
        <div className="flex items-center justify-end pt-3 mt-3 border-t border-white/10">
          <span className="text-[#F5C84C] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1">
            View deck
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
    )
  }

  return (
    <div className="min-h-screen bg-[#0B1324]">
      {/* Hero Section */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              <span className="text-white">SCAM</span>
              <span className="text-[#F5C84C]">B💣MB</span>
              <span className="text-white"> RESOURCES</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Free guides, research reports, and workshop materials to protect you and your family from scams.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Resource */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <span className="text-sm font-semibold text-[#F5C84C] tracking-wider uppercase">
            Featured Resource
          </span>
        </div>
        
        <article className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-[#F5C84C]/50 transition-all duration-300">
          <Link href={`/resources/${featuredResource.slug}`} className="block p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center rounded-full bg-[#F5C84C]/10 px-3 py-1 text-xs font-medium text-[#F5C84C] ring-1 ring-inset ring-[#F5C84C]/20">
                    {featuredResource.tag}
                  </span>
                  <span className="text-sm text-white/50">{featuredResource.readTime}</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#F5C84C] transition-colors">
                  {featuredResource.title}
                </h2>
                
                <p className="text-lg text-white/70 leading-relaxed mb-6 max-w-2xl">
                  {featuredResource.description}
                </p>
                
                <div className="flex items-center gap-4">
                  <span className="text-[#F5C84C] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Access guide
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </article>
      </div>

      {/* Survival Guides & Reports Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="mb-8">
          <span className="text-sm font-semibold text-white/50 tracking-wider uppercase">
            Survival Guides & Reports
          </span>
          <p className="text-white/40 text-sm mt-1">Step-by-step playbooks and data-driven research</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {survivalGuides.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </div>

      {/* Hubs & Community Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="mb-8">
          <span className="text-sm font-semibold text-white/50 tracking-wider uppercase">
            Hubs & Community
          </span>
          <p className="text-white/40 text-sm mt-1">Multi-part resources and community tools</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {hubsAndCommunity.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </div>

      {/* Presentations Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="mb-8">
          <span className="text-sm font-semibold text-white/50 tracking-wider uppercase">
            Workshop Presentations
          </span>
          <p className="text-white/40 text-sm mt-1">Interactive decks for community education</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {presentations.map((presentation) => (
            <PresentationCard key={presentation.slug} presentation={presentation} />
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#F5C84C]/10 to-transparent p-8 sm:p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Get new resources delivered to your inbox
          </h3>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            We release new guides, reports, and tools regularly. Join thousands of people who receive alerts when fresh protection resources drop.
          </p>
          <a 
            href="https://featherstone.kit.com/3daabf1cc1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#0B1324] bg-[#F5C84C] rounded-lg hover:bg-[#F5C84C]/90 transition-colors"
          >
            Subscribe to Newsletter
          </a>
        </div>
      </div>
    </div>
  )
}