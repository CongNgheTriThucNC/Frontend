import request from "../request";

export const getJobs = async (dtoFilter) => {
    return request.get("/jobs", { params: dtoFilter });
}