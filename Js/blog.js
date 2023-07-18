
var blog = [
  {
    "Image": "../images/Blog img/blog4.jpg",
    "Date" : "19th April",
    "contA": "Best Cupcakes To Pair With Your Coffee",
    "contB": "I like coffee because it gives me the illusion that I might be awake." 
  },
  {
    "Image": "../images/Blog img/blog5.jpg",
    "Date" : "23th March",
    "contA": " Reasons Why You Should Drink Coffee In The Morning",
    "contB": "Life is just one cup of coffee after another, and don't look for anything else." 
  },
  {
    "Image": "../images/Blog img/blog6.jpg",
    "Date" : "23th March",
    "contA": " Reasons Why You Should Drink Coffee In The Morning",
    "contB": "Life is just one cup of coffee after another, and don't look for anything else." 
  },
  {
    "Image": "../images/Blog img/blog7.jpg",
    "Date" : "23th March",
    "contA": "Top 10 reasons why cold coffee is trending",
    "contB": "Our culture runs on coffee and gasoline, the first often tasting like the second." 
  },
  {
    "Image": "../images/Blog img/blog8.jpg",
    "Date" : "23th March",
    "contA": "5 things to remember when making a latte",
    "contB": "Good communication is just as stimulating as black coffee, and just as hard to sleep after." 
  },
  {
    "Image": "../images/Blog img/blog9.jpg",
    "Date" : "23th March",
    "contA": " How to brew coffee the right way",
    "contB": "I think if I were a woman, I'd wear coffee as a perfume." 
  }
];

const gridblog = blog.map(function(element){
      return "<div  class='blogContainer'>\
                <div class='right-img'>\
                  <img src='"+element.Image+"' alt='blog images'>\
                  <span class='blog-date'>"+element.Date+"</span>\
                </div>\
                <div class='right-cont'>\
                  <div class='button-right'>\
                    <button>Coffee</button>\
                    <a>By Admin</a>\
                  </div>\
                  <div class='button-cont'>\
                    <a>"+element.contA+"</a>\
                    <p>"+element.contB+"</p>\
                  </div>\
                </div>\
              </div>";
});

console.log(gridblog);

document.getElementById("blogloop").innerHTML = gridblog.join("");