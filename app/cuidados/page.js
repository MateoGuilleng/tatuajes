export default function CuidadosPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl uppercase text-[var(--primary-color)]">
            Cuidados de Tatuajes y Piercings
          </h1>
          <p className="mt-4 text-lg leading-8 text-[var(--secondary-color)]">
            Información esencial para el cuidado de tu nuevo tatuaje o piercing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Sección de Cuidados de Tatuajes */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl mb-6">
              Cuidados del Tatuaje
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--secondary-color)]">
              Un tatuaje recién hecho es una herida abierta y debe ser tratado con el máximo cuidado para asegurar una cicatrización adecuada y la longevidad de la tinta. Aquí te dejamos una guía básica:
            </p>
            <ul className="list-disc list-inside mt-6 space-y-3 text-lg leading-8 text-gray-300">
              <li><strong className="text-[var(--primary-color)]">Mantén la zona limpia:</strong> Lava suavemente el tatuaje con agua tibia y jabón neutro varias veces al día.</li>
              <li><strong className="text-[var(--primary-color)]">Hidratación:</strong> Aplica una fina capa de pomada cicatrizante recomendada por tu tatuador. No lo satures.</li>
              <li><strong className="text-[var(--primary-color)]">Evita la exposición solar:</strong> El sol puede dañar la tinta y la piel. Mantén tu tatuaje cubierto o usa protector solar de alta protección una vez cicatrizado.</li>
              <li><strong className="text-[var(--primary-color)]">No rasques ni arranques costras:</strong> Es parte del proceso de curación.</li>
              <li><strong className="text-[var(--primary-color)]">Evita sumergirlo:</strong> No nades ni tomes baños largos hasta que el tatuaje esté completamente curado.</li>
            </ul>
            <p className="mt-6 text-lg leading-8 text-[var(--secondary-color)]">
              Para más detalles y recomendaciones personalizadas, no dudes en consultarnos directamente en el estudio.
            </p>
          </div>

          {/* Sección de Cuidados de Piercings */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl mb-6">
              Cuidados del Piercing
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--secondary-color)]">
              El cuidado adecuado de tu piercing es crucial para prevenir infecciones y asegurar una curación exitosa. Sigue estos pasos:
            </p>
            <ul className="list-disc list-inside mt-6 space-y-3 text-lg leading-8 text-gray-300">
              <li><strong className="text-[var(--primary-color)]">Limpia dos veces al día:</strong> Utiliza una solución salina específica para piercings o suero fisiológico.</li>
              <li><strong className="text-[var(--primary-color)]">No toques el piercing con manos sucias:</strong> Lávate siempre las manos antes de manipularlo.</li>
              <li><strong className="text-[var(--primary-color)]">Evita el alcohol y el peróxido:</strong> Pueden irritar la piel y retrasar la cicatrización.</li>
              <li><strong className="text-[var(--primary-color)]">No muevas o gires el piercing innecesariamente:</strong> Esto puede irritar la herida.</li>
              <li><strong className="text-[var(--primary-color)]">Sé paciente:</strong> El tiempo de curación varía según la ubicación del piercing. Sigue las indicaciones de tu piercer.</li>
            </ul>
            <p className="mt-6 text-lg leading-8 text-[var(--secondary-color)]">
              Si tienes alguna duda o experimentas algún problema con tu piercing, contáctanos de inmediato.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
