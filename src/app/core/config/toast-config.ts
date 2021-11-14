import { ToastrConfig } from 'ngx-toastr';


export const toastConfig:ToastrConfig = {
    positionClass: 'toast-bottom-left',
    timeOut: 7000,
    disableTimeOut: false,
    closeButton: true,
    extendedTimeOut: 0,
    progressBar: true,
    progressAnimation: 'increasing',
    enableHtml: true,
    toastClass: 'ngx-toastr',
    titleClass: 'toast-title',
    messageClass: 'toast-message',
    easing: 'ease-in',
    easeTime: '300',
    tapToDismiss: true,
    onActivateTick: false,
    newestOnTop: false,
    payload: undefined
}