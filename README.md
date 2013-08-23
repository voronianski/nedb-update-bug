# nedb db.update with "upsert: true" bug

Details and discussion - https://github.com/louischatriot/nedb/issues/71

Clone this repo and run ``npm install``.

To represent the bug run ``node bug.js`` 2 times and check file ``.nedbbuggyfile.db`` in your user's home directory - you'll see 2 documents there instead of 1.
