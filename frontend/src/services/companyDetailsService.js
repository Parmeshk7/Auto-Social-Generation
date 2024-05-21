import axiosInstance from "../config/axiosInstance";

export const fetchLinkedInInfo = async (domains) => {
  try {
    const domainList = String(domains)
      .trim()
      .split("\n")
      .map((domain) => domain.trim());
    const response = await axiosInstance.post("/linkedin/insights", domainList);
    return response.data;
  } catch (error) {
    console.error("Error fetching LinkedIn info:", error.message);
  }
};

export const fetchAllInsights = async () => {
  try {
    const response = await axiosInstance.get("/linkedin/insights");
    return response.data;
  } catch (error) {
    console.error("Error fetching all insights:", error.message);
  }
};
