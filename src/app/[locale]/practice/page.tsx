import { useTranslations } from "next-intl";
import { practiceService } from "@/lib/services";
import type { PracticeSession } from "@/types";

// Server component
// TODO(UI): Replace with <PracticeSessionList /> and <PracticeSessionCard />
export default async function PracticePage() {
  const t = useTranslations("practice");

  let sessions: PracticeSession[] = [];
  let error = false;

  try {
    sessions = await practiceService.list();
  } catch {
    error = true;
  }

  const now = new Date();
  const upcoming = sessions.filter((s) => new Date(s.date) >= now);
  const past = sessions.filter((s) => new Date(s.date) < now);

  return (
    <div>
      {/* TODO(UI): PageHeader — props: heading, description */}
      <h1>{t("heading")}</h1>
      <p>{t("description")}</p>

      {error && <p role="alert">Failed to load sessions. Please refresh.</p>}

      {!error && sessions.length === 0 && <p>{t("empty")}</p>}

      {/* TODO(UI): PracticeSessionList upcoming — props: sessions, label */}
      {!error && upcoming.length > 0 && (
        <section>
          <h2>{t("upcoming")}</h2>
          <SessionList sessions={upcoming} t={t} />
        </section>
      )}

      {/* TODO(UI): PracticeSessionList past — props: sessions, label */}
      {!error && past.length > 0 && (
        <section>
          <h2>{t("past")}</h2>
          <SessionList sessions={past} t={t} />
        </section>
      )}
    </div>
  );
}

// Inline sub-component — will be replaced by the UI agent
function SessionList({
  sessions,
  t,
}: {
  sessions: PracticeSession[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
}) {
  return (
    <ul>
      {sessions.map((s) => (
        <li key={s.id}>
          {/* TODO(UI): PracticeSessionCard — props: session */}
          <h3>{s.title}</h3>
          <time dateTime={s.date}>{s.date}</time>
          <p>{s.description}</p>
          {s.registrationUrl && (
            <a href={s.registrationUrl} target="_blank" rel="noopener noreferrer">
              {t("register")}
            </a>
          )}
          {s.materials.length > 0 && (
            <ul aria-label={t("materialsLabel")}>
              {s.materials.map((m) => (
                <li key={m.url}>
                  <a href={m.url}>{m.label}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
