<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                class="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
            >
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Authorization :defaultPage="AuthorizationPageState.LOGIN" />
            <Register />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { AuthorizationPageState } from '~/components/global/authorization/interfaces';

</script>

<style scoped lang="scss">

</style>
