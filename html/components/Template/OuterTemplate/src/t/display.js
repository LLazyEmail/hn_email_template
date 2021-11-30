const displayMain = () => {
  
    const head = displayHead("Pixels Per Inch");
    const body = displayBody();
    
    return mainComponent(head, body);
}

const displayBody = () => {
    return EmailTemplateBodyComponent(footer(), logoTop, logoBottom, '');
}


const displayTemplate = () => {

    
}