"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var apollo_server_express_1 = require("apollo-server-express");
var app = express();
var schema = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    me: User\n  }\n\n  type User {\n    username: String\n  }\n"], ["\n  type Query {\n    me: User\n  }\n\n  type User {\n    username: String\n  }\n"])));
var resolvers = {
    Query: {
        me: function () {
            return {
                username: 'Usuario',
            };
        },
    },
};
var server = new apollo_server_express_1.ApolloServer({
    typeDefs: schema,
    resolvers: resolvers,
});
server.applyMiddleware({ app: app, path: '/graphql' });
app.listen({ port: 4000 }, function () {
    console.log('Apollo server on http://localhost:4000/grapqh');
});
var templateObject_1;
