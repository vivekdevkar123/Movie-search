$( document ).ready(function() {

    var apikey = "4a6cb45a";

    $("#movieForm").submit(function(event){
        event.preventDefault();

        var movie = $("#movie").val();


        var url = "http://www.omdbapi.com/?apikey=" + apikey

        $.ajax({
            method:'GET',
            url:url+"&t="+movie,
            success:function(data){

                console.log(data)
                
                var title = `
                <h1 class="card-title">${data.Title}</h1>
                `

                var poster = `
                <img style = "float:left" class = "img-fluid rounded-start" src="${data.Poster}"/>
                `

                var plot = `
                <p class="card-text">${data.Plot}</p>
                `

                var cast = `
                <h6 class="card-text">Cast : ${data.Actors}</h6>
                <h6 class="card-text">BoxOffice Collection : ${data.BoxOffice}</h6>
                <h6 class="card-text">Language : ${data.Language}</h6>
                <h6 class="card-text">Released Date : ${data.Released}</h6>
                <h6 class="card-text">IMDB Rating : ${data.imdbRating}</h6>
                <h6 class="card-text">Total Awards : ${data.Awards}</h6>
                <h6 class="card-text">Duration of Movie : ${data.Runtime}</h6>
                `
                $("#poster").html(poster)
                $("#title").html(title)
                $("#plot").html(plot)
                $("#cast").html(cast)
            }
        })
    })
})