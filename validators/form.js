
export const validarFormulario = (value) => {
    try {
        
        let errors = [];

        Object.keys(value).forEach(key => {
            if (value[key].trim() === '') {
                errors.push(`El campo ${key} es obligatorio`);
            }
        })

        return errors;

    } catch (error) {
        console.log('error');
    }
    

}