FROM nginx
COPY ["index.html", "app.js", "styles.css", "/usr/share/nginx/html/"]