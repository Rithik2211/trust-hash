

const steps = [
    {
      title: "Explore Services",
      description: "Browse our range of blockchain solutions tailored for various business needs.",
    },
    {
      title: "Request Consultation",
      description: "Schedule a consultation where we design a custom blockchain solution for you.",
    },
    {
      title: "Development & Delivery",
      description: "We develop and implement the agreed-upon blockchain solution for your business.",
    },
    {
      title: "Ongoing Support",
      description: "We provide continuous support and optimization to ensure long-term success.",
    },
  ]

const Work = () => {
return(
    <section className="mb-16">
    <h2 className="text-3xl font-semibold text-center mb-8 text-white">How It Works</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold mb-4">
            {index + 1}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
          <p className="text-gray-400">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
)}

export default Work;