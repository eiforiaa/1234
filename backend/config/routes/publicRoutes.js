const publicRoutes = {
  'POST /user': 'UserController.register',
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',
  'GET /places/sync': 'PlaceController.sync',
  'GET /places': 'PlaceController.getAll',
};

module.exports = publicRoutes;
