<script setup>
import { ref } from "vue"
import { Menu, X, ArrowRight } from "lucide-vue-next"
import logo from "../assets/images/logo.png"

const isOpen = ref(false)

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact Us", to: "/contact" },
]

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur-md">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <RouterLink to="/" class="flex items-center" @click="closeMenu">
        <img
          :src="logo"
          alt="Provago Limited"
          class="h-20 w-auto object-contain"
        />
      </RouterLink>

      <!-- Desktop Menu -->
      <div class="hidden items-center gap-8 md:flex">
        <RouterLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.to"
          class="nav-link"
        >
          {{ link.label }}
        </RouterLink>
      </div>

      <RouterLink
        to="/contact"
        class="hidden rounded-md bg-provagoRed px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:-translate-y-0.5 hover:bg-red-700 md:inline-flex"
      >
        Get a Quote
      </RouterLink>

      <!-- Mobile Button -->
      <button
        type="button"
        class="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-provagoAsh text-provagoDark shadow-sm md:hidden"
        @click="isOpen = true"
        aria-label="Open menu"
      >
        <Menu class="h-6 w-6" />
      </button>
    </nav>

    <!-- Overlay -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
        @click="closeMenu"
      ></div>
    </Transition>

    <!-- Drawer -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-x-full opacity-0"
      enter-to-class="translate-x-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-x-0 opacity-100"
      leave-to-class="translate-x-full opacity-0"
    >
      <aside
        v-if="isOpen"
        class="fixed right-0 top-0 z-50 h-screen w-[85%] max-w-sm bg-white shadow-2xl md:hidden"
      >
        <div class="flex h-full flex-col">
          <div class="flex items-center justify-between border-b border-gray-100 px-6 py-5">
            <img
              :src="logo"
              alt="Provago Limited"
              class="h-10 w-auto object-contain"
            />

            <button
              type="button"
              class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-provagoAsh text-provagoDark"
              @click="closeMenu"
              aria-label="Close menu"
            >
              <X class="h-5 w-5" />
            </button>
          </div>

          <div class="flex-1 px-6 py-8">
            <p class="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-provagoRed">
              Menu
            </p>

            <div class="flex flex-col gap-3">
              <RouterLink
                v-for="link in navLinks"
                :key="link.label"
                :to="link.to"
                class="mobile-nav-link"
                @click="closeMenu"
              >
                <span>{{ link.label }}</span>
                <ArrowRight class="h-4 w-4" />
              </RouterLink>
            </div>
          </div>

          <div class="border-t border-gray-100 bg-provagoAsh px-6 py-6">
            <p class="text-sm leading-6 text-gray-600">
              Ready to transform your business with smart IT solutions?
            </p>

            <RouterLink
              to="/contact"
              class="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-provagoRed px-5 py-4 text-sm font-bold text-white shadow-lg shadow-red-500/20"
              @click="closeMenu"
            >
              Get a Quote
              <ArrowRight class="h-4 w-4" />
            </RouterLink>
          </div>
        </div>
      </aside>
    </Transition>
  </header>
</template>

<style scoped>
.nav-link {
  @apply text-sm font-medium text-provagoDark hover:text-provagoRed;
}

.router-link-active {
  @apply text-provagoRed;
}

.mobile-nav-link {
  @apply flex items-center justify-between rounded-xl border border-gray-100 bg-white px-5 py-4 text-base font-semibold text-provagoDark shadow-sm transition hover:border-provagoRed hover:text-provagoRed hover:shadow-md;
}
</style>