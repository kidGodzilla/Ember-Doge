App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.Router.map(function() {
    this.resource('application', { path: '/' });
});

App.ApplicationRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('applicationModel');
    },
    actions: {
        openModal: function() {
          $('.overlay').show();
        },
        addItem: function() {
            var newObj = {};
            $("#addDoge input[type=text]").each(function() {
                var id = $(this).attr('id');
                var val = $(this).val();
                newObj[id] = val;
            });
            // newObj['id'] = 31;
            console.log([newObj]);
            App.ApplicationModel.store.push('ApplicationModel', newObj);
            $('.overlay').hide();
            $('#addDoge')[0].reset();
        },
        cancel: function() {
            $('.overlay').hide();
            $('#addDoge')[0].reset();
        }
    }
});

App.ApplicationAdapter = DS.FixtureAdapter;

App.ApplicationModel = DS.Model.extend({
    name: DS.attr('string'),
    image: DS.attr('string'),
    tagline: DS.attr('string'),
    age: DS.attr('string'),
    color: DS.attr('string'),
    description: DS.attr('string')
});

App.IndexView = Ember.View.extend({
	didInsertElement: function() {
		$('a[data-featherlight]').off('click').featherlight();
		console.log('Ember Element Inserted!');
	}
});

App.ApplicationModel.FIXTURES = [
    {
        "id": 0,
        "name": "Standard Doge",
        "image": "https://lh5.googleusercontent.com/-7zFDHK5X45w/AAAAAAAAAAI/AAAAAAAAAA0/9ZQnnvMrAOA/photo.jpg",
        "tagline": "Wow. How Pronounce. So Mystery.",
        "age": "7 doge years",
        "color": "Golden Brown",
        "description": "This is the standard doge found throughout the internets. Use extreme caution when approaching this doge. It should be considered armed and ridiculous."
    },
    {
        "id": 1,
        "name": "Fractal Doge",
        "image": "http://growld.com/wp-content/uploads/2014/02/fractal-doge.gif",
        "tagline": "Wow. How Fractal. So Mystery.",
        "age": "5 doge years",
        "color": "golden brown",
        "description": "This doge fractals a lot. Its ears become doges."
    },
    {
        "id": 2,
        "name": "Pixelated Doge",
        "image": "http://growld.com/wp-content/uploads/2014/02/pixel-doge.gif",
        "tagline": "Wow. How Pixelated. Much animated. So annoying.",
        "age": "9 doge years",
        "color": "Ultimate Brown",
        "description": "This is an animated version of the Doge. It is incredibly annoying."
    },
    {
        "id": 3,
        "name": "Infinity Doge",
        "image": "http://growld.com/wp-content/uploads/2014/02/infinity-doge.gif",
        "tagline": "So inifity. Very lol. Much amusing.",
        "age": "7 doge years",
        "color": "golden brown",
        "description": "This is a ridiculous doge gif that zooms infinitely using a looping GIF."
    },
    {
        "id": 4,
        "name": "Space Doge",
        "image": "http://growld.com/wp-content/uploads/2014/02/space-doge.gif",
        "tagline": "Wow. Much launch. Very antigravity.",
        "age": "3 doge years",
        "color": "Golden Brown",
        "description": "See doge. See doge float. Float doge, float."
    },
    {
        "id": 5,
        "name": "Super Doge Punch",
        "image": "http://growld.com/wp-content/uploads/2014/02/doge-punch.gif",
        "tagline": "Wow. How real-life. Much powerful. Such strong.",
        "age": "4 doge years",
        "color": "golden brown",
        "description": "DOGE PUNCH SUPER POWERUP AWESOMENESS."
    },
    {
        "id": 6,
        "name": "I am Bat-Doge",
        "image": "http://growld.com/wp-content/uploads/2014/02/such-gotham.gif",
        "tagline": "I AM bat-doge. Such important.",
        "age": "14 doge years",
        "color": "Black. Also brown.",
        "description": "Bats frighten me. It's time my enemies share my dread."
    },
    {
        "id": 7,
        "name": "A Wild Doge Appeared!",
        "image": "http://0.media.dorkly.cvcdn.com/79/63/33f2d1f368e229c7e09baa64804307b4-a-wild-doge-appeared.jpg",
        "tagline": "Gotta catch 'em all!",
        "age": "< 1 doge year",
        "color": "Tan",
        "description": "Wow, such wilde. Much train. Very pokemans. Wow."
    },
    {
        "id": 8,
        "name": "One Dogection",
        "image": "http://33.media.tumblr.com/6fa663b7ef926a922802bc4abf132bb8/tumblr_mw6lhq6TZe1t1rn28o1_1280.jpg",
        "tagline": "You Doge Know You’re Beautiful",
        "age": "3 doge years",
        "color": "Mostly White",
        "description": "You Doge Know You’re Beautiful. She’s Not a Doge. Best Doge Ever. Last First Doge. Doge While We’re Young. Doge Me (“D-O-G-E ME AGAIN”). Doge All Night."
    },
    {
        "id": 9,
        "name": "Sushi Chef",
        "image": "http://33.media.tumblr.com/1437891d91bc5ca81d894e1bfa1a68d2/tumblr_mwm176O29z1spqx5oo1_500.jpg",
        "tagline": "Wow. Such ninja. So squint.",
        "age": "",
        "color": "",
        "description": "So nippon. Such ganbatte."
    },
    {
        "id": 10,
        "name": "Dogue",
        "image": "http://www.meme-fun.com/wp-content/uploads/2013/10/dogue.jpg",
        "tagline": "Wow. Such Model. So Stylish.",
        "age": "",
        "color": "",
        "description": "Much vogue. Rhymes with Doge (Very debatable). See <a href=\"http://www.google.com/search?q=doge%20definition\">Google</a>."
    },
    {
        "id": 11,
        "name": "Lost Doge",
        "image": "http://melbourneer.com/wp-content/uploads/2013/10/vCI7G3f.jpg",
        "tagline": "Lost Doge. Such Trubble. So Scare.",
        "age": "2 doge years",
        "color": "Transparent",
        "description": ""
    }
];

/* Hacky, but for now it works */
setTimeout(function() {
	new WOW().init();
}, 500);
/* Will break as the model updates because new items will be created without the lightbox bindings */
// setTimeout(function() {
// 	$('a[data-featherlight]').featherlight();
// }, 1000);
// setTimeout(function() {
//     App.ApplicationModel.store.push('ApplicationModel', {
//         "id": 12,
//         "name": "Lost Doge",
//         "image": "http://melbourneer.com/wp-content/uploads/2013/10/vCI7G3f.jpg",
//         "tagline": "Lost Doge. Such Trubble. So Scare.",
//         "age": "2 doge years",
//         "color": "Transparent",
//         "description": ""
//     })
// }, 2500);