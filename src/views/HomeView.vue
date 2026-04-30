<template>
  <section class="relative overflow-hidden bg-white">
    <div class="relative min-h-[720px] bg-cover bg-center bg-no-repeat lg:min-h-[650px]"
      :style="{ backgroundImage: `url(${bgHero})` }">
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10"></div>

      <div class="relative mx-auto max-w-7xl px-6 pt-24 pb-32 lg:px-8 lg:pt-28">
        <div class="max-w-2xl">
          <h1 class="text-5xl font-extrabold leading-tight tracking-tight text-provagoDark md:text-6xl lg:text-7xl">
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
            <RouterLink to="/services"
              class="inline-flex items-center gap-3 rounded-md bg-provagoRed px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:-translate-y-0.5 hover:bg-red-700">
              Explore IT Solutions
              <ArrowRight class="h-5 w-5" />
            </RouterLink>

            <RouterLink to="/projects"
              class="inline-flex items-center gap-3 rounded-md border border-provagoDark/40 bg-white/80 px-7 py-4 text-sm font-semibold text-provagoDark backdrop-blur transition hover:-translate-y-0.5 hover:border-provagoRed hover:text-provagoRed">
              View Our Projects
              <ArrowRight class="h-5 w-5" />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="relative z-10 mx-auto -mt-24 max-w-7xl px-6 lg:px-8">
      <div class="grid gap-6 rounded-xl bg-white p-6 shadow-2xl shadow-black/10 md:grid-cols-2 lg:grid-cols-5">
        <div v-for="item in features" :key="item.title"
          class="flex gap-4 border-gray-200 lg:border-r lg:last:border-r-0">
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

  <section class="bg-gradient-to-b from-white to-gray-50 py-24">
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
        <article v-for="service in services" :key="service.title"
          class="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-provagoRed/40 hover:shadow-xl">
          <div
            class="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-provagoDark text-provagoRed shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition group-hover:bg-provagoRed group-hover:text-white">
            <component :is="service.icon" class="h-8 w-8" />
          </div>

          <h3 class="text-xl font-bold text-provagoDark">
            {{ service.title }}
          </h3>

          <p class="mt-4 text-base leading-7 text-gray-600">
            {{ service.text }}
          </p>

          <RouterLink to="/services"
            class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-provagoRed transition group-hover:gap-3">
            Learn More
            <ArrowRight class="h-4 w-4" />
          </RouterLink>
        </article>
      </div>
    </div>
  </section>

  <section class="bg-gradient-to-b from-white to-gray-50 pb-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Stats -->
      <!-- <div class="rounded-xl bg-provagoDark px-8 py-8 shadow-[0_16px_40px_rgba(0,0,0,0.18)]">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div v-for="(item, index) in stats" :key="item.value"
            class="flex items-center gap-5 border-white/20 lg:border-r lg:pr-8 lg:last:border-r-0">
            <component :is="item.icon" class="h-12 w-12 shrink-0 text-white/90" />

            <div>
              <h3 class="text-3xl font-extrabold text-white">
                {{ item.value }}
              </h3>
              <p class="mt-2 text-sm leading-6 text-white/80">
                {{ item.label }}
              </p>
            </div>
          </div>
        </div>
      </div> -->

      <!-- Projects Header -->
      <div class="mt-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div class="mb-4 flex items-center gap-4">
            <span class="text-sm font-bold uppercase tracking-[0.25em] text-provagoRed">
              Our Projects
            </span>
            <span class="h-px w-24 bg-provagoRed/40"></span>
          </div>

          <h2 class="text-4xl font-extrabold leading-tight text-provagoHeading">
            Real Solutions. Real
            <span class="text-provagoRed">Impact.</span>
          </h2>
        </div>

        <RouterLink to="/projects"
          class="inline-flex items-center justify-center gap-3 rounded-lg border border-provagoRed px-7 py-4 text-sm font-bold text-provagoRed transition hover:bg-provagoRed hover:text-white">
          View All Projects
          <ArrowRight class="h-5 w-5" />
        </RouterLink>
      </div>

      <!-- Projects Grid -->
      <div class="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <article v-for="project in projects" :key="project.title" class="group">
          <div class="overflow-hidden rounded-lg bg-provagoAsh">
            <img :src="project.image" :alt="project.title"
              class="h-44 w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0" />
          </div>

          <h3 class="mt-5 text-xl font-bold text-provagoHeading">
            {{ project.title }}
          </h3>

          <p class="mt-3 text-base leading-7 text-provagoText">
            {{ project.text }}
          </p>

          <span class="mt-5 block h-0.5 w-12 bg-provagoRed"></span>
        </article>
      </div>
    </div>
  </section>

  <section class="bg-gradient-to-b from-white to-gray-50 py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Stats -->
      <div
        class="rounded-2xl border border-gray-200 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 px-8 py-8 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div v-for="item in stats" :key="item.value"
            class="flex items-center gap-5 border-gray-300/70 lg:border-r lg:pr-6 lg:last:border-r-0">
            <div
              class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-provagoRed/20 bg-white text-provagoRed shadow-sm">
              <component :is="item.icon" class="h-8 w-8" />
            </div>

            <div>
              <h3 class="text-3xl font-extrabold text-provagoHeading">
                {{ item.value }}
              </h3>
              <p class="mt-1 text-sm leading-6 text-provagoText">
                {{ item.label }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Header -->
      <div class="mt-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.25em] text-provagoRed">
            Our ICT Projects
          </p>

          <span class="mt-3 block h-0.5 w-14 bg-provagoRed"></span>

          <h2 class="mt-5 max-w-2xl text-4xl font-extrabold leading-tight text-provagoHeading md:text-5xl">
            Real Solutions. Real
            <span class="text-provagoRed">Impact.</span>
          </h2>

          <p class="mt-4 max-w-xl text-lg leading-8 text-provagoText">
            Transforming organizations with innovative ICT solutions that drive
            efficiency, security and growth.
          </p>
        </div>

        <RouterLink to="/projects"
          class="inline-flex items-center justify-center gap-3 rounded-xl border border-provagoRed px-7 py-4 text-sm font-bold text-provagoRed transition hover:bg-provagoRed hover:text-white">
          View All Projects
          <ArrowRight class="h-5 w-5" />
        </RouterLink>
      </div>

      <!-- Project Grid -->
      <div class="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="project in ictProjects" :key="project.title"
          class="group relative min-h-[260px] overflow-hidden rounded-2xl bg-gray-200 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
          <img :src="project.image" :alt="project.title"
            class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />

          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent"></div>

          <div
            class="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-xl bg-provagoRed text-white shadow-lg shadow-red-500/25">
            <component :is="project.icon" class="h-7 w-7" />
          </div>

          <div class="absolute inset-x-0 bottom-0 p-6">
            <h3 class="max-w-sm text-2xl font-extrabold leading-tight text-white">
              {{ project.title }}
            </h3>

            <span class="mt-3 block h-0.5 w-12 bg-provagoRed"></span>

            <p class="mt-4 text-base font-medium text-white/90">
              Client:
              <span class="text-provagoRed">{{ project.client }}</span>
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>

</template>

<script setup>
import { useHead } from "@unhead/vue"


import {
  Trophy,
  BriefcaseBusiness,
  Users,
  Building2,
  MapPin,
  ArrowRight,

  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Layers,
  Headphones,

  Monitor,
  MonitorCheck,
  Server,
  Code2,
  Cloud,
  Wifi,
  Network,
  GraduationCap,
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



const stats = [
  { value: "7+", label: "Years of Excellence", icon: Trophy },
  { value: "100+", label: "Projects Completed", icon: BriefcaseBusiness },
  { value: "50+", label: "Skilled IT Professionals", icon: Users },
  { value: "80+", label: "Satisfied Clients", icon: Building2 },
  { value: "Across Nigeria", label: "Delivering Impact Nationwide", icon: MapPin },
]

const ictProjects = [
  {
    title: "CBT Center Deployment",
    client: "FSTC",
    image: "/src/assets/images/1.jpeg",
    icon: MonitorCheck,
  },
  {
    title: "ICT Infrastructure Setup",
    client: "Ministry of Environment",
    image: "/src/assets/images/2.jpeg",
    icon: Server,
  },
  {
    title: "Software Systems Implementation",
    client: "Public Sector Institutions",
    image: "/src/assets/images/3.jpeg",
    icon: Code2,
  },
  {
    title: "Data Center Setup",
    client: "Government Agencies",
    image: "/src/assets/images/4.jpeg",
    icon: Cloud,
  },
  {
    title: "Networking & Connectivity",
    client: "Educational & Government Institutions",
    image: "/src/assets/images/5.jpeg",
    icon: Network,
  },
  {
    title: "ICT Training & Capacity Building",
    client: "Communities & NGOs",
    image: "/src/assets/images/6.jpeg",
    icon: GraduationCap,
  },
]
</script>
