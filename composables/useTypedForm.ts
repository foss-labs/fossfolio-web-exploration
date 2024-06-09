import { z, ZodObject } from 'zod';
import type { ZodRawShape } from 'zod';

export function useTypedForm<T extends ZodRawShape>(
    initialValues: Partial<z.infer<ZodObject<T>>> | undefined,
    schema: ZodObject<T>,
) {

    const validationSchema = toTypedSchema(schema);

    const { handleSubmit, errors } = useForm({
        validationSchema,
    });
    console.log();

    const fields = reactive(
        Object.fromEntries(
            Object.entries(schema.shape).map(([key, fieldSchema]) => {
                return [
                    key,
                    useField<z.infer<typeof fieldSchema>>(key) as ReturnType<typeof useField<z.infer<typeof fieldSchema>>>,
                ];
            }),
        ),
    );
    onMounted(() => {
        if (!initialValues) return;
        Object.entries(fields).forEach(([key, field]) => {
            if (initialValues[key as keyof typeof initialValues]) {
                field.value = initialValues[key as keyof typeof initialValues] as any;
            }
        });
    });

    return {
        errors,
        handleSubmit,
        fields,
    };
}