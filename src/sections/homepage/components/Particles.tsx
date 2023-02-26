import { useCallback } from "react";
import ReactParticles from "react-particles";
import { loadFireflyPreset } from "tsparticles-preset-firefly";


export const Particles = () => {
  const particlesInit = useCallback(async engine => {
    await loadFireflyPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <ReactParticles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        preset: "firefly",
      }}
    />
  );
};