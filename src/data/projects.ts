export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "EchoStream",
    description: "Real-time data pipeline visualizing network traffic latency across global nodes.",
    tags: ["Go", "React", "WebSockets"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "TermFolio",
    description: "A customizable terminal-based portfolio generator for developers who prefer the CLI.",
    tags: ["Rust", "CLI"],
    repoUrl: "#",
  },
];
