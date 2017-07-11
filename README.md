## Getting Started

+ Create a bare clone of the repository `git clone --bare https://gitlab.com/neucode/neupress.git`
+ Mirror-push to the new repository `cd neupress.git && git push --mirror https://gitlab.com/neucode/<repository>.git`
+ Remove the bare clone `cd .. && rm -rf neupress.git` 
+ Clone the new git repository `git clone git@gitlab.com:neucode/<repository>.git`
+ Change directory to the new repository `cd <repository>`
+ Import all default database settings `gulp db:import`

## Development

+ Install npm dependencies `npm install`
+ Start the WordPress server and watch for changes `gulp`
+ Import the database `gulp db:import`
+ Export the database `gulp db:export`
+ Wordpress running at `http://localhost:8080`

## Contributors

+ Benjamin Wang `benjamin@neucode.com.au`
+ Taiyang Zhang `taiyang@neucode.com.au`
