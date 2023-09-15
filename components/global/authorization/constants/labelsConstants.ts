import { AuthorizationPageState, AuthorizationFieldsIdentifier, AuthLabelsInterface } from '~/components/global/authorization/interfaces';

export const labelsConstants = (): AuthLabelsInterface => {
    return {
        [AuthorizationPageState.LOGIN]: {
            [AuthorizationFieldsIdentifier.EMAIL]: 'Login Email',
            [AuthorizationFieldsIdentifier.PASSWORD]: 'Login Password',
        },
        [AuthorizationPageState.REGISTER]: {
            [AuthorizationFieldsIdentifier.NAME]: 'Register Name',
            [AuthorizationFieldsIdentifier.SURNAME]: 'Register Surname',
            [AuthorizationFieldsIdentifier.PHONE]: 'Register Phone',
            [AuthorizationFieldsIdentifier.EMAIL]: 'Register Email',
            [AuthorizationFieldsIdentifier.PASSWORD]: 'Register Password',
        },
    };
};
