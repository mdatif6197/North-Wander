const { createElement: h, useEffect, useState } = React;

const photos = [
  ["Gemini_Generated_Image_9sv9qy9sv9qy9sv9.png", "High country"],
  ["Gemini_Generated_Image_m34629m34629m346.png", "Green valley"],
  ["WhatsApp Image 2026-09-24 at 00.21.43 (1).jpeg", "The long trail"],
  ["WhatsApp Image 2026-09-24 at 00.21.43.jpeg", "Still water"],
  ["WhatsApp Image 2026-03-29 at 12.37.13.jpeg", "First light"],
  ["WhatsApp Image 2026-03-29 at 12.46.00.jpeg", "The way there"],
  ["WhatsApp Image 2026-03-29 at 12.57.13 (1).jpeg", "Roadside pause"],
  ["WhatsApp Image 2026-04-14 at 11.53.05.jpeg", "Cloud country"],
  ["WhatsApp Image 2026-05-26 at 21.21.00.jpeg", "Last light"],
  ["WhatsApp Image 2026-09-23 at 23.35.27.jpeg", "A new view"],
  ["WhatsApp Image 2026-09-23 at 23.35.58.jpeg", "Shared steps"],
  ["WhatsApp Image 2026-09-23 at 23.36.15.jpeg", "Wild morning"],
  ["WhatsApp Image 2026-09-23 at 23.36.39.jpeg", "Trail companions"],
  ["WhatsApp Image 2026-09-23 at 23.36.57.jpeg", "Beyond the bend"],
  ["WhatsApp Image 2026-09-23 at 23.37.59.jpeg", "Quiet altitude"],
  ["WhatsApp Image 2026-09-23 at 23.38.35.jpeg", "The campfire"],
  ["WhatsApp Image 2026-09-23 at 23.46.12.jpeg", "Night route"],
  ["WhatsApp Image 2026-09-23 at 23.50.42.jpeg", "Next horizon"]
];

const stories = [
  ["Go where", "the air is thin.", "A slow collection of mountain roads, early trailheads, and the kind of silence you carry home with you.", "Every journey begins with a brave yes.", "Travel note"],
  ["Mountains", "remember everything.", "There is a particular honesty to a mountain. Follow the river into the meadow and let the horizon reset your sense of scale.", "The journey is the destination.", "Travel note"],
  ["Take the long", "way up.", "Hiking is less about arriving than noticing the change in light, a boot print in the mud, and the first breath that feels like an accomplishment.", "Not all those who wander are lost.", "Trekking note"],
  ["Pause where", "the world reflects.", "After the climb, find water. A quiet lake gives the day back in fragments: a bright ridge, a passing cloud, and your own breathing.", "Once a year, go someplace you have never been before.", "Exploring note"],
  ["Wake before", "the world.", "The earliest miles belong to the road. Pack lightly, step outside, and watch the first light turn an ordinary path into a beginning.", "A journey is best measured in friends, rather than miles.", "Friendship note"],
  ["Every road", "has a story.", "The best parts of a journey often happen between destinations. Take the bend, stop for the view, and let an unplanned turn become the memory.", "Life is short and the world is wide.", "Travel note"],
  ["Find the", "roadside pause.", "A small stop can hold a whole afternoon: warm tea, an unfamiliar greeting, and a map opened without a plan.", "A good friend listens to your adventures. A best friend makes them with you.", "Friendship note"],
  ["Walk into", "cloud country.", "When the trail climbs through mist, the familiar disappears. That is the gift: for a while, curiosity leads instead of certainty.", "The biggest adventure you can take is to live the life of your dreams.", "Exploring note"],
  ["Stay for", "the last light.", "Golden hour makes a quiet promise that the day was worth the distance. Sit with it before the road calls you onward.", "The sunset is proof that endings can be beautiful too.", "Travel note"],
  ["Say yes to", "a new view.", "Exploration begins when the expected route ends. Let the landscape choose the pace and give your attention to what you did not plan for.", "Life begins at the end of your comfort zone.", "Exploring note"],
  ["Share the", "same horizon.", "The best travel stories are rarely solo. They are stitched together from shared snacks, wrong turns, and laughter after a long climb.", "Friends that travel together, stay together.", "Friendship note"],
  ["Choose the", "wild morning.", "A trailhead before sunrise feels like a secret. The cold air wakes the senses, and every color arrives one shade at a time.", "And into the forest I go, to lose my mind and find my soul.", "Exploring note"],
  ["Walk with", "good company.", "A steady companion makes a steep trail feel lighter. Trade stories, trade silence, and arrive with a memory that belongs to both of you.", "The journey is sweeter when shared.", "Friendship note"],
  ["Beyond the", "next bend.", "There is always another view hidden just ahead. Keep a little wonder in reserve and let the trail surprise you.", "Not every path is meant to be understood, just walked.", "Trekking note"],
  ["Find quiet", "altitude.", "Up high, distractions become small. The body works honestly, the mind clears, and the simplest things feel like discoveries.", "Travel far enough, you meet yourself.", "Exploring note"],
  ["Tell stories", "by firelight.", "At camp, the day becomes a collection of details: dusty boots, full cups, and the familiar comfort of people gathered close.", "Good friends are like stars; you do not always see them, but you know they are there.", "Friendship note"],
  ["Follow the", "night route.", "Some journeys ask for a different kind of attention. Trust the small lights, the steady direction, and the calm that comes after dark.", "We wander for distraction, but we travel for fulfillment.", "Travel note"],
  ["Meet me at", "the horizon.", "Travel teaches us to carry less and notice more. When the trail ends, the feeling waits in the next map and the next brave yes.", "Oh, the places you will go.", "Exploring note"]
];

const ids = stories.map((_, index) => `chapter-${String(index + 1).padStart(2, "0")}`);

function Header({ active }) {
  return h("header", { className: "site-header" },
    h("a", { className: "brand", href: "#chapter-01", "aria-label": "Wander North home" }, h("span", { className: "brand-mark" }, "W/N"), h("span", null, "Wander North")),
    h("nav", { className: "site-nav", "aria-label": "Chapter navigation" }, ids.map((id, index) => h("a", { className: `nav-link${active === index ? " active" : ""}`, href: `#${id}`, key: id }, h("span", null, String(index + 1).padStart(2, "0")), index === 0 ? " Start" : ` ${photos[index][1]}`))),
    h("span", { className: "edition" }, "18 field notes / 2026")
  );
}

function Chapter({ index, active }) {
  const [first, second, paragraph, quote, category] = stories[index];
  const [image, label] = photos[index];
  const nextId = ids[index + 1];
  const portraitCrop = [3, 8, 10, 14, 17].includes(index);
  return h("section", { className: `chapter${index === 0 ? " chapter-home" : ""} ${active === index ? "is-active" : active > index ? "is-past" : "is-future"}`, id: ids[index], "data-index": index },
    h("div", { className: `chapter-image${portraitCrop ? " portrait-crop" : ""}`, role: "img", "aria-label": label, style: { backgroundImage: `url("${image}")`, backgroundPosition: portraitCrop ? "center 38%" : "center center" } }),
    h("div", { className: "chapter-overlay" }),
    h("div", { className: `chapter-content ${index === 0 ? "home-content" : "split-content"}` },
      h("p", { className: "eyebrow" }, `${String(index + 1).padStart(2, "0")} / ${category}`),
      index === 0 ? h("h1", null, first, h("br"), h("em", null, second)) : h("h2", null, first, h("br"), h("em", null, second)),
      h("p", { className: index === 0 ? "intro" : "body-copy" }, paragraph),
      h("blockquote", null, `“${quote}”`, h("cite", null, index % 3 === 0 ? "— Mohammad Atif" : index % 3 === 1 ? "— Field notes" : "— A fellow wanderer")),
      index === 0 ? h("a", { className: "scroll-cue", href: `#${nextId}` }, h("span", { className: "scroll-line" }), " Scroll to explore") : nextId ? h("a", { className: "text-link", href: `#${nextId}` }, "Continue the journey ", h("span", null, "↗")) : h("p", { className: "closing-line" }, "Until the next horizon.")
    ),
    index === 0 ? h("div", { className: "issue-note" }, "Field notes", h("br"), h("strong", null, "From the high country")) : null,
    index === stories.length - 1 ? h("footer", { className: "chapter-footer" }, h("span", null, "Wander North Journal"), h("span", null, "End of volume one")) : null
  );
}

function App() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (!window.THREE) return undefined;
    const canvas = document.querySelector(".scene-canvas");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 120;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(240 * 3);
    for (let index = 0; index < positions.length; index += 3) {
      positions[index] = (Math.random() - 0.5) * 180;
      positions[index + 1] = (Math.random() - 0.5) * 100;
      positions[index + 2] = (Math.random() - 0.5) * 80;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0xd7aa6e, size: 0.32, transparent: true, opacity: 0.6 });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    const resize = () => { renderer.setSize(window.innerWidth, window.innerHeight, false); camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); };
    let frame;
    const animate = (time) => { particles.rotation.y = time * 0.000015; particles.rotation.x = Math.sin(time * 0.00008) * 0.04; renderer.render(scene, camera); frame = requestAnimationFrame(animate); };
    resize();
    window.addEventListener("resize", resize, { passive: true });
    frame = requestAnimationFrame(animate);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); geometry.dispose(); material.dispose(); renderer.dispose(); };
  }, []);
  useEffect(() => {
    const sections = [...document.querySelectorAll(".chapter")];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(Number(entry.target.dataset.index))), { threshold: 0.55 });
    sections.forEach((section) => observer.observe(section));
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        if (!reduceMotion) sections.forEach((section) => {
          const distance = section.getBoundingClientRect().top;
          section.style.setProperty("--parallax-y", `${Math.max(-26, Math.min(26, distance * -0.04)).toFixed(1)}px`);
          section.style.setProperty("--parallax-tilt", `${Math.max(-0.7, Math.min(0.7, distance * 0.001)).toFixed(2)}deg`);
        });
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);
  return h(React.Fragment, null,
    h("canvas", { className: "scene-canvas", "aria-hidden": "true" }),
    h(Header, { active }),
    h("main", null, stories.map((_, index) => h(Chapter, { index, active, key: ids[index] }))),
    h("a", { className: "watermark", href: "#chapter-01", "aria-label": "Return to the Wander North beginning" }, "MOHAMMAD ATIF"),
    h("div", { className: "contact-watermark" },
      h("a", { href: "tel:+919792742307", "aria-label": "Call Mohammad Atif" }, "+91-9792742307"),
      h("span", { className: "contact-divider", "aria-hidden": "true" }, "/"),
      h("a", { href: "mailto:mdat if6197@gmail.com".replace(" ", ""), "aria-label": "Email Mohammad Atif" }, "mdat if6197@gmail.com".replace(" ", "")),
      h("span", { className: "contact-divider", "aria-hidden": "true" }, "/"),
      h("a", { className: "instagram-watermark", href: "https://www.instagram.com/mdatif6197/", target: "_blank", rel: "noreferrer", "aria-label": "Open the Instagram profile for mdatif6197" }, "@mdatif6197")
    ),
    h("div", { className: "progress", "aria-hidden": "true" }, h("span", { style: { width: `${(active + 1) / stories.length * 100}%` } }))
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
