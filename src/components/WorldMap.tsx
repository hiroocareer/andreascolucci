import { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { motion } from "framer-motion";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

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
  "504", // Morocco
]);

const WorldMap = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 120,
          center: [20, 20],
        }}
        width={800}
        height={600}
        className="w-full h-auto"
        style={{ maxHeight: "480px" }}
        viewBox="0 40 800 420"
        role="img"
        aria-label="World map highlighting countries where Andreas Colucci has worked: Italy, Spain, France, Portugal, Germany, Belgium, Switzerland, Croatia, Romania, Ireland, UK, USA, Panama, Guatemala, India, Thailand, China, South Africa, UAE, Netherlands, Andorra, Mexico, Morocco"
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties?.name;
              // Exclude French Guiana (part of France in some topologies)
              const isFrenchGuiana = name === "Fr. S. Antarctic Lands" || name === "French Guiana";
              const isHighlighted = !isFrenchGuiana && HIGHLIGHTED_COUNTRIES.has(geo.id);
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
