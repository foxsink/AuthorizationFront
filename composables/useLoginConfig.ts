export const useLoginConfig = () => {
    const emailConfig = {
        labelString: 'Email Address',
        labelAttrs: {
            for: 'email',
            class: 'block text-sm font-medium leading-6 text-gray-900',
        },
        inputAttrs: {
            id: 'email',
            name: 'email',
            type: 'email',
            autocomplete: 'email',
            required: true,
            class: 'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
        },
    };
    const passwordConfig = {
        labelString: 'Password',
        labelAttrs: {
            for: 'password',
            class: 'block text-sm font-medium leading-6 text-gray-900',
        },
        inputAttrs: {
            id: 'password',
            name: 'password',
            type: 'password',
            autocomplete: 'current-password',
            required: true,
            class: 'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
        },
    };

    return {
        emailConfig,
        passwordConfig,
    };
};
