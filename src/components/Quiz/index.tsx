import React, { useMemo, useState } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from "./styles.module.css";

type Question = {
  q: string;
  code?: string;
  options: string[];
  answer: number | number[];
  explain?: string;
  href?: string;
};

function sameSet(a: number[], b: number[]) {
  if (a.length !== b.length) return false;
  const s = new Set(a);
  return b.every((x) => s.has(x));
}

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function mixOptions(q: Question): Question {
  const order = shuffled(q.options.map((_, i) => i));
  const remap = (Array.isArray(q.answer) ? q.answer : [q.answer]).map((a) =>
    order.indexOf(a),
  );
  return {
    ...q,
    options: order.map((i) => q.options[i]),
    answer: Array.isArray(q.answer) ? remap : remap[0],
  };
}

function Quiz({
  questions,
  shuffle = false,
  limit,
}: {
  questions: Question[];
  shuffle?: boolean;
  limit?: number;
}) {
  const items = useMemo(() => {
    if (!shuffle) return questions;
    return shuffled(questions).slice(0, limit).map(mixOptions);
  }, [questions, shuffle, limit]);
  const [sel, setSel] = useState<Record<number, number[]>>({});
  const [checked, setChecked] = useState(false);

  const isMulti = (q: Question) => Array.isArray(q.answer);
  const correctSet = (q: Question) =>
    Array.isArray(q.answer) ? q.answer : [q.answer];

  const isCorrect = (i: number, q: Question) =>
    sameSet(sel[i] ?? [], correctSet(q));

  const score = items.reduce((n, q, i) => n + (isCorrect(i, q) ? 1 : 0), 0);
  const allAnswered = items.every((_, i) => (sel[i] ?? []).length > 0);

  const toggle = (i: number, j: number, multi: boolean) =>
    setSel((s) => {
      const cur = s[i] ?? [];
      if (multi) {
        return {
          ...s,
          [i]: cur.includes(j) ? cur.filter((x) => x !== j) : [...cur, j],
        };
      }
      return { ...s, [i]: [j] };
    });

  return (
    <div className={styles.quiz}>
      {items.map((q, i) => {
        const multi = isMulti(q);
        const correct = correctSet(q);
        return (
          <div key={i} className={styles.question}>
            <p className={styles.prompt}>
              {i + 1}. {q.q}
              {multi && <span className={styles.multi}> (varias correctas)</span>}
            </p>
            {q.code && (
              <pre className={styles.code}>
                <code>{q.code}</code>
              </pre>
            )}
            {q.options.map((opt, j) => {
              const picked = (sel[i] ?? []).includes(j);
              let cls = styles.option;
              if (checked) {
                if (correct.includes(j)) cls += " " + styles.correct;
                else if (picked) cls += " " + styles.wrong;
              } else if (picked) {
                cls += " " + styles.selected;
              }
              return (
                <label key={j} className={cls}>
                  <input
                    type={multi ? "checkbox" : "radio"}
                    name={`q${i}`}
                    checked={picked}
                    disabled={checked}
                    onChange={() => toggle(i, j, multi)}
                  />
                  <span>{opt}</span>
                </label>
              );
            })}
            {checked && (
              <div className={styles.feedback}>
                <span
                  className={isCorrect(i, q) ? styles.ok : styles.ko}
                >
                  {isCorrect(i, q) ? "✓ Correcto" : "✗ Incorrecto"}
                </span>
                {q.explain && <p className={styles.explain}>{q.explain}</p>}
                {q.href && (
                  <a className={styles.topic} href={q.href}>
                    ↗ Repasar el tema
                  </a>
                )}
              </div>
            )}
          </div>
        );
      })}

      {!checked ? (
        <button
          className={styles.btn}
          disabled={!allAnswered}
          onClick={() => setChecked(true)}
        >
          Validar
        </button>
      ) : (
        <div className={styles.result}>
          <strong>
            Aciertos: {score}/{items.length}
          </strong>
          <button
            className={styles.btn}
            onClick={() => {
              setChecked(false);
              setSel({});
            }}
          >
            Reintentar
          </button>
        </div>
      )}
    </div>
  );
}

export default function QuizBrowserOnly(props: React.ComponentProps<typeof Quiz>) {
  return <BrowserOnly>{() => <Quiz {...props} />}</BrowserOnly>;
}
