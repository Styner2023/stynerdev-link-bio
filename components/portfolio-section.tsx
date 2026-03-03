export function PortfolioSection() {
  const projects = [
    { tags: ["BLOCKCHAIN", "ICP"], title: "Decentralized Infrastructure Projects" },
    { tags: ["AI SYSTEMS", "OSINT"], title: "Intelligence & Verification Platforms" },
    { tags: ["LEGACY TECH", "ARCHIVES"], title: "Historical Preservation Systems" },
    { tags: ["DIASPORA", "MARKETPLACE"], title: "Global Community Platforms" }
  ]

  return (
    <section className="w-full mt-12">
      <h2 className="font-retro text-4xl text-black mb-8">My Work</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="bg-white border-4 border-black rounded-3xl p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all">
            <div className="flex gap-2 mb-3">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-bold text-black">{tag}</span>
              ))}
            </div>
            <h6 className="font-sans text-lg font-bold text-black">{project.title}</h6>
          </div>
        ))}
      </div>
    </section>
  )
}
