

<template>
  <section class="relative overflow-hidden bg-white">
    <div
      class="relative min-h-[720px] bg-cover bg-center bg-no-repeat lg:min-h-[650px]"
      :style="{ backgroundImage: `url(${bgHero})` }"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10"></div>

      <div class="relative mx-auto max-w-7xl px-6 pt-24 pb-32 lg:px-8 lg:pt-28">
        <div class="max-w-2xl">
          <h1
            class="text-5xl font-extrabold leading-tight tracking-tight text-provagoDark md:text-6xl lg:text-7xl"
          >
            Technology
            <span class="block text-provagoRed">Driving Progress.</span>
            <span class="block">Solutions That</span>
            <span class="block">Empower.</span>
          </h1>

          <p class="mt-6 max-w-xl text-base leading-8 text-gray-700 md:text-lg">
            We deliver innovative IT solutions that connect businesses, empower
            communities and drive digital transformation across Nigeria.
          </p>

          <div class="mt-9 flex flex-wrap gap-5">
            <RouterLink
              to="/services"
              class="inline-flex items-center gap-3 rounded-md bg-provagoRed px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:-translate-y-0.5 hover:bg-red-700"
            >
              Explore IT Solutions
              <ArrowRight class="h-5 w-5" />
            </RouterLink>

            <RouterLink
              to="/projects"
              class="inline-flex items-center gap-3 rounded-md border border-provagoDark/40 bg-white/80 px-7 py-4 text-sm font-semibold text-provagoDark backdrop-blur transition hover:-translate-y-0.5 hover:border-provagoRed hover:text-provagoRed"
            >
              View Our Projects
              <ArrowRight class="h-5 w-5" />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="relative z-10 mx-auto -mt-24 max-w-7xl px-6 lg:px-8">
      <div
        class="grid gap-6 rounded-xl bg-white p-6 shadow-2xl shadow-black/10 md:grid-cols-2 lg:grid-cols-5"
      >
        <div
          v-for="item in features"
          :key="item.title"
          class="flex gap-4 border-gray-200 lg:border-r lg:last:border-r-0"
        >
          <component :is="item.icon" class="h-10 w-10 shrink-0 text-provagoRed" />

          <div>
            <h3 class="font-bold text-provagoDark">
              {{ item.title }}
            </h3>
            <p class="mt-2 text-sm leading-6 text-gray-600">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

    <section class="bg-white py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-2 lg:items-end">
        <div>
          <div class="mb-4 flex items-center gap-4">
            <span class="text-sm font-bold uppercase tracking-[0.25em] text-provagoRed">
              Our IT Services
            </span>
            <span class="h-px w-24 bg-provagoRed/40"></span>
          </div>

          <h2 class="max-w-xl text-4xl font-extrabold leading-tight text-provagoDark md:text-5xl">
            Comprehensive IT Solutions for
            <span class="text-provagoRed">Every Business Need</span>
          </h2>
        </div>

        <p class="max-w-xl text-lg leading-8 text-gray-600 lg:justify-self-end">
          From infrastructure to software, we provide end-to-end IT services
          designed to improve efficiency, increase productivity and accelerate
          growth in the public and private sectors.
        </p>
      </div>

      <div class="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="service in services"
          :key="service.title"
          class="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-provagoRed/40 hover:shadow-xl"
        >
          <div
            class="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-provagoDark text-provagoRed shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition group-hover:bg-provagoRed group-hover:text-white"
          >
            <component :is="service.icon" class="h-8 w-8" />
          </div>

          <h3 class="text-xl font-bold text-provagoDark">
            {{ service.title }}
          </h3>

          <p class="mt-4 text-base leading-7 text-gray-600">
            {{ service.text }}
          </p>

          <RouterLink
            to="/services"
            class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-provagoRed transition group-hover:gap-3"
          >
            Learn More
            <ArrowRight class="h-4 w-4" />
          </RouterLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useHead } from "@unhead/vue"
import {
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Layers,
  Headphones,
  ArrowRight,
} from "lucide-vue-next"

import {
  Monitor,
  Code2,
  Cloud,
  Wifi,
} from "lucide-vue-next"

import bgHero from "../assets/images/bg-1.png"

useHead({
  title: "Provago Limited | IT Solutions & Digital Transformation",
  meta: [
    {
      name: "description",
      content:
        "Provago Limited delivers innovative IT solutions that connect businesses, empower communities and drive digital transformation across Nigeria.",
    },
  ],
})

const features = [
  {
    title: "Innovation",
    text: "We embrace technology to create smart solutions.",
    icon: Lightbulb,
  },
  {
    title: "Security",
    text: "We build secure systems you can trust.",
    icon: ShieldCheck,
  },
  {
    title: "Performance",
    text: "We optimize systems for maximum efficiency.",
    icon: TrendingUp,
  },
  {
    title: "Scalability",
    text: "We build solutions that grow with your business.",
    icon: Layers,
  },
  {
    title: "Support",
    text: "Our team is always here to help.",
    icon: Headphones,
  },
]

const services = [
  {
    title: "IT Infrastructure Solutions",
    text: "We design, deploy and manage reliable infrastructure that powers business operations.",
    icon: Monitor,
  },
  {
    title: "Software Development",
    text: "Custom software solutions that solve business challenges and drive digital transformation.",
    icon: Code2,
  },
  {
    title: "Cloud Solutions",
    text: "Secure, scalable and cost-effective cloud services to help your business grow without limits.",
    icon: Cloud,
  },
  {
    title: "Cybersecurity",
    text: "Protect your data, systems and networks with advanced security solutions.",
    icon: ShieldCheck,
  },
  {
    title: "Networking & Connectivity",
    text: "High-performance networks that ensure seamless communication and business continuity.",
    icon: Wifi,
  },
  {
    title: "IT Support & Maintenance",
    text: "Reliable technical support and maintenance to keep your systems running at peak performance.",
    icon: Headphones,
  },
]
</script>