import { useTranslations } from "next-intl";
import { organizers, developers } from "@/content/team";

// TODO(UI): Replace with <OrganizersSection /> and <OrganizerCard />
export default function OrganizersPage() {
  const t = useTranslations("organizers");

  return (
    <div>
      {/* TODO(UI): PageHeader — props: heading */}
      <h1>{t("heading")}</h1>

      {/* TODO(UI): OrgBanner — props: smo, devclub */}
      <section>
        <h2>{t("smo.name")}</h2>
        <p>{t("smo.description")}</p>
      </section>
      <section>
        <h2>{t("devclub.name")}</h2>
        <p>{t("devclub.description")}</p>
      </section>

      {/* TODO(UI): OrganizerGrid — props: team */}
      <section>
        <h2>{t("team")}</h2>
        <ul>
          {organizers.map((o) => (
            <li key={o.name}>
              {/* TODO(UI): OrganizerCard — props: name, role, imageUrl? */}
              <strong>{o.name}</strong> — {o.role}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
