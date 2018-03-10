# A simple http server
To test a Nginx config with multiple routes to local servers, externally exposed on port 80 but internally redirected to port 3000 or other.



Nginx config file in `/etc/nginx/site-available/` with a symlink to `/etc/nginx/site-enabled/`
```
server {
    listen        80;

#   For testing, we may use a "catch all" rule
#   server_name  _;

    server_name subdom.domain.com;


#   The root route is redirected to the internal facing port 3000	
    location / {
        proxy_pass http://127.0.0.1:3000;
    }


#   The 'other' route is redirected to the internal facing port 3001
#   Mind the '/' at the end of the route and the url!	
    location /other/ {
        proxy_pass http://127.0.0.1:3001/;
    }

}
```

Then call `sudo service nginx restart` to restart Nginx with this new config file.

# Launch

with the command `node index.js 3005` or with `./launch3005.sh`. The second option is more compatible `pm2` because it allows to use pm2 arguments such as `--name`.