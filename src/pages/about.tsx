import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>О нас | My-store</title>
        <meta
          name="description"
          content="Узнайте больше о магазине My-store — кто мы, чем занимаемся и во что верим."
        />
      </Head>

      <section className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">О нас</h1>
        <p className="text-gray-700 leading-relaxed">
          Добро пожаловать в <strong>My-store</strong> — онлайн-магазин,
          созданный с любовью к качеству, честности и удобству.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Мы предлагаем только проверенные товары, которые выбираем лично. Наша
          цель — сделать шопинг простым, быстрым и приятным для каждого клиента.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Мы верим в прозрачность, доверие и развитие. Если у вас есть идеи или
          предложения — мы всегда открыты!
        </p>
      </section>
    </>
  );
}
