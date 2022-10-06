$(function () {
  $("button").on("click", function () {
    // Wariant 1
    // $.get("https://akademia108.pl/api/ajax/get-post.php")
    //   .done(function (data) {
    //     $("body").append(`
    //       <div>
    //         <p>ID: ${data.id}</p>
    //         <p>ID: ${data.userId}</p>
    //         <h3>ID: ${data.title}</h3>
    //         <p>${data.body}</p>
    //       </div>
    //     `);
    //   })
    //   .fail(function (err) {
    //     console.error(err);
    //   });

    // Wariant 2
    $.getJSON("https://akademia108.pl/api/ajax/get-post.php")
      .done(function (data) {
        $("body").append(`
            <div>
              <p>ID: ${data.id}</p>
              <p>ID: ${data.userId}</p>
              <h3>ID: ${data.title}</h3>
              <p>${data.body}</p>
            </div>
          `);
      })
      .fail(function (err) {
        console.error(err);
      });
  });
});
