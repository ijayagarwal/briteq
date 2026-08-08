const staticSiteWorker = {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404) {
      return response;
    }

    const notFoundUrl = new URL("/404.html", request.url);
    const notFoundPage = await env.ASSETS.fetch(new Request(notFoundUrl));

    if (!notFoundPage.ok) {
      return response;
    }

    return new Response(notFoundPage.body, {
      status: 404,
      statusText: "Not Found",
      headers: notFoundPage.headers,
    });
  },
};

export default staticSiteWorker;
