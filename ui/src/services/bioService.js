import axios from "axios";

const createDatabase = async databaseName => {
  try {
    await axios.put("/api/bios");
  } catch (e) {
    console.log(JSON.stringify(e));
    console.log(`Could not create ${databaseName} database`);
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
      }
      return [];
    }
  }
};
