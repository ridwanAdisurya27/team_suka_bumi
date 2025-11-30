const breakpoints = { sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 };
function getCurrentBreakpoint() {
  const t = window.innerWidth;
  return t >= breakpoints["2xl"]
    ? "2xl"
    : t >= breakpoints.xl
    ? "xl"
    : t >= breakpoints.lg
    ? "lg"
    : t >= breakpoints.md
    ? "md"
    : t >= breakpoints.sm
    ? "sm"
    : "default";
}
function showFloatingBox() {
  const t = document.createElement("div");
  (t.id = "tailwind-breakpoint-box"),
    (t.style.position = "fixed"),
    (t.style.bottom = "1rem"),
    (t.style.left = "1rem"),
    (t.style.zIndex = "99"),
    (t.style.background = "#1f2937"),
    (t.style.color = "#fff"),
    (t.style.padding = "0.5rem 1rem"),
    (t.style.borderRadius = "0.5rem"),
    (t.style.fontFamily = "sans-serif"),
    (t.style.fontSize = "0.875rem"),
    (t.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)"),
    (t.style.pointerEvents = "none"),
    (t.textContent = "Loading breakpoint..."),
    document.body.appendChild(t),
    updateBreakpointBox();
}
function updateBreakpointBox() {
  const t = document.getElementById("tailwind-breakpoint-box");
  if (t) {
    const e = getCurrentBreakpoint();
    t.textContent = `Current breakpoint: ${e}`;
  }
}
showFloatingBox(), window.addEventListener("resize", updateBreakpointBox);
