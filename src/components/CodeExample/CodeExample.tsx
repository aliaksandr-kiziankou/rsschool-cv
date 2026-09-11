import './CodeExample.css';

export function CodeExample() {
  return (
    <section id="code" className="code-example">
      <div className="code-example__inner">
        <div className="code-example__heading">
          <p className="section-label">Code</p>

          <h2 className="code-example__title">
            Code
            <br />
            example.
          </h2>
        </div>

        <pre className="code-example__block">
          <code>{`function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  clock.textContent = \`\${hours}:\${minutes}:\${seconds}\`;
}

setInterval(updateClock, 1000);
updateClock();`}</code>
        </pre>
      </div>
    </section>
  );
}