# How to create route namespaces with Express

Check the companion [post](TODO LINK)

Run it with `yarn start` and you can
use `curl` to run a couple of requests:

```sh
$ curl http://localhost:3000/api/dog
> get all dogs

$ $ curl http://localhost:3000/api/dog/123
> get dog with id 123

$ curl http://localhost:3000/api/cat/123
> get cat with id 123

$ curl http://localhost:3000/api/cat
> get all cats

# Other routes still work
$ http://localhost:3000/
> Hello World!
```
