class Renderer {
    constructor(data){
        this.data = data;
    }

    render(){
        content.empty();
        const template = Handlebars.compile($('#recipesData-template').html());
        content.append(template(this.data));
    }
}