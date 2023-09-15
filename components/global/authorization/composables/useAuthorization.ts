import { fieldsConstants } from '../constants/fieldsConstants';
import { AuthLabelsInterface, AuthorizationPageState } from '~/components/global/authorization/interfaces';

export const useAuthorization = (currentPage: AuthorizationPageState, config?: AuthLabelsInterface) => {
    const getFields = (filedsLabels?: AuthLabelsInterface) => {
        console.log(filedsLabels, fieldsConstants()[currentPage]);

        const currentPageFields = computed(() => fieldsConstants()[currentPage]);

        if (filedsLabels !== undefined) {
            filedsLabels[currentPage].forEach((label) => {
                console.log(currentPageFields.value);
            });
        }

        return {
        };
    };

    return {
        getFields,
    };
};
