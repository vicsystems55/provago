<template>
    <header class="sticky top-0 z-50 bg-white shadow-sm">
        <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <RouterLink to="/" class="flex items-center">
                <img :src="logo" alt="Provago Limited" class="h-20 w-auto object-contain" />
            </RouterLink>

            <div class="hidden items-center gap-8 md:flex">
                <RouterLink to="/" class="nav-link">Home</RouterLink>
                <RouterLink to="/about" class="nav-link">About Us</RouterLink>
                <RouterLink to="/services" class="nav-link">Our Services</RouterLink>
                <RouterLink to="/projects" class="nav-link">Projects</RouterLink>
                <RouterLink to="/contact" class="nav-link">Contact Us</RouterLink>
            </div>

            <RouterLink to="/contact" class="rounded-md bg-provagoRed px-5 py-3 text-sm font-semibold text-white">
                Get a Quote
            </RouterLink>
        </nav>
    </header>
</template>

<script setup>
import logo from "../assets/images/logo.png"
</script>

<style scoped>
.nav-link {
    @apply text-sm font-medium text-provagoDark hover:text-provagoRed;
}

.router-link-active {
    @apply text-provagoRed;
}
</style>