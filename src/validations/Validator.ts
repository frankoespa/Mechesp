/**
 * Discrimina entradas de teclado no válidas
 */
export class Validator {
	static JustLetters(
		name: string,
		value: string,
		setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void,
		setFieldTouched: (field: string, isTouched?: boolean, shouldValidate?: boolean) => void
	): void {
		if (!/(\W|\d|_)/g.test(value as string)) {
			setFieldTouched(name, true, false);
			setFieldValue(name, value, true);
		}
	}

	static NotSpaces(
		name: string,
		value: string,
		setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void,
		setFieldTouched: (field: string, isTouched?: boolean, shouldValidate?: boolean) => void
	): void {
		if (!/(\s)/g.test(value as string)) {
			setFieldTouched(name, true, false);
			setFieldValue(name, value, true);
		}
	}

	static Multiline(
		name: string,
		value: string,
		setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void,
		setFieldTouched: (field: string, isTouched?: boolean, shouldValidate?: boolean) => void
	): void {
		let text = value;

        if (text.length == 1 && text == ' ') {
            
		} else if (!/\s{2,}/g.test(text) && text[0] != ' ') {
			setFieldTouched(name, true, false);
			setFieldValue(name, text, true);
		}
	}
}
