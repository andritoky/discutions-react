import React from "react";

export class ErrorBondary extends React.Component {
    constructor(props){
        super(props)
        this.state = {error: false}
    }
    static getDerivedStateFromError(error){
        return {error: true}
    }
    componentDidCatch (error , errorInfo) {
        console.log("Error bondary : ", error , errorInfo);
    }
    render() {
        if(this.state.error){
            return <div className="alert alert-danger"> Un probleme a survenus , verifier votre connexion internet !</div>
        }
        return this.props.children //rendre les different enfant
    }
}