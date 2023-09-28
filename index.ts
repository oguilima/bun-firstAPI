const server = Bun.serve({
    port: 3000,
    fetch(request): any {
        return Response.json({ my: "data" });
    },
});


console.log(`Listening on localhost:${server.port}`);