import { Code,Lightbulb,TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
const solutions = [
    {
      icon: <Code className="h-8 w-8 text-green-600" />,
      title: "Custom Blockchain Development",
      description:
        "Create bespoke blockchain solutions like NFTs, smart contracts, and decentralized apps tailored to your unique business needs.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-green-600" />,
      title: "  Blockchain Integration & Consulting",
      description:
        "Simplify blockchain adoption with seamless system integration and expert consultations, empowering your business to innovate and grow.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Revenue Growth with Blockchain",
      description:
        "Unlock new revenue streams by implementing innovative blockchain-based business models designed for scalability and success.",
    },
  ]

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

const Solution=({ id }: { id?: string })=>{

return (

    <div id={id} className="flex flex-col justify-center items-center w-full h-full md:h-screen text-white gap-[20px] px-6 py-[40px] my-[40px]">
      <div className="flex text-center justify-center items-center w-full px-4 pb-[50px]">
        <h2 className="text-[35px] md:text-[45px] font-semibold">Our Core Services</h2>
      </div>
      <div className="flex flex-row justify-evenly items-center w-screen flex-wrap gap-8 pb-[50px]">
        {solutions.map((solution, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700 w-[350px]  hover:border-green-500 dark:hover:border-green-500
            hover:shadow-xl hover:shadow-green-500/40 hover:-translate-y-1 transition-all duration-300" >
            <CardHeader>
              <div className="mb-2">{solution.icon}</div>
              <CardTitle className="text-white">{solution.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">{solution.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex text-center justify-center items-center w-full px-4 pb-[50px]">
        <h2 className="text-[35px] md:text-[45px] font-semibold text-white">How It Works</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
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
    </div>
)

}

export default Solution;