<script setup>
import PrimaryButton from '../components/PrimaryButton.vue';
import SecondaryButton from '../components/SecondaryButton.vue';
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter()
const hasApplication = localStorage.getItem("id") !== null

const newApplication = async () => {
    localStorage.removeItem("id")
    const response = await axios
        .post("/new", {})
        .then(function (response) {
            console.log(response.data.user_id)
            localStorage.setItem("id", response.data.user_id)
            router.push({ name: "New Application" })
        }).catch(function (error) {
            if (error.response) {
                console.error(error.response)
            }
        })
}
const continueApplication = async () => {
    await router.push({ name: "New Application" })
}

const submit = hasApplication ? continueApplication : newApplication
</script>
<template>
    <section>
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1
                    class="max-w-2xl xl:leading-snug md:leading-snug mb-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl">
                    Simple, Fast & Easy. Get Your Loan From us at
                    <mark class="px-2 text-slate-200 bg-primary-700 rounded">Loaner</mark> Today.
                </h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">We are
                    available to provide assistance, whether you require it for personal emergencies, paying bills or
                    monthly installments for your car, home renovation, or starting a business.</p>
                <div class="flex">
                    <form @submit.prevent="submit">
                        <PrimaryButton type="submit" :text="hasApplication ? 'Continue' : 'Get started'">
                            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </PrimaryButton>
                    </form>
                    <div v-show="hasApplication">
                        <form @submit.prevent="newApplication">
                            <SecondaryButton type="submit" text="Start Over">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 206.108 206.108">
                                    <path
                                        d="M152.774,69.886H30.728l24.97-24.97c3.515-3.515,3.515-9.213,0-12.728c-3.516-3.516-9.213-3.515-12.729,0L2.636,72.523  c-3.515,3.515-3.515,9.213,0,12.728l40.333,40.333c1.758,1.758,4.061,2.636,6.364,2.636c2.303,0,4.606-0.879,6.364-2.636  c3.515-3.515,3.515-9.213,0-12.728l-24.97-24.97h122.046c19.483,0,35.334,15.851,35.334,35.334s-15.851,35.334-35.334,35.334H78.531  c-4.971,0-9,4.029-9,9s4.029,9,9,9h74.242c29.408,0,53.334-23.926,53.334-53.334S182.182,69.886,152.774,69.886z" />
                                </svg>
                            </SecondaryButton>
                        </form>
                    </div>
                </div>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="./../assets/home-illustration.svg" alt="illustration">
            </div>
        </div>
    </section></template>
