import Image from "next/image";

export default function GuestbookSection() {
  const testimonials = [
    {
      quote: "Creía que hacía ya tiempo que había dejado aquí mi opinión sobre mi experiencia con vosotros… y En cualquier caso, desde 2018 que os descubrí ya no me planteo otro sitio mejor para grabar en mi piel aquello que quiero que sea mío. Quizás algún día dejo que sea Fido quién me deje su firma.. pero lo que sí tengo claro, es que cada línea, cada trazo que llevo de Nina es toda una obra de arte, por muy minimalistas que sean mis diseños, pero es que es la PU** AMA!! Sin olvidar a la jefa de la Recepción, Caro, que ya me conoce hasta con mascarilla anti-Covid. Todo un ejemplo de familia y equipo de 10!! GRANDES!!",
      author: "Lorena",
    },
    {
      quote: "Desde que entras por la puerta hasta que sales un equipo de 10 !ha sido la 4°vez pero volveré, gracias Fido! por plasmar a la perfección algo tan importante para mí! requetesobresaliente!!",
      author: "Patricia Rodríguez",
    },
    {
      quote: "Para ser mi primera vez, me he sentido muy cómodo, me han ayudado y recomendado en todo momento. Dá gusto ir a un sitio así y que te traten tan bien haciéndote sentir como en tu casa. Grandes profesionales, atentos al más mínimo detalle y yo personalmente los recomiendo por donde voy. VOLVERÉ PRONTO",
      author: "José María",
    },
    {
      quote: "Sin duda Nina es la reina de la perfección y no hay línea fina que se le resista. Enamorada de sus trabajos y prueba de ello es que seguirá viéndome por allí. Y Caro es el encanto personalizado. Un 10 por el equipo!",
      author: "Lorena",
    },
    {
      quote: "Muchas gracias por el trato y mi precioso tatuaje, Nina y Caro sois geniales. Volveré prontito por mas tinta, jiji",
      author: "De la Rua",
    },
    {
      quote: "Para mi el mejor estudio de tatuajes que hay genial en el trato y aún más en la calidad de los tatuajes y materiales siempre me he tatuado con ellos y siempre lo haré, los mejores",
      author: "Juansa",
    },
    {
      quote: "Agradecida y emocionada por el gran trabajo q has plasmado en mi tattoo fido!! Todo un artista! sin palabras.",
      author: "Sonia",
    },
    {
      quote: "Sin lugar a dudas, el mejor sitio y los mejores profesionales....Despues de buscar , comparar , investigar y visitar mas de 15 estudios, lo elegi por profesionalidad y confianza que dan desde el primer momento. Volveré, lo aseguro...Una experiencia inolvidable.",
      author: "Hozeliyo",
    },
    {
      quote: "Hola, tenia ganas de encontrar un buen estudio de tatuajes y ayer me di cuenta de que sois los mejores con diferencia. fui desde Nerja hasta fuengirola pero sabemos que ha merecido la pena. Ya mismo estare tatuandome con vosotros.por cierto dais muy buen rollo y confianza. Eso invita a tatuarse con vosotros desde el primer momento , jejeje",
      author: "Laura",
    },
    {
      quote: "Una web chulísima, la mejor que he visto en vuestro sector. Espero poder visitaros pronto y nos hablan muy bien de vosotros que hay muuuucha publi de vuestro trabajo aqui en Cordoba",
      author: "Sabrina",
    },
  ];

  return (
    <div className="bg-[var(--card-bg)] py-16 sm:py-24 lg:py-32 rounded-lg shadow-xl mb-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center mb-16">
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-black p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
            <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
            <p className="text-[var(--primary-color)] font-semibold text-right">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

