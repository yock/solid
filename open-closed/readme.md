# Open-Closed

Objects should be open for extension but closed for modification

## Notes

In the solution the implementation details of the request classes are
unimportant. We can imagine how `path` and `extractResponse` work in each case.
That these exist as an integration point allows us to introduce any
implementation we need.
