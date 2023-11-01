import { Toast} from './toastConstant';

export const alertSuccess = (title) => {
    Toast.fire({
        icon: 'success',
        title: title
    });
}

export const alertError = (title) => {
    Toast.fire({
        icon: 'error',
        title: title
    });
}

export const alertLoading = () => {
    return Toast.fire({
        icon: 'info',
        title: 'Please Wait!'
    });
}