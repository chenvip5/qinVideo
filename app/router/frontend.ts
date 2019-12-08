import { Application } from 'egg';

export default (app: Application) => {
	const { router, controller, middleware } = app;
	const auth = middleware.auth;
	const api = '/api/v2';

	// config
	router.get(`${api}/config`, auth(0), controller.frontend.config.info);

	// user
	router.get(`${api}/user`, auth(0), controller.frontend.user.info);
	router.post(`${api}/auth/login`, auth(0), controller.frontend.user.login);
	router.post(`${api}/auth/register`, auth(0), controller.frontend.user.register);
	router.post(`${api}/auth/send`, auth(0), controller.frontend.user.resetPasswordMail);
	router.post(`${api}/auth/reset`, auth(0), controller.frontend.user.resetPasswordAuth);
};