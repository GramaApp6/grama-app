import {toast, ToastOptions} from "react-toastify";

const timeOut = 1500;

const options: ToastOptions = {
    toastId: "1", position: "top-right",
    autoClose: timeOut,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: 0,
};

function successToast(message: string) {
    toast.success(message, options);
}

function infoToast(message: string) {
    toast.info(message, options);
}

function errorToast(message: string) {
    toast.error(message, options);
}

function warningToast(message: string) {
    toast.warn(message, options);
}

function reload() {
    setTimeout(() => {
        window.location.reload();
    }, timeOut);
}

function redirect(path:string) {
    setTimeout(() => {
        window.location.href = path;
    }, timeOut);
}

export {successToast, infoToast, warningToast, errorToast, reload, redirect};