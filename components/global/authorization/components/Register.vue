<template>
    <BaseForm
        class="space-y-6"
    >
        <template #fields>
            <Field
                v-model="emailInput"
                :config="emailConfig"
            />

            <MazPhoneNumberInput
                v-model="phoneInput"
                :success="isValidPhone"
                showCodeOnList
                @update:model-value="togglePhoneValidation"
                @country-code="togglePhoneValidation"
            />

            <Field
                v-model="passwordInput"
                :config="passwordConfig"
            >
                Enter your password
            </Field>
        </template>
        <template #buttons>
            <Button
                class="bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                @click="auth()"
            >
                Register
            </Button>
            <Button
                class="bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-indigo-600 shadow-sm outline outline-1 outline-indigo-600 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                @click="$emit('changePage', AuthorizationPageState.LOGIN)"
            >
                Sign in
            </Button>
        </template>
    </BaseForm>
</template>

<script setup lang="ts">
    import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput';
    import { AuthorizationPageState } from '~/components/global/authorization/interfaces/authEnums';

    defineEmits<{(e: 'changePage', value: AuthorizationPageState): void}>();

    const { emailConfig, passwordConfig } = useRegisterConfig();
    const { Field, Button } = useRenderComponents();

    const emailInput = ref('');
    const passwordInput = ref('');
    const phoneInput = ref('');
    const isValidPhone = ref(false);

    const togglePhoneValidation = (event: string | undefined) => {
        if (!event) {
            isValidPhone.value = false;

            return;
        }

        if (/^\+?\d+/.test(event)) {
            isValidPhone.value = true;
        } else {
            isValidPhone.value = false;
        }
    };

    const checkData = () => {
        return (emailInput.value.length > 0) && (passwordInput.value.length > 0);
    };

    const sendRegRequest = () => {
        console.log('try to connect for reg');
    };

    const auth = () => {
        if (checkData()) {
            sendRegRequest();
        }
    };

</script>

<style scoped lang="scss">

</style>
