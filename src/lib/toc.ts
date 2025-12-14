// src/lib/toc.ts

export type Heading = {
  depth: number; // 1 = h1, 2 = h2, 3 = h3...
  slug: string;
  text: string;
};

export type TocItem = Heading & {
  children: TocItem[];
};

/**
 * Normalize heading depth to avoid jumps like h1 -> h3
 * Optional but recommended for clean TOC tree
 */
export function normalizeHeadings(headings: Heading[]): Heading[] {
  let lastDepth = 1;

  return headings.map((h) => {
    const depth = Math.min(h.depth, lastDepth + 1);
    lastDepth = depth;
    return { ...h, depth };
  });
}

/**
 * Build nested TOC tree from flat headings array
 */
export function buildToc(headings: Heading[]): TocItem[] {
  const root: TocItem[] = [];
  const stack: TocItem[] = [];

  for (const h of headings) {
    const node: TocItem = {
      ...h,
      children: [],
    };

    while (stack.length && stack[stack.length - 1].depth >= node.depth) {
      stack.pop();
    }

    const parent = stack[stack.length - 1];

    if (!parent) {
      root.push(node);
    } else {
      parent.children.push(node);
    }

    stack.push(node);
  }

  return root;
}
