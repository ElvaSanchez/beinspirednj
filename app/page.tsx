import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main id="home" className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          njbeinspired
        </h1>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p id="welcome" className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
           Mi nuevo website
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert h-[14px] w-4"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
      <footer className="w-full border-t border-zinc-300 bg-zinc-100 px-6 py-8 dark:border-zinc-700 dark:bg-zinc-900">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm font-semibold tracking-wide text-zinc-600 dark:text-zinc-300">
            njbeinspired
          </p>
          <nav aria-label="Footer navigation" className="grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto">
            {[
              { label: "Home", href: "#home" },
              { label: "Welcome", href: "#welcome" },
              { label: "Deploy", href: "https://vercel.com/new" },
              { label: "Documentation", href: "https://nextjs.org/docs" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-zinc-200 px-4 py-3 text-sm font-medium text-zinc-800 shadow-sm transition-colors hover:bg-zinc-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
