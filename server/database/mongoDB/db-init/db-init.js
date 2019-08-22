db.createUser({
  user: 'devUser',
  pwd: 'devSecretPassword',
  roles: [{ role: 'dbAdmin', db: 'room_book_db' }]
});
