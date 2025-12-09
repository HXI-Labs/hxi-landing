import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export function getSortedPostsData(): BlogPost[] {
  // Create directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".mdx" from file name to get id
      const slug = fileName.replace(/\.mdx?$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title || 'No Title',
        date: matterResult.data.date || new Date().toISOString(),
        description: matterResult.data.description || '',
        ...matterResult.data,
        content: matterResult.content,
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    // Try finding the file with .mdx extension
    let fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    // If .mdx doesn't exist, try .md
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(postsDirectory, `${slug}.md`);
      if (!fs.existsSync(fullPath)) {
        return null;
      }
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title || 'No Title',
      date: matterResult.data.date || new Date().toISOString(),
      description: matterResult.data.description || '',
      ...matterResult.data,
      content: matterResult.content,
    };
  } catch (e) {
    console.error(`Error reading markdown file for slug ${slug}:`, e);
    return null;
  }
}
