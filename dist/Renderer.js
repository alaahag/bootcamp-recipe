class Renderer {
    constructor(data){
        this.data = data;
    }

    render(){
        content.empty();
        if (this.data)
        {
            const template = Handlebars.compile($('#recipesData-template').html());
            content.append(template(this.data));
        }
        else
            alert("Sorry, no match found");
    }
}