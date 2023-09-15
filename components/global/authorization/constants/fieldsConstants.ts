import { AuthorizationPageState, Field, AuthorizationFieldsIdentifier, AuthFieldsType } from '~/components/global/authorization/interfaces';

export const fieldsConstants = (): Record<AuthorizationPageState, Record<AuthFieldsType, Field>> => {
    const emailFieldConfig: Field = {
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

    const passwordFieldConfig: Field = {
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

    const registerConfig: Field[] = [
        {
            labelString: 'Enter your name',
            labelAttrs: {
                for: 'name',
                class: 'block text-sm font-medium leading-6 text-gray-900',
            },
            inputAttrs: {
                id: 'name',
                name: 'name',
                type: 'text',
                autocomplete: 'email',
                required: true,
                class: 'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
            },
        }, {
            labelString: 'Enter your surname',
            labelAttrs: {
                for: 'surname',
                class: 'block text-sm font-medium leading-6 text-gray-900',
            },
            inputAttrs: {
                id: 'surname',
                name: 'surname',
                type: 'text',
                autocomplete: 'email',
                required: true,
                class: 'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
            },
        }, {
            labelString: 'Enter your phone',
            labelAttrs: {
                for: 'phone',
                class: 'block text-sm font-medium leading-6 text-gray-900',
            },
            inputAttrs: {
                id: 'phone',
                name: 'phone',
                type: 'tel',
                autocomplete: 'email',
                required: true,
                class: 'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
            },
        },
    ];

    return {
        [AuthorizationPageState.LOGIN]: {
            [AuthorizationFieldsIdentifier.EMAIL]: emailFieldConfig,
            [AuthorizationFieldsIdentifier.PASSWORD]: passwordFieldConfig,
        },
        [AuthorizationPageState.REGISTER]: {
            [AuthorizationFieldsIdentifier.NAME]: registerConfig[0],
            [AuthorizationFieldsIdentifier.SURNAME]: registerConfig[1],
            [AuthorizationFieldsIdentifier.PHONE]: registerConfig[2],
            [AuthorizationFieldsIdentifier.EMAIL]: emailFieldConfig,
            [AuthorizationFieldsIdentifier.PASSWORD]: passwordFieldConfig,
        },
    };
};
