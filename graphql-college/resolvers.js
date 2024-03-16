const { Student, Course } = require("./schemas");

const resolvers = {
  Query: {
    async students() {
      const allStudents = await Student.find({});
      return allStudents;
    },
    async student(_, args) {
      const foundStudent = await Student.findById(args.id);
      return foundStudent;
    },
  },
  Mutation: {
    async createUser(_, args) {
      const student = await Student.create(args.user);
      student.courses.push;
      return "student created";
    },
    async updateUser(_, args) {
      const { id } = args;
      const updateUser = await Student.findByIdAndUpdate(id, args.user);
      return "user updated";
    },
    async deleteUser(_, args) {
      await Student.findByIdAndDelete(args.id);
      return "user deleted";
    },
  },
};

module.exports = resolvers;
