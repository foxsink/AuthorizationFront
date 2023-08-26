<template>
    <BaseForm
        class="space-y-6"
    >
        <template
            #fields
        >
            <Field
                v-model="emailInput"
                :config="emailConfig"
            />

            <Field
                v-model="passwordInput"
                :config="passwordConfig"
            >
                Password
            </Field>
        </template>
        <template #buttons>
            <Button
                content="Sign in"
                class="bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                @click="auth()"
            />
            <Button
                class="bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-indigo-600 shadow-sm outline outline-1 outline-indigo-600 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                @click="$emit('changePage', AuthorizationPageState.REGISTER)"
            >
                Register
            </Button>
        </template>
    </BaseForm>
</template>

<script setup lang="ts">
    import { AuthorizationPageState } from '~/components/global/authorization/interfaces/authEnums';

    defineEmits<{(e: 'changePage', value: AuthorizationPageState): void}>();

    const { emailConfig, passwordConfig } = useLoginConfig();
    const { Field, Button } = useRenderComponents();
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
