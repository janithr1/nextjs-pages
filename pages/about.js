import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const pillars = ["Freedom of Expression, Assembly and Association", "Right to Privacy", "Right to Equality and Non-Discrimination"];
  const [selectedPillar, setSelectedPillar] = useState(pillars[0]);
  const [stages, setStages] = useState([]);

  // Function to fetch all stages related to the selected pillar
  const digitalRightFetchStages = async (pillar) => {
    try {
      console.log('pillar134', pillar)
      const response = await fetch(`/nextjs-pages/api/digitalRightStages?pillar=${pillar}`)
      const data = await response.json();
      setStages(data); // Store the fetched stages in the state
    } catch (error) {
      console.error("Error fetching stages:", error);
    }
  };

  // Call the function whenever the selected pillar changes
  useEffect(() => {
    if (selectedPillar) {
      digitalRightFetchStages(selectedPillar);
    }
  }, [selectedPillar]);

  // Handle dropdown change
  const handlePillarChange = async (event) => {
    setSelectedPillar(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Digital Right Stages</title>
        <meta name="description" content="Fetch and display digital right stages" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Digital Right Stages</h1>

        {/* Dropdown to select pillar */}
        <label htmlFor="pillar-select">Select Pillar:</label>
        <select
          id="pillar-select"
          value={selectedPillar}
          onChange={handlePillarChange}
        >
          {pillars.map((pillar) => (
            <option key={pillar} value={pillar}>
              {pillar}
            </option>
          ))}
        </select>

        {/* Display fetched stages */}
        <div className={styles.stages}>
          <h2>Stages for {selectedPillar}:</h2>
          <ul>
            {stages.length > 0 ? (
              stages.map((stage, index) => (
                <li key={index}>{JSON.stringify(stage)}</li>
              ))
            ) : (
              <li>No stages found for the selected pillar.</li>
            )}
          </ul>
        </div>
      </main>
    </div>
  );
}
