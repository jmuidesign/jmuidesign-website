<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";

useHead({
  htmlAttrs: {
    class: "scroll-smooth",
    lang: "fr",
  },
  title: "Julien Merlin - Développeur Shopify Freelance",
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
  meta: [
    {
      name: "description",
      content:
        "J'aide les agences à créer des produits web élégants en faisant le lien entre les équipes tech et design.",
    },
    {
      property: "og:title",
      content: "Julien Merlin - Développeur Shopify Freelance",
    },
    {
      property: "og:description",
      content:
        "J'aide les agences à créer des produits web élégants en faisant le lien entre les équipes tech et design.",
    },
    {
      property: "og:image",
      content: "https://jmuidesign.com/img/og.png",
    },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://jmuidesign.com" },
  ],
});

const calendlyLink = "https://calendly.com/jmuidesign/discovery-call";

const testimonials = [
  {
    text: "Ce qui m'a particulièrement marqué chez Julien, c'est son sens du détail et son exigence. Il a toujours proposé des solutions innovantes et pertinentes, notamment en design et UX.",
    img: "/img/julien-lc.png",
    name: "Julien Habibi",
    role: "Engineering Manager • Le Collectionist",
  },
  {
    text: "J'ai eu l'occasion de travailler avec Julien sur plusieurs projets d'intégration front. Julien a un vrai œil graphique et intègre les maquettes avec une grande fidélité. Il échange, partage ses idées et pousse toujours les projets vers le meilleur résultat possible.",
    img: "/img/mathilde-lc.png",
    name: "Mathilde Bories",
    role: "Product Designer • Le Collectionist",
  },
  {
    text: "Nous avions un besoin JavaScript pour une fonctionnalité sur notre site Webflow et nous n'avions trouvé aucune solution avant de faire appel à Julien. Il a rapidement identifié notre problème et l'a résolu en quelques heures !",
    img: "/img/samuel-octolio.png",
    name: "Samuel Duc",
    role: "Co-fondateur • Octolio",
  },
  {
    text: "J'ai contacté Julien pour un problème JavaScript et j'ai été très satisfait de son travail. Julien a été proactif dans ses propositions et a travaillé rapidement et efficacement. Je ferai de nouveau appel à son expertise.",
    img: "/img/jonathan.png",
    name: "Jonathan Faux",
    role: "CEO • BMF Graphisme",
  },
  {
    text: "Après une mauvaise expérience avec plusieurs agences web, nous avons fait connaissance avec Julien. Il a parfaitement répondu à nos enjeux de visibilité en ligne et de ventes. Réactif et polyvalent, je le recommande vivement.",
    img: "/img/samuel-idaccro.png",
    name: "Samuel Simon",
    role: "CEO • ID Accro",
  },
];

const projects = [
  {
    img: "/img/lc.png",
    title: "Le Collectionist",
    subtitle: "Location de villas de luxe",
    tags: [
      "Scale-up",
      "Temps Plein",
      "2 Ans",
      "Remote",
      "Agile",
      "Vue",
      "Nuxt 3",
      "TypeScript",
      "Tests Unitaires",
      "Tailwind",
      "Design System",
    ],
  },
  {
    img: "/img/orderwizz.png",
    title: "Orderwizz",
    subtitle: "Marketplace B2B mode enfant",
    tags: [
      "Startup",
      "Freelance",
      "Temps Partiel",
      "1 An",
      "Remote",
      "Agile",
      "Vue",
      "Sass",
      "Design System",
      "UX/UI",
    ],
  },
  {
    img: "/img/16pads.png",
    title: "16pads",
    subtitle: "Collection de packs de sons",
    tags: ["Side Project", "Vue", "GSAP", "UX/UI"],
  },
  {
    img: "/img/la-cartesienne.png",
    title: "La Cartésienne",
    subtitle: "Soutien scolaire tous niveaux",
    tags: ["Startup", "Freelance", "UX/UI", "Webflow"],
  },
  {
    img: "/img/olotropp.png",
    title: "Olotropp",
    subtitle: "Agence créative",
    tags: ["Agence", "Freelance", "UX/UI", "Webflow"],
  },
];
</script>

<template>
  <Analytics />
  <div class="font-sans text-dark mx-auto max-w-container px-4">
    <header class="flex min-h-screen flex-col lg:justify-between lg:pb-10">
      <nav class="flex items-center justify-between py-5">
        <h1 class="font-serif font-semibold uppercase leading-none md:text-xl">
          jmuidesign
        </h1>
        <div class="flex items-center gap-4">
          <NuxtImg
            alt="Julien Merlin"
            class="hidden rounded-full md:block"
            height="60"
            src="/img/me-small.png"
            width="60"
          />
          <a
            :href="calendlyLink"
            class="flex cursor-pointer items-center gap-2 rounded-full border border-dark px-6 py-3 text-sm font-medium leading-none transition duration-300 hover:bg-dark hover:text-white"
            target="_blank"
          >
            Réserver un discovery call
            <span
              class="inline-block h-1 w-1 animate-pulse rounded-full bg-green-500"
            />
          </a>
        </div>
      </nav>
      <div
        class="absolute top-1/2 -translate-y-1/2 w-[calc(100%-2rem)] lg:relative lg:translate-y-0 lg:translate-x-0 lg:w-full"
      >
        <h2 class="mb-10">Développeur Shopify Freelance</h2>
        <p
          class="font-light leading-[1.3] text-[2.5rem] md:max-w-[83%] md:text-[3rem] lg:text-[3.5rem]"
        >
          Hey
          <NuxtImg
            class="inline-block"
            format="avif"
            height="60"
            src="/img/emoji.png"
            width="60"
            alt="emoji"
          />
          j'accompagne les agences et marques pour créer un site e-commerce
          <span class="font-serif font-medium [word-spacing:0.15em]">
            élégant et performant
          </span>
        </p>
      </div>
      <a
        class="hidden cursor-pointer text-dark text-sm font-medium leading-none lg:flex h-[180px] w-[180px] items-center justify-center self-end rounded-full border border-dark transition duration-300 hover:bg-dark hover:text-white"
        href="#testimonials"
      >
        Scroll
      </a>
    </header>
    <section
      class="flex flex-col overflow-hidden md:flex-row md:w-full md:gap-6 md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      id="testimonials"
    >
      <div
        v-for="i in 2"
        :key="i"
        :class="[
          'flex flex-col gap-6 py-20 md:flex-row md:py-[7.5rem] md:animate-infinite-scroll',
          { 'hidden md:flex': i === 2 },
        ]"
      >
        <div
          v-for="(testimonial, i) in testimonials"
          :key="i"
          class="rounded-[1.5rem] border border-dark px-6 py-10 flex-shrink-0 flex flex-col justify-between md:w-[400px]"
        >
          <p class="mb-6">
            {{ testimonial.text }}
          </p>
          <div>
            <NuxtImg
              :alt="testimonial.name"
              class="mb-4 rounded-full"
              format="avif"
              height="60"
              loading="lazy"
              :src="testimonial.img"
              width="60"
            />
            <div>
              <div class="mb-2 text-sm font-medium leading-none">
                {{ testimonial.name }}
              </div>
              <div class="text-sm font-medium leading-none">
                {{ testimonial.role }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      v-for="(project, i) in projects"
      :key="i"
      class="w-full bg-white py-20 lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:py-0"
    >
      <div
        class="lg:flex-1 md:flex gap-6 justify-between"
        :class="{ 'md:flex-row-reverse': i % 2 !== 0 }"
      >
        <NuxtImg
          :alt="project.title"
          class="mb-10 w-full rounded-[1.25rem] md:mb-0 md:w-1/2"
          format="avif"
          height="1932"
          loading="lazy"
          quality="100"
          sizes="sm:100vw md:50vw"
          :src="project.img"
          width="1932"
        />

        <div class="pt-0 md:w-1/2 md:pt-10 lg:w-5/12 lg:pt-20">
          <h2 class="mb-4 font-serif capitalize leading-none text-[2.5rem]">
            {{ project.title }}
          </h2>
          <h3 class="mb-10 leading-none">{{ project.subtitle }}</h3>
          <div class="flex flex-wrap items-center gap-2">
            <div
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full border border-dark px-4 py-2 text-sm font-medium capitalize leading-none"
            >
              {{ tag }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="w-full bg-white py-20 lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:justify-center lg:py-0"
    >
      <div class="flex w-full flex-col items-center gap-10">
        <div class="flex flex-col items-center gap-6 md:w-8/12">
          <NuxtImg
            class="rounded-full"
            format="avif"
            height="120"
            src="/img/me-big.png"
            width="120"
            alt="Julien Merlin"
            loading="lazy"
          />
          <p
            class="text-center font-light leading-[1.3] text-[2.5rem] md:text-[3rem] lg:text-[3.5rem]"
          >
            Créons un site e-commerce
            <span class="font-serif font-medium [word-spacing:0.15em]">
              élégant et performant
            </span>
          </p>
        </div>
        <a
          :href="calendlyLink"
          class="flex cursor-pointer items-center gap-2 rounded-full border border-dark px-9 py-[18px] text-[20px] font-medium leading-none transition duration-300 hover:bg-dark hover:text-white"
          target="_blank"
        >
          Réserver un discovery call
          <span
            class="inline-block h-[6px] w-[6px] animate-pulse rounded-full bg-green-500"
          />
        </a>
      </div>
    </section>
  </div>
</template>

<style>
@font-face {
  font-family: "DM Sans";
  src: url("@/assets/fonts/DMSans-Light.woff2") format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "DM Sans";
  src: url("@/assets/fonts/DMSans-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "DM Sans";
  src: url("@/assets/fonts/DMSans-Medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Clash Display";
  src: url("@/assets/fonts/ClashDisplay-Medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Clash Display";
  src: url("@/assets/fonts/ClashDisplay-Semibold.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
</style>
