// Check phone input format
export function phoneChecker(input) {
     /*let regex = /^(2|6)[0-9]{8}$/ig;
    return regex.test(input.data)
        ? {...input, isValid: true}
        : {...input, isValid: false, errorMessage: "Format du numéro de téléphone incorrect"}*/

    return inRange(input, 6);
}

// Check password input format
export function passwordChecker(input) {
    return inRange(input, 6)
}

// Check password confirmation input format
export function passwordConfirmChecker(input, passwordInput) {
    return (input.data === passwordInput.data)
        ? {...input, isValid: true}
        : {...input, isValid: false, errorMessage: "La confirmation du mot de passe n'est pas correct"};
}

// Check require input format
export function requiredChecker(input) {
    return inRange(input, 1, "Ce champ est réquis")
}

// Check image input format
export function imageChecker(input) {
    if(input.data.file && input.data.base64) {
        const fileTypeChecked = inImageType(input);
        return fileTypeChecked.isValid ? inImageSize(input) : fileTypeChecked;
    }
    return {...input, isValid: true};
}

// Check required image input format
export function requiredImageChecker(input) {
    if(input.data.file && input.data.base64) {
        const fileTypeChecked = inImageType(input);
        return fileTypeChecked.isValid ? inImageSize(input) : fileTypeChecked;
    }
    return{...input, isValid: false, errorMessage: "Ce champ est réquis"};
}

// Check file input format
export function fileChecker(input, extension = 'file') {
    if(input.data !== '') {
        const fileTypeChecked = inFileType(input, extension);
        return fileTypeChecked.isValid ? inFileSize(input) : fileTypeChecked;
    }
    return {...input, isValid: true};
}

// Check required file input format
export function requiredFileChecker(input, extension = 'file') {
    if(input.data !== '') {
        const fileTypeChecked = inFileType(input, extension);
        return fileTypeChecked.isValid ? inFileSize(input) : fileTypeChecked;
    }
    return{...input, isValid: false, errorMessage: "Ce champ est réquis"};
}

// Helper function to check in image type input format
function inImageType(input) {
    const acceptedFileTYpe = ['image/png', 'image/jpg', 'image/jpeg'];
    return acceptedFileTYpe.includes(input.data.file.type)
        ? {...input, isValid: true}
        : {...input, isValid: false, errorMessage: 'Format non supporté'};
}

// Helper function to check in image size input format
function inImageSize(input) {
    try {
        return input.data.file.size < 2000000
            ? {...input, isValid: true}
            : {...input, isValid: false, errorMessage: 'Image trop lourde'};
    }
    catch (e) { return {...input, isValid: false, errorMessage: "Erreur de chargement de l'image"} }
}

// Helper function to check in file type format
function inFileType(input, extension) {
    const acceptedFileTYpe = (extension === 'file')
        ? ['application/pdf', 'image/png', 'image/jpg', 'image/jpeg']
        : ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    return (acceptedFileTYpe.includes(input.data.type))
            ? {...input, isValid: true}
            : {...input, isValid: false, errorMessage: 'Format non supporté'};

}

// Helper function to check in file size input format
function inFileSize(input) {
    try {
        return input.data.size < 10000000
            ? {...input, isValid: true}
            : {...input, isValid: false, errorMessage: 'Fichier trop lourde'};
    }
    catch (e) { return {...input, isValid: false, errorMessage: "Erreur de chargement du fichier"} }
}

// Helper function to check in range input format
function inRange(input, min = 2, errorMessage = null) {
    const length = input.data ? input.data.toString().length : 0;
    const message = errorMessage ? errorMessage : `Ce champ doit avoir au moins ${min} caractères`;
    return (length >= min)
        ? {...input, isValid: true}
        : {...input, isValid: false, errorMessage: message}
}
