export default async (req, context) => {

    console.info("Referer: ", req.headers.get("Referer"));
    console.info("Origin: ", req.headers.get("Origin"));

	return new Response(Netlify.env.get("OPEN_WEATHER_KEY"));
};

export const config = {
	path: "/open-weather-secret",
};
