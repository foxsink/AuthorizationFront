<template>
    <div>
        <div
            v-if="availablePages.length === 2"
        >
            <span>Login</span>
            <Switch
                v-model="isEnabledSecond"
                :class="isEnabledSecond ? 'bg-teal-900' : 'bg-teal-700'"
                class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
                <span class="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    :class="isEnabledSecond ? 'translate-x-9' : 'translate-x-0'"
                    class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                />
            </Switch>
            <span>Register</span>
        </div>
        <div
            v-else
        >
            <span>{{ currentPage }}</span>
        </div>
        <div class="flex flex-col justify-between h-full">
            <Field class="border-t border-gray-900/10 py-2">
                Phone:
                <template #input>
                    <MazPhoneNumberInput
                        v-model="phoneInput"
                        :success="isValidPhone"
                        showCodeOnList
                        @update:model-value="togglePhoneValidation"
                        @country-code="togglePhoneValidation"
                    />
                </template>
            </Field>

            <Button
                content="Sign in"
                class="bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                @click="auth()"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput';
    import { AuthorizationPageState, AuthorizationPageFormat } from '~/components/global/authorization/interfaces/authEnums';
    import { useAuthorization } from '~/components/global/authorization/composables/useAuthorization';

    const props = defineProps({
        defaultPage: {
            type: String as PropType<AuthorizationPageState>,
            default: AuthorizationPageState.LOGIN,
        },
        availablePages: {
            type: Array as PropType<AuthorizationPageState[]>,
            default: () => [AuthorizationPageState.LOGIN, AuthorizationPageState.REGISTER],
        },
        pageFormat: {
            type: Number as PropType<AuthorizationPageFormat>,
            default: AuthorizationPageFormat.PAGE,
        },
    });

    const { defaultPage, availablePages } = toRefs(props);
    const currentPage = ref(defaultPage.value);
    const isEnabledSecond = ref(false);

    const { getFields } = useAuthorization(currentPage.value);
    const { Field, Button } = useRenderComponents();

    getFields();

    onBeforeMount(() => {
        if (!availablePages.value.includes(defaultPage.value)) {
            throw new Error('Props error: \'defaultPage\' value not in \'availiblePages\'');
        }
    });

    const changePage = (e: AuthorizationPageState) => {
        currentPage.value = e;
    };

    const auth = () => {
        console.log('try to connect');
    };

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

</script>

<style scoped lang="scss">
</style>
