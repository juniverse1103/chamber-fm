# Dockerfile for Phoenix (Elixir) app
FROM hexpm/elixir:1.15.7-erlang-26.0.2-alpine-3.18.3
WORKDIR /app
COPY . .
RUN mix local.hex --force && mix local.rebar --force && mix deps.get
EXPOSE 4000
CMD ["mix", "phx.server"]
