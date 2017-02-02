# REDMINE DASHBOARD (Template for development)

* API tunneling (API proxy)
* handlebars UI pages


### Run Server

```shell
$ REDMINE_HOST=http://redmine_url \
  REDMINE_APIKEY=API_KEY \
  npm start
```

> You can find API KEY at the left side on http://redmine_url/my/account


## Using Docker

```shell
$ docker build -t <your username>/redmine-dashboard .
$ docker images
  # Example
  REPOSITORY                           TAG        ID              CREATED
  node                                 boron      539c0211cd76    1 minute ago
  <your username>/redmine-dashboard    latest     d64d3505b0d2    1 minute ago
$ docker run -d \
  -e REDMINE_HOST=http://redmine_url \
  -e REDMINE_APIKEY=API_KEY \
  -p 9000:3000 \
  <your username>/redmine-dashboard
```

### References

Redmine API http://www.redmine.org/projects/redmine/wiki/Rest_api
