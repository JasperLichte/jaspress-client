import Serializable from "../interfaces/Serializable";

export default class Setting implements Serializable {

    key: string = '';
    value: string = '';
    defaultValue: string = '';
    cssProperty: string|null = null;

    deserialize(input: {}): Setting {
        // @ts-ignore
        this.key = input['key'];
        // @ts-ignore
        this.value = input['value'];
        // @ts-ignore
        this.defaultValue = input['defaultValue'];
        // @ts-ignore
        input['cssProperty'] && (this.cssProperty = input['cssProperty']);

        return this;
    }

}
