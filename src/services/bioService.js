import axios from "axios";

const createDatabase = async databaseName => {
  try {
    await axios.put("/api/bios");
  } catch (e) {
  }
};

export default {
  getBios: async () => {
    try {
      const response = await axios.post(
        "/api/bios/_all_docs?include_docs=true",
        { "Content-Type": "application/json" }
      );

      let bios = [];
      for (const result of response.data.rows) {
        result.doc.id = result.id;
        bios.push(result.doc);
      }

      return bios;
    } catch (e) {
      if (e.message === "Request failed with status code 404") {
        await createDatabase("bios");
        return [];
      } else {
        throw new Error("Could not connect to database!");
      }
    }
  },
  createNewBio: async (fullname, email, tags) => {
    try {
      await axios.put(`/api/bios/${email}`, {
        fullname: fullname,
        email: email,
        tags: tags
      });
    } catch (error) {
      throw new Error(error.message);
    }
  },
  updateBio: async (fullname, email, tags) => {
    try {
      const response = await axios.get(`/api/bios/${email}`);
      await axios.put(`/api/bios/${email}`, {
        fullname: fullname,
        email: email,
        tags: tags,
        _rev: response.data._rev
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
};
