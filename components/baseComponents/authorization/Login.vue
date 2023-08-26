<template>
    <BaseForm
        class="space-y-6"
    >
        <template
            #fields
        >
            <Field
                v-model="emailInput"
                :inputOptions="emailProps.inputOptions"
                :labelOptions="emailProps.labelOptions"
            >
                Email Address
            </Field>

            <Field
                v-model="passwordInput"
                :inputOptions="passwordProps.inputOptions"
                :labelOptions="passwordProps.labelOptions"
            >
                Password
            </Field>
        </template>
        <template #buttons>
            <BaseButton
                class="bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                @click="auth()"
            >
                Sign in
            </BaseButton>
            <BaseButton
                class="bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-indigo-600 shadow-sm outline outline-1 outline-indigo-600 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                @click="$emit('swap')"
            >
                Register
            </BaseButton>
        </template>
    </BaseForm>
</template>

<script setup lang="ts">
    import { useLoginConfig } from './composables/useConfig';

    defineEmits<{(e: 'swap'): void}>();

    const { emailProps, passwordProps } = useLoginConfig();
    const emailInput = ref('');
    const passwordInput = ref('');

    const checkData = () => {
        return (emailInput.value.length > 0) && (passwordInput.value.length > 0);
    };

    const sendAuthRequest = () => {
        console.log('try to connect');
    };

    const auth = () => {
        if (checkData()) {
            sendAuthRequest();
        }
    };

</script>

<style scoped lang="scss">

</style>
