const url ="https://majazocom.github.io/Data/solaris.json";


const fetchbodies = async () => {
    try {
      const response = await fetch("https://majazocom.github.io/Data/solaris.json");
      if (!response.ok) {
        throw new Error("Failed to fetch bodies");
      }
      
    } catch (error) {
      console.error("Error fetching bodies:", error);
    }
    const data = await result.json()
      return data
    
  };
  fetchbodies();