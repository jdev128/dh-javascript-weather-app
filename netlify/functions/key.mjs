export default async (req, context) => {

    console.log("Referer: ", req.headers.get("Referer"));
    console.log("Origin: ", req.headers.get("Origin"));

	return new Response(Netlify.env.get("OPEN_WEATHER_KEY"));
};

export const config = {
	path: "/open-weather-secret",
};
