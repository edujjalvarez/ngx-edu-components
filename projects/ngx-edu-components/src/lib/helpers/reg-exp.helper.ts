// @dynamic
export class RegExpHelper {
    public static D78 = /^\d{7}(?:\d{1})?$/;
    public static D123 = /^\d{1}(?:\d{1})?(?:\d{1})?$/;
    public static D12 = /^\d{1}(?:\d{1})?$/;
    public static AREA_CODE = /^[1-9]{1}(\d{1})(?:\d{1})?(?:\d{1})?$/;
    public static LOCAL_PHONE_NUMBER = /^\d{6}(?:\d{1})?(?:\d{1})?(?:\d{1})?$/;
    public static ONLY_NUMBER_MAX_2 = /^\d{1,2}$/;
    public static ONLY_NUMBER_MAX_3 = /^\d{1,3}$/;
    public static ONLY_NUMBER_MAX_4 = /^\d{1,4}$/;
    public static ONLY_NUMBER_MAX_8 = /^\d{1,8}$/;
    public static ONLY_NUMBER_MAX_10 = /^\d{1,10}$/;
    public static DATE_ES_AR = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[1-9])|((1)[0-2]))(\/)([1-2])\d{3}$/;
    public static DATE_KEYPRESS = /^[0-9\/]{1,10}$/;
}
