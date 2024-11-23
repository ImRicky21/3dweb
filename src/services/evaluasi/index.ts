import instace from "@/lib/axios/instance";

const evaluasiService = {
  getAllEvaluasi: async () => instace.get("/api/evaluasi"),
};

export default evaluasiService;
