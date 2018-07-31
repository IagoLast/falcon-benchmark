# falcon-benchmark
Javascript performance benchmark library

## Getting started

Include the script in your html or use it from `npm`.

## API

### `benchmark(name, fn, [opts])`
Compute stats about the given function.

- `name` - Name of the benchmark
- `fn` - Function to benchmark
- `opts` - Options object
    - `runs` - Number of cycles to execute the funcion, default 50000