import { useState } from "react";
import { Button, Card } from "@repo/ui";
import { APP_NAME, APP_VERSION } from "@repo/config";
import { classNames, formatDate, pluralize } from "@repo/utils";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <main className={classNames("app", count > 0 && "has-clicks")}>
      <h1>{APP_NAME}</h1>
      <p className="meta">
        v{APP_VERSION} — built {formatDate(new Date())}
      </p>

      <Card>
        <p>
          {count} {pluralize(count, "click")}
        </p>
        <Button onClick={() => setCount((n) => n + 1)}>Click me</Button>
      </Card>
    </main>
  );
}
