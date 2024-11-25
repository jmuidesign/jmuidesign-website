<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'

useHead({
  htmlAttrs: {
    class: 'scroll-smooth',
  },
  title: 'Julien Merlin - UI Designer & Vue Developer',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
  meta: [
    {
      name: 'description',
      content:
        'I help startups and agencies ship amazing Web products by bridging the gap between tech and design teams.',
    },
    {
      property: 'og:title',
      content: 'Julien Merlin - UI Designer & Vue Developer',
    },
    {
      property: 'og:description',
      content:
        'I help startups and agencies ship amazing Web products by bridging the gap between tech and design teams.',
    },
    {
      property: 'og:image',
      content: 'https://jmuidesign.com/img/og.png',
    },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://jmuidesign.com' },
  ],
})

const calendlyLink = 'https://calendly.com/jmuidesign/discovery-call'

const testimonials = [
  {
    text: "We had a JavaScript need for a feature on our Webflow site and couldn't find any solution until we came across Julien. He quickly identified our problem and solved it in just a few hours!",
    img: '/img/samuel-octolio.png',
    name: 'Samuel Duc',
    role: 'Co-founder • Octolio',
  },
  {
    text: 'I reached out to Julien for a Javascript issue and was very satisfied with his work. Julien was proactive in offering solutions and worked quickly and efficiently. I will definitely call on his expertise again.',
    img: '/img/jonathan.png',
    name: 'Jonathan Faux',
    role: 'CEO • BMF Graphisme',
  },
  {
    text: 'After a bad experience with several web agencies, we met Julien. He addressed our issues with online visibility and sales perfectly. He is responsive and versatile. I highly recommend him.',
    img: '/img/samuel-idaccro.png',
    name: 'Samuel Simon',
    role: 'CEO • ID Accro',
  },
]

const projects = [
  {
    img: '/img/lc.png',
    title: 'le collectionist',
    subtitle: 'luxury vacation rentals',
    tags: [
      'scaleup',
      'full time position',
      '2 years',
      'full remote',
      'agile team',
      'vue',
      'nuxt 3',
      'typescript',
      'unit testing',
      'tailwind',
      'design system',
    ],
  },
  {
    img: '/img/orderwizz.png',
    title: 'orderwizz',
    subtitle: 'B2B marketplace for kids fashion',
    tags: [
      'startup',
      'freelance',
      'part time',
      '1 year',
      'full remote',
      'agile team',
      'vue',
      'sass',
      'design system',
      'UI/UX design',
    ],
  },
  {
    img: '/img/16pads.png',
    title: '16pads',
    subtitle: 'collection of sound packs',
    tags: ['side project', 'vue', 'gsap', 'UI/UX design'],
  },
  {
    img: '/img/betedeflow.png',
    title: 'bête de flow',
    subtitle: 'packaged webdesign services',
    tags: ['co-founder', 'freelance', 'UI/UX design', 'Webflow'],
  },
  {
    img: '/img/idaccro.png',
    title: 'ID accro',
    subtitle: 'adventure park creator',
    tags: ['freelance', 'UI/UX design', 'Webflow'],
  },
  {
    img: '/img/olotropp.png',
    title: 'olotropp',
    subtitle: 'creative agency',
    tags: ['freelance', 'UI/UX design', 'Webflow'],
  },
]
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
            class="flex cursor-pointer items-center gap-2 rounded-full border border-dark px-6 py-3 text-sm font-medium capitalize leading-none transition duration-300 hover:bg-dark hover:text-white"
            target="_blank"
          >
            Book a discovery call
            <span
              class="inline-block h-1 w-1 animate-pulse rounded-full bg-green-500"
            />
          </a>
        </div>
      </nav>
      <div
        class="absolute top-1/2 -translate-y-1/2 w-[calc(100%-2rem)] lg:relative lg:translate-y-0"
      >
        <h2 class="mb-10">Freelance UI Designer • Vue & Nuxt Developer</h2>
        <p
          class="font-light capitalize leading-[1.3] text-[2.5rem] md:max-w-[83%] md:text-[3rem] lg:text-[3.5rem]"
        >
          Hey
          <NuxtImg
            class="inline-block"
            format="avif"
            height="60"
            src="/img/emoji.png"
            width="60"
          />
          I'm Julien <br />I help startups and agencies ship
          <span class="font-serif font-medium">amazing Web</span>
          products by bridging the gap between
          <span class="font-serif font-medium">tech and design</span> teams.
        </p>
      </div>
      <a
        class="hidden cursor-pointer text-dark text-sm font-medium capitalize leading-none lg:flex h-[180px] w-[180px] items-center justify-center self-end rounded-full border border-dark transition duration-300 hover:bg-dark hover:text-white"
        href="#testimonials"
      >
        Scroll
      </a>
    </header>
    <section
      class="flex flex-col gap-6 py-20 md:flex-row md:py-[7.5rem]"
      id="testimonials"
    >
      <div
        v-for="(testimonial, i) in testimonials"
        :key="i"
        class="rounded-[1.5rem] border border-dark px-6 py-10"
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
          <h3 class="mb-10 capitalize leading-none">{{ project.subtitle }}</h3>
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
      class="w-full bg-white py-20 lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:py-0"
    >
      <div class="flex flex-col items-center gap-10">
        <div class="flex flex-col items-center gap-6 md:w-8/12">
          <NuxtImg
            class="rounded-full"
            format="avif"
            height="120"
            src="/img/me-big.png"
            width="120"
          />
          <p
            class="text-center font-light capitalize leading-[1.3] text-[2.5rem] md:text-[3rem] lg:text-[3.5rem]"
          >
            Let's bridge the gap between
            <span class="font-serif font-medium">tech and design</span>
          </p>
        </div>
        <a
          :href="calendlyLink"
          class="flex cursor-pointer items-center gap-2 rounded-full border border-dark px-9 py-[18px] text-[20px] font-medium capitalize leading-none transition duration-300 hover:bg-dark hover:text-white"
          target="_blank"
        >
          Book a discovery call
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
  font-family: 'DM Sans';
  src: url('@/assets/fonts/DMSans-Light.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'DM Sans';
  src: url('@/assets/fonts/DMSans-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'DM Sans';
  src: url('@/assets/fonts/DMSans-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Clash Display';
  src: url('@/assets/fonts/ClashDisplay-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Clash Display';
  src: url('@/assets/fonts/ClashDisplay-Semibold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
</style>
