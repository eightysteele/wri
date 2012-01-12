

// application config
App.modules.Config = function(app) {

    app.config = {
        API_URL: '/api/v0/m',
        LOCAL_STORAGE: false,
        MAP_LAYERS: [
          {
            name: "m0",
            url: "https://wri-01.cartodb.com/tiles/gadm0/{Z}/{X}/{Y}.png?cache_buster=0&sql=SELECT%20*%20FROM%20gadm0%20WHERE%20forma=true"
          }
        ]
    };

}
