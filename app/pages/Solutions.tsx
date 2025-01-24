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

const Solution=({ id }: { id?: string })=>{

return (

    <div id={id} className="flex flex-col justify-center items-center w-full h-full md:h-screen text-white gap-[20px] px-6 py-[40px]">
      <div className="flex text-center justify-center items-center w-full px-4 pb-[50px]">
        <h2 className="text-[35px] md:text-[45px] font-semibold">Our Core Services</h2>
      </div>
      <div className="flex flex-row justify-evenly items-center w-screen flex-wrap gap-8">
        {solutions.map((solution, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700 w-[350px]">
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
    </div>
)

}

export default Solution;