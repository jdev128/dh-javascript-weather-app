export default async (req, context) => {
	return new Response(Netlify.env.get("OPEN_WEATHER_KEY"));
};

export const config = {
	path: "/open-weather-secret",
};
