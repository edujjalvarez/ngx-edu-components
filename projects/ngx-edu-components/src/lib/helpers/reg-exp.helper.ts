export class RegExpHelper {
    static D78 = /^\d{7}(?:\d{1})?$/;
    static D123 = /^\d{1}(?:\d{1})?(?:\d{1})?$/;
    static D12 = /^\d{1}(?:\d{1})?$/;
    static AREA_CODE = /^[1-9]{1}(\d{1})(?:\d{1})?(?:\d{1})?$/;
    static LOCAL_PHONE_NUMBER = /^\d{6}(?:\d{1})?(?:\d{1})?(?:\d{1})?$/;
    static ONLY_NUMBER_MAX_2 = /^\d{1,2}$/;
    static ONLY_NUMBER_MAX_3 = /^\d{1,3}$/;
    static ONLY_NUMBER_MAX_4 = /^\d{1,4}$/;
    static ONLY_NUMBER_MAX_8 = /^\d{1,8}$/;
    static ONLY_NUMBER_MAX_10 = /^\d{1,10}$/;
    static DATE_ES_AR = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[1-9])|((1)[0-2]))(\/)([1-2])\d{3}$/;
    static DATE_KEYPRESS = /^[0-9\/]{1,10}$/;
}
