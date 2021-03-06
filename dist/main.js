const txt_search = $("#txt_search");
const btn_search = $("#btn_search");
const content = $(".content");

const btnLoadDataClick = function(){
    $.get(`/recipes/${txt_search.val()}`, function(data)
    {
        new Renderer(data).render();
    });
};

const recipeImageClick = function(e){
    alert($(e).attr("data-id"));
};

Handlebars.registerHelper('first', function(object)
{
    //return first ingredient only
    return object[0];
});

btn_search.on('click', btnLoadDataClick);