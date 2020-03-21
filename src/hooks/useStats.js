import React, { useState, useEffect } from "react";

export default function useStats(url) {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setStats(data);
        setLoading(false);
    }
    getData();

  }, [url]);

  return {
    stats,
    loading
  };
}
