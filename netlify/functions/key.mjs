export default async (req, context) => {

    const REFERER = req.headers.get("Referer");
    console.log(context.site.url);
    if (REFERER === context.site.url) {
        return new Response(Netlify.env.get("OPEN_WEATHER_KEY"));
    } else {
        return new Response(null, {status: 401});
    }

};

export const config = {
	path: "/open-weather-secret",
};
