export default async (req, context) => {
	return new Response(`Probando`);
};

export const config = {
	path: "/open-weather-secret",
};
