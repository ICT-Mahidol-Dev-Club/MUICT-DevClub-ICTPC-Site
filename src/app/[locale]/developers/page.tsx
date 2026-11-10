import { useTranslations } from "next-intl";
import { developers } from "@/content/team";

// TODO(UI): Replace with <DevelopersSection /> and <DeveloperCard />
export default function DevelopersPage() {
  const t = useTranslations("developers");

  return (
    <div>
      {/* TODO(UI): PageHeader — props: heading, description */}
      <h1>{t("heading")}</h1>
      <p>{t("description")}</p>

      {/* TODO(UI): DeveloperGrid — props: developers */}
      <ul>
        {developers.map((d) => (
          <li key={d.name}>
            {/* TODO(UI): DeveloperCard — props: name, role, github?, imageUrl? */}
            <strong>{d.name}</strong> — {d.role}
            {d.github && (
              <>
                {" "}
                <a href={d.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
