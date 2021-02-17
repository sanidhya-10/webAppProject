const { ApolloServer } = require("apollo-server");

const fs = require("fs");
const path = require("path");
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb",
});

con.connect();

var r1;
var r2;
const resolvers = {
  Query: {
    getmessage: () => {
      con.query("SELECT message FROM customer", function (err, result, fields) {
        if (err) throw err;
        var res = JSON.parse(JSON.stringify(result));
        //console.log(links);
        r1 = res;
        //console.log(r1);
      });
      return r1;
    },
    getdata: () => {
      r2 =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
      return r2;
    },
  },
  Mutation: {
    post: (parent, args) => {
      var sql = "INSERT INTO customer (email, message) VALUES (?,?)";
      var l1 = {};
      con.query(sql, [args.email, args.message], function (err, result) {
        if (err) throw err;
      });
      //return l1
      const link1 = {
        email: args.email,
        message: args.message,
      };
      // links.push(link1)
      return link1;
    },
  },
};

// 3
const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
  resolvers,
});

server.listen().then(({ url }) => console.log(`server running`));
