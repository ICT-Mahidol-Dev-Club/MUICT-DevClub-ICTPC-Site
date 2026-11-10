import { useTranslations } from "next-intl";

// TODO(UI): Replace with <RulesPageContent /> using <RulesSection /> per section
export default function RulesPage() {
  const t = useTranslations("rules");
  // sections is an array of { title, items[] }
  const sections = t.raw("sections") as Array<{ title: string; items: string[] }>;

  return (
    <div>
      {/* TODO(UI): PageHeader — props: heading */}
      <h1>{t("heading")}</h1>

      {/* TODO(UI): RulesSectionList — props: sections */}
      {sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          <ul>
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

