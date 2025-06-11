export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Services", "Updates"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Contact"],
    },
    {
      title: "Resources",
      links: ["Documentation", "Help Center", "API", "Status"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security", "Cookies"],
    },
  ]

  return (
    <footer className="border-t border-white/5 py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo and description */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">M</span>
              </div>
              <span className="font-medium">Mr. Pa</span>
            </div>
            <p className="text-zinc-400 text-sm max-w-xs">
              The AI agent that transforms your creative vision into reality with unprecedented speed and quality.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-medium mb-4 text-sm">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-zinc-500 text-sm mb-4 md:mb-0">© {currentYear} Mr. Pa. All rights reserved.</div>

          <div className="flex space-x-6">
            {["Twitter", "GitHub", "LinkedIn", "Instagram"].map((social) => (
              <a key={social} href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
