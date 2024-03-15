const Student = require("./schemas");

const resolvers = {
  Query: {
    async students() {
      const allStudents = await Student.find({});
      return allStudents;
    },
  },
  Mutation: {
    async createUser(_, args) {
      await Student.create(args.user);
      return "student created";
    },
  },
};

module.exports = resolvers;
