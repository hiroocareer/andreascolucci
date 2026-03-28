import { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { motion } from "framer-motion";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ISO 3166-1 numeric codes for the countries
const HIGHLIGHTED_COUNTRIES = new Set([
  "380", // Italy
  "724", // Spain
  "250", // France
  "620", // Portugal
  "276", // Germany
  "056", // Belgium
  "756", // Switzerland
  "191", // Croatia
  "642", // Romania
  "372", // Ireland
  "826", // United Kingdom
  "840", // USA
  "591", // Panama
  "320", // Guatemala
  "356", // India
  "764", // Thailand
  "156", // China
  "710", // South Africa
  "784", // UAE
  "528", // Netherlands
  "020", // Andorra
  "484", // Mexico
]);

const WorldMap = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="w-full overflow-hidden" style={{ maxHeight: "420px" }}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 130,
          center: [20, 30],
        }}
        className="w-full h-auto"
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isHighlighted = HIGHLIGHTED_COUNTRIES.has(geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isHighlighted ? "hsl(var(--foreground))" : "hsl(var(--muted))"}
                  stroke="hsl(var(--background))"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: isHighlighted ? "hsl(var(--foreground))" : "hsl(var(--muted))" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </motion.div>
  );
});

WorldMap.displayName = "WorldMap";

export default WorldMap;
