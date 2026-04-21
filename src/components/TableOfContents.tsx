import { extractHeadingsFromContent } from "@/utils/postLoader";

interface TableOfContentsProps {
  content: string;
}

const TableOfContents = ({ content }: TableOfContentsProps) => {
  const headings = extractHeadings(content);

  if (headings.length === 0) return null;

  return (
    <nav className="rounded-lg border border-border bg-secondary/50 p-5 mb-8">
      <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">
        Table of Contents
      </h2>
      <ul className="space-y-1.5">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={heading.level === 3 ? "ml-4" : ""}
          >
            <a
              href={`#${heading.id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
