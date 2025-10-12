export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="border-t bg-background py-6 text-sm text-muted-foreground">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {currentYear} Tylor Le. All rights reserved.</p>
        <div className="flex gap-3">
          <a href="https://www.linkedin.com/in/tib-designer/" className="hover:text-foreground">LinkedIn</a>
          <a href="https://tibsigner.com/" className="hover:text-foreground">Portfolio</a>
          <a href="https://github.com/Tibberle2911" className="hover:text-foreground">GitHub Profile</a>
        </div>
      </div>
    </footer>
  )
}

