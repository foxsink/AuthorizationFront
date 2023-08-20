export const useRegisterConfig = () => {
    const nameProps = ref({
        options: {
            labelText: 'Enter your name',
        },
        labelOptions: {
            for: 'name',
            class: 'block text-sm font-medium leading-6 text-gray-900',
        },
        inputOptions: {
            id: 'name',
            name: 'name',
            type: 'text',
            autocomplete: 'email',
            required: true,
            class: 'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
        },
    });
    const surnameProps = ref({
        options: {
            labelText: 'Enter your surname',
        },
        labelOptions: {
            for: 'surname',
            class: 'block text-sm font-medium leading-6 text-gray-900',
        },
        inputOptions: {
            id: 'surname',
            name: 'surname',
            type: 'text',
            autocomplete: 'email',
            required: true,
            class: 'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
        },
    });
    const phoneProps = ref({
        options: {
            labelText: 'Enter your phone',
        },
        labelOptions: {
            for: 'phone',
            class: 'block text-sm font-medium leading-6 text-gray-900',
        },
        inputOptions: {
            id: 'phone',
            name: 'phone',
            type: 'tel',
            autocomplete: 'email',
            required: true,
            class: 'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
        },
    });

    const emailProps = ref({
        options: {
            labelText: 'Enter your email',
        },
        labelOptions: {
            for: 'email',
            class: 'block text-sm font-medium leading-6 text-gray-900',
        },
        inputOptions: {
            id: 'email',
            name: 'email',
            type: 'email',
            autocomplete: 'email',
            required: true,
            class: 'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
        },
    });
    const passwordProps = ref({
        options: {
            labelText: 'Enter your password',
        },
        labelOptions: {
            for: 'password',
            class: 'block text-sm font-medium leading-6 text-gray-900',
        },
        inputOptions: {
            id: 'password',
            name: 'password',
            type: 'password',
            autocomplete: 'current-password',
            required: true,
            class: 'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
        },
    });

    return {
        nameProps,
        surnameProps,
        emailProps,
        phoneProps,
        passwordProps,
    };
};
