//const ERROR_PREVIEW = '`previewText` is a required option for `renderTemplate`';
const checkingPreviewText = (previewText) => {
    if (!previewText) {
        throw new Error('`previewText` is a required option for `renderTemplate`');
    }
}


const previewTextComponent = (title, headStyles, fonts) => {

}



export default previewTextComponent; 