export enum FormatDisplayType {
    Text,
    Currency,
    Percent,
    Suffix,
    Exponential,
    General,
    Fixed,
    Integer
}

export function NumberFormatter(value: number, type?: FormatDisplayType, fixed?: number): string {

    let format = (val: number, fixed: number = 0): string => {
        if (val === 0) return "0";
        return val.toLocaleString(undefined, {
            minimumFractionDigits: fixed,
            maximumFractionDigits: fixed,
        }).replace(/\.0+$/, '');
    };


    switch (type) {
        case FormatDisplayType.Currency:
            return `${format(value, 2)} $`; //TODO get currency char from user
        case FormatDisplayType.Fixed:
            return format(value, fixed);
        case FormatDisplayType.Percent:
            return `${format(value, 1)} %`;
        case FormatDisplayType.Integer:
        case FormatDisplayType.Text:
        default:
            return format(value, fixed);
    }
};