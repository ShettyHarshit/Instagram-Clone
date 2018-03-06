docker build -f ror.Dockerfile -t blog-web .
docker run -v $PWD:/app blog-web /bin/bash -c "cp /gemfile/Gemfile.lock /app"
