import { skillCategories } from "@/data/skills";

export function Stack() {
  return (
    <section>
      <h2 className="font-rubik text-headline-lg-mobile md:text-headline-lg text-on-surface mb-8 font-semibold tracking-tight">
        Stack
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="font-inter text-label-caps text-on-surface-variant uppercase mb-4 tracking-wider">
              {category.title}
            </h3>
            <ul className="font-inter text-body-sm text-on-surface flex flex-col gap-2">
              {category.skills.map((skill) => (
                <li key={skill} className="transition-colors hover:text-white">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
