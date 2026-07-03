FROM ruby:3.2.11-bookworm

WORKDIR /site

COPY Gemfile Gemfile.lock ./
RUN bundle config set --local path /usr/local/bundle \
    && bundle config set --local force_ruby_platform true \
    && bundle install

COPY . .

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload", "--force_polling"]
