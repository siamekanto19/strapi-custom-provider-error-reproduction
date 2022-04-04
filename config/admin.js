module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1f3457f8823e56ae7a800c578f1bfeca'),
  },
});
