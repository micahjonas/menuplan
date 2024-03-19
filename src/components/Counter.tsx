"use client";
import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <button class="bg-red-600" onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </button>
  );
}
