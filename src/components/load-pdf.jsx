import React from "react";

class LoadPDF extends React.Component{

    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
    }

    render(){
        console.log('Hola si jale :)');
        return 0;
    }
}

export default LoadPDF;