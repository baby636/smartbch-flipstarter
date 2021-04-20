module.exports = {
  //
  server: {
    // Which port the server should listen for requests on.
    port: process.env.PORT || 80,

    // Where to store the servers database file(s).
    database: "./static/campaigns/database.db",
  },
};
