import { CheckCircle, Layers, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
const solutions = [
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "Seamless Adoption",
      description:
        "We make blockchain adoption seamless for businesses, modernizing operations and keeping them ahead of the curve.",
    },
    {
      icon: <Layers className="h-8 w-8 text-green-600" />,
      title: "Tailored Solutions",
      description:
        "We unlock new revenue opportunities by designing blockchain solutions tailored to your specific business needs.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: "Education & Support",
      description:
        "We educate businesses through workshops, resources, and consultations, empowering them with essential blockchain knowledge.",
    },
  ]

const Solution=()=>{

return (

    <section className="mb-16 mx-[12px]">
      <h2 className="text-3xl font-semibold text-center mb-8 text-white">Our Core Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
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
    </section>
)

}

export default Solution;