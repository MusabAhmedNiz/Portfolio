import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects">
      <h2 className="font-rubik text-headline-lg-mobile md:text-headline-lg text-on-surface mb-8 font-semibold tracking-tight">
        Selected Projects
      </h2>
      {projects.length === 0 ? (
        <p className="font-inter text-body-md text-on-surface-variant">
          Nothing published here yet — a few things are in the works and will
          land on this page soon.
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <div key={project.title} className="flex flex-col gap-6">
              <div className="group flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <a
                    href={project.liveUrl || project.repoUrl || "#"}
                    className="font-inter text-body-md font-semibold text-on-surface group-hover:text-primary transition-colors duration-200"
                  >
                    {project.title}
                  </a>
                  <div className="flex items-center gap-4 font-inter text-body-sm text-on-surface-variant mt-2 sm:mt-0">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center gap-1 hover:text-primary transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Live</span>
                        <span className="text-xs leading-none">↗</span>
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        className="inline-flex items-center gap-1 hover:text-primary transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Repo</span>
                        <span className="text-xs leading-none">↗</span>
                      </a>
                    )}
                  </div>
                </div>
                <p className="font-inter text-body-sm text-on-surface-variant">
                  {project.description}
                </p>
                <div className="flex gap-2 mt-1 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-inter text-body-sm text-on-surface-variant border border-[#1e1e2e] px-2 py-0.5 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {index < projects.length - 1 && <hr className="border-[#1e1e2e]" />}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
