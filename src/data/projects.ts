export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

// Add projects here as they ship — the section renders an empty state until then.
export const projects: Project[] = [];
