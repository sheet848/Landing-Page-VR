import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";
import codeImg from "../assets/code.jpg";

const WorkFlow = () => {
  return (
    <div className="mt-20 text-center text-3xl sm:text-5xl lg:text-6xl">
        <h2 lassName="mt-6 tracking-wide text-center text-3xl sm:text-5xl lg:text-6xl">
            Accelerate your{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            coding workflow.
            </span>
        </h2>
        <flex className="flex flex-wrap justify-center">
            <div className="p-2 w-full lg:w-1/2">
                <img src={codeImg} alt="Coding" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex mb-12">
                        <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                            <CheckCircle2 />
                        </div>
                        <div className="text-left">
                            <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                            <p className="text-xl text-neutral-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </flex>
    </div>
  )
}

export default WorkFlow